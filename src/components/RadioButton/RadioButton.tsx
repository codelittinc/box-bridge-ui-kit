import { Radio, Typography } from "@mui/material";
import styles from "./styles.module.scss";

export type RadioButtonProps = {
  label: string;
  checked: boolean;
  name: string;
  onChange: () => void;
};

const RadioButton = ({ label, name, checked, onChange }: RadioButtonProps) => {
  return (
    <label className={styles.radioLabel}>
      <Radio
        name={name}
        size="small"
        className={styles.radio}
        checked={checked}
        onChange={onChange}
      />
      <Typography variant="body2">{label}</Typography>
    </label>
  );
};

export default RadioButton;
