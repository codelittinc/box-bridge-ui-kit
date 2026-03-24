import { Checkbox as MuiCheckbox, Typography } from "@mui/material";
import { Icon, IconKey } from "../Icon";
import styles from "./styles.module.scss";

export type CheckboxProps = {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  iconKey?: IconKey;
};

const Checkbox = ({ label, checked, onChange, iconKey }: CheckboxProps) => {
  return (
    <label className={styles.checkboxLabel}>
      <MuiCheckbox
        size="small"
        checked={checked}
        className={styles.checkbox}
        onChange={(e) => onChange(e.target.checked)}
      />
      {iconKey && <Icon iconKey={iconKey} />}
      <Typography variant="body2">{label}</Typography>
    </label>
  );
};

export default Checkbox;
