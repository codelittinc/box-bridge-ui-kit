import { useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { useForm } from 'react-hook-form';
import { BoxBridgeThemeProvider, TextInputController, TextAreaController, SelectController, FileInputController } from '../../src';

type Values = { email: string; notes: string; role: string; proof: File | null; locked: string; readonly: string; existing: File | null };
function Fixture() {
  const { control, handleSubmit, setFocus, formState: { touchedFields } } = useForm<Values>({
    mode: 'onBlur',
    defaultValues: { email: '', notes: '', role: '', proof: null, locked: 'Disabled', readonly: 'Read only', existing: null },
  });
  const externalRef = useRef<HTMLInputElement>(null);
  const [saved, setSaved] = useState('');
  const [callbackCount, setCallbackCount] = useState(0);
  return <main><h1>Form controllers</h1><form noValidate onSubmit={handleSubmit(data => setSaved(JSON.stringify({ ...data, proof: data.proof?.name })))}>
    <p id="email-hint">Use your work address.</p>
    <TextInputController control={control} name="email" id="email" fieldTitle="Email" required
      helperText="Email help" inputRef={externalRef} onBlur={() => setCallbackCount(n => n + 1)}
      slotProps={{ htmlInput: { 'aria-describedby': 'email-hint', 'data-testid': 'email-input' } }} />
    <TextAreaController control={control} name="notes" fieldTitle="Notes" required />
    <SelectController control={control} name="role" fieldTitle="Role" placeholder="Choose a role" required options={[{ value: 'reader', label: 'Reader' }]} />
    <FileInputController control={control} name="proof" fieldTitle="Proof" required accept="image/*" />
    <TextInputController control={control} name="locked" fieldTitle="Disabled field" disabled />
    <TextInputController control={control} name="readonly" fieldTitle="Read-only field" slotProps={{ htmlInput: { readOnly: true } }} />
    <FileInputController control={control} name="existing" fieldTitle="Existing logo" existingFileName="saved.png" required />
    <button type="submit" data-testid="submit">Save</button>
    {(['email', 'notes', 'role', 'proof'] as const).map(name => <button key={name} type="button" data-testid={`focus-${name}`} onClick={() => setFocus(name)}>Focus {name}</button>)}
    <button type="button" data-testid="external-ref" onClick={() => externalRef.current?.focus()}>External ref</button>
    <output aria-label="Touched fields">{JSON.stringify(touchedFields)}</output>
    <output aria-label="Blur callbacks">{callbackCount}</output>
    <output aria-label="Submitted data">{saved}</output>
  </form></main>;
}
createRoot(document.getElementById('root')!).render(<BoxBridgeThemeProvider><Fixture /></BoxBridgeThemeProvider>);
