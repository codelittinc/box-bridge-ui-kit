import { defineConfig } from '@playwright/test';
export default defineConfig({
  testDir: './tests',
  use: { baseURL: 'http://127.0.0.1:6107' },
  webServer: { command: 'npx vite --host 127.0.0.1 --port 6107 --strictPort', url: 'http://127.0.0.1:6107/tests/fixtures/forms.html', reuseExistingServer: false },
});
