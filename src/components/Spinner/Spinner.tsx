import React from "react";
import styles from "./styles.module.css";

export interface SpinnerProps {
  size?: "small" | "medium" | "large";
}

export const Spinner = ({ size = "medium" }: SpinnerProps) => {
  return (
    <div className={`${styles.spinner} ${styles[size]}`}>
      <div className={styles.bounce1}></div>
      <div className={styles.bounce2}></div>
      <div className={styles.bounce3}></div>
    </div>
  );
};

export default Spinner;
