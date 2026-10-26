import { default as React } from 'react';
import { KbdSize, KbdTone } from './Kbd';
export type KbdKey = {
    /** The visible glyph, e.g. "⌘". */
    glyph: string;
    /** The spoken name, e.g. "Command". */
    label: string;
};
export type KbdCombo = {
    /** `combo`: pressed together. `sequence`: pressed one after another. */
    kind: "combo" | "sequence";
    keys: KbdKey[];
};
export type KbdShortcutProps = {
    /** More than one entry renders as alternatives joined by " / ". */
    shortcuts: KbdCombo[];
    /** Mac combos sit together with no separator; elsewhere they use " + ". */
    isMac: boolean;
    /** Localized word between sequence keys, e.g. "then". */
    thenLabel: string;
    /** Localized word spoken between alternatives, e.g. "or". */
    orLabel: string;
    size?: KbdSize;
    tone?: KbdTone;
    "data-testid"?: string;
};
declare function KbdShortcut({ shortcuts, isMac, thenLabel, orLabel, size, tone, "data-testid": dataTestId, }: KbdShortcutProps): React.ReactElement;
export default KbdShortcut;
