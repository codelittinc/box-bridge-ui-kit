import React from "react";
import classNames from "classnames";
import { visuallyHidden } from "@mui/utils";
import Typography from "../Typography/Typography";
import { KbdCap, KbdSize, KbdTone } from "./Kbd";
import styles from "./styles.module.scss";

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

const spokenName = (shortcut: KbdCombo, thenLabel: string) =>
  shortcut.keys
    .map((key) => key.label)
    .join(shortcut.kind === "sequence" ? ` ${thenLabel} ` : " ");

function KbdShortcut({
  shortcuts,
  isMac,
  thenLabel,
  orLabel,
  size = "medium",
  tone = "default",
  "data-testid": dataTestId,
}: KbdShortcutProps): React.ReactElement {
  const separator = (text: string, className: string) => (
    <Typography
      component="span"
      variant="caption"
      className={classNames(styles.separator, styles[className])}
      sx={{ color: tone === "inverse" ? "rgba(255, 255, 255, 0.7)" : "text.secondary" }}
    >
      {text}
    </Typography>
  );

  const renderShortcut = (shortcut: KbdCombo) => {
    const caps = shortcut.keys.map((key, index) => (
      <React.Fragment key={index}>
        {index > 0 && shortcut.kind === "sequence" && separator(thenLabel, "sequence-separator")}
        {index > 0 && shortcut.kind === "combo" && !isMac && separator("+", "combo-separator")}
        <KbdCap size={size} tone={tone}>
          {key.glyph}
        </KbdCap>
      </React.Fragment>
    ));

    return shortcut.kind === "combo" && isMac ? (
      <span className={styles["combo-mac"]}>{caps}</span>
    ) : (
      caps
    );
  };

  const label = shortcuts
    .map((shortcut) => spokenName(shortcut, thenLabel))
    .join(` ${orLabel} `);

  return (
    <span className={styles.shortcut} data-testid={dataTestId}>
      <span aria-hidden className={styles.shortcut}>
        {shortcuts.map((shortcut, index) => (
          <React.Fragment key={index}>
            {index > 0 && separator("/", "alternative-separator")}
            {renderShortcut(shortcut)}
          </React.Fragment>
        ))}
      </span>
      <span style={visuallyHidden}>{label}</span>
    </span>
  );
}

export default KbdShortcut;
