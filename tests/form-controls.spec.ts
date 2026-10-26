import AxeBuilder from '@axe-core/playwright';
import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => { await page.goto('/tests/fixtures/forms.html'); });

test('visible labels focus controls, refs work, and blur reaches RHF and caller', async ({ page }) => {
  // Complete text fields first so blur validation does not move the next click target.
  await page.getByLabel('Email', { exact: true }).fill('reader@example.test');
  await page.getByLabel('Notes').fill('A note');
  await page.getByLabel('Role').click();
  await page.getByRole('option', { name: 'Reader', exact: true }).click();
  await page.getByLabel('Proof', { exact: true }).setInputFiles({ name: 'proof.png', mimeType: 'image/png', buffer: Buffer.from('test') });
  for (const name of ['Email', 'Notes', 'Role', 'Proof']) {
    const field = page.getByLabel(name, { exact: true });
    await expect(field).toHaveAccessibleName(name);
    await page.locator('label').filter({ hasText: new RegExp(`^${name}$`) }).click();
    await expect(field).toBeFocused();
  }
  for (const name of ['email', 'notes', 'role', 'proof']) {
    await page.getByTestId(`focus-${name}`).click();
    await expect(page.getByLabel(name[0].toUpperCase() + name.slice(1), { exact: true })).toBeFocused();
  }
  await page.getByTestId('external-ref').click();
  await expect(page.getByLabel('Email', { exact: true })).toBeFocused();
  await page.keyboard.press('Tab');
  await expect(page.getByRole('status', { name: 'Touched fields' })).toContainText('"email":true');
  await expect(page.getByRole('status', { name: 'Blur callbacks' })).not.toHaveText('0');
  await expect(page.getByLabel('Disabled field')).toBeDisabled();
  await expect(page.getByLabel('Read-only field')).toHaveAttribute('readonly');
  await expect(page.getByLabel('Existing logo')).not.toHaveAttribute('required');
});

test('errors describe invalid controls and correction submits text, selection, and file', async ({ page }) => {
  await page.getByTestId('submit').click();
  await expect(page.getByLabel('Email', { exact: true })).toBeFocused();
  for (const name of ['Email', 'Notes', 'Role', 'Proof']) {
    const field = page.getByLabel(name, { exact: true });
    await expect(field).toHaveAttribute('aria-invalid', 'true');
    await expect(field).toHaveAccessibleDescription(/This field is required/);
  }
  await expect(page.getByLabel('Email', { exact: true })).toHaveAccessibleDescription(/Use your work address/);
  await page.getByLabel('Email', { exact: true }).fill('reader@example.test');
  await page.getByLabel('Notes').fill('Please review this proof.');
  await page.getByLabel('Role').click();
  await page.getByRole('option', { name: 'Reader', exact: true }).click();
  await page.getByLabel('Proof', { exact: true }).setInputFiles({ name: 'proof.png', mimeType: 'image/png', buffer: Buffer.from('test') });
  await page.getByTestId('submit').click();
  await expect(page.getByRole('status', { name: 'Submitted data' })).toContainText('"proof":"proof.png"');
  await expect(page.getByRole('status', { name: 'Submitted data' })).toContainText('"role":"reader"');
  await expect(page.getByLabel('Email', { exact: true })).toHaveAttribute('aria-invalid', 'false');
  await expect(page.getByLabel('Email', { exact: true })).toHaveAccessibleDescription('Use your work address. Email help');
});

test('full form has no automated A/AA accessibility violations before and after validation', async ({ page }) => {
  for (const invalid of [false, true]) {
    if (invalid) await page.getByTestId('submit').click();
    const result = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa']).analyze();
    expect(result.violations).toEqual([]);
  }
});
