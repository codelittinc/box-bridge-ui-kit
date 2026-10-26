import React from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";

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

export const KbdCap = ({
  children,
  size = "medium",
  tone = "default",
}: Pick<KbdProps, "children" | "size" | "tone">) => (
  <kbd aria-hidden className={classNames(styles.kbd, styles[size], styles[tone])}>
    {children}
  </kbd>
);

function Kbd({
  children,
  label,
  size = "medium",
  tone = "default",
  "data-testid": dataTestId,
  className,
}: KbdProps): React.ReactElement {
  return (
    <span className={className} data-testid={dataTestId}>
      <KbdCap size={size} tone={tone}>
        {children}
      </KbdCap>
      <span className={styles["visually-hidden"]}>{label}</span>
    </span>
  );
}

export default Kbd;
