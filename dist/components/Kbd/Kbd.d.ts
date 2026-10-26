import { default as React } from 'react';
export type KbdSize = "small" | "medium";
export type KbdTone = "default" | "inverse";
export type KbdProps = {
    /** The visible glyph, e.g. "⌘" or "Enter". */
    children: React.ReactNode;
    /** The spoken name, e.g. "Command". Rendered as visually hidden text. */
    label: string;
    size?: KbdSize;
    /** `inverse` is for dark surfaces such as a Tooltip. */
    tone?: KbdTone;
    "data-testid"?: string;
    className?: string;
};
export declare const KbdCap: ({ children, size, tone, }: Pick<KbdProps, "children" | "size" | "tone">) => React.JSX.Element;
declare function Kbd({ children, label, size, tone, "data-testid": dataTestId, className, }: KbdProps): React.ReactElement;
export default Kbd;
