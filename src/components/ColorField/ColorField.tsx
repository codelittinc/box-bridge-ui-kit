import { forwardRef, useId } from "react";
import type { ComponentPropsWithoutRef } from "react";
import { Stack } from "../Stack";
import { Typography } from "../Typography";
import styles from "./styles.module.scss";

export type ColorFieldProps = Omit<
  ComponentPropsWithoutRef<"input">,
  "type" | "children" | "value" | "defaultValue"
> & {
  label: string;
  value: string;
};

const ColorField = forwardRef<HTMLInputElement, ColorFieldProps>(
  ({ id, label, value, className, ...inputProps }, ref) => {
    const generatedId = useId();
    const inputId = id ?? generatedId;

    return (
      <Stack direction="row" spacing={2} useFlexGap sx={{ alignItems: "center", flexWrap: "wrap" }}>
        <label htmlFor={inputId} className={styles.label}>
          <Typography component="span" variant="body1">{label}</Typography>
        </label>
        <input
          {...inputProps}
          ref={ref}
          id={inputId}
          type="color"
          value={value}
          className={[styles.input, className].filter(Boolean).join(" ")}
        />
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {value}
        </Typography>
      </Stack>
    );
  }
);

ColorField.displayName = "ColorField";

export default ColorField;
