import { forwardRef, ForwardRefRenderFunction } from "react";
import {
  Combobox,
  ComboboxItem,
  ComboboxList,
  ComboboxProvider,
} from "@ariakit/react";
import { ChevronUpDownIcon } from "./icons/ChevronUpDownIcon";
import { CheckIcon } from "./icons/CheckIcon";
import useAutoCompleteController from "./useAutoCompleteController";
import styles from "./styles.module.css";

export interface AutocompleteProps {
  label?: string;
  multiple?: boolean;
  onChange: (value: any) => void;
  options: { label: string; value: number | string }[];
  placeholder?: string;
  value?: any;
}

const AutocompleteComponent: ForwardRefRenderFunction<
  HTMLDivElement,
  AutocompleteProps
> = ({ value, onChange, options, placeholder, label }, ref) => {
  const {
    matches,
    open,
    setOpen,
    searchValue,
    setSearchValue,
    selectedLabel,
  } = useAutoCompleteController({ options, value, onChange, ref });

  return (
    <div className={styles["wrapper"]}>
      {label && <label className={styles["label"]}>{label}</label>}
      <ComboboxProvider
        open={open}
        setOpen={setOpen}
        resetValueOnHide
        value={searchValue}
        setValue={setSearchValue}
      >
        <div className={styles["input-wrapper"]}>
          <Combobox
            placeholder={selectedLabel || placeholder || "Select..."}
            className={styles["combobox"]}
            autoSelect
          />
          <button
            type="button"
            className={styles["toggle-button"]}
            onClick={() => setOpen(!open)}
            tabIndex={-1}
          >
            <ChevronUpDownIcon />
          </button>
        </div>
        {open && matches.length > 0 && (
          <ComboboxList className={styles["listbox"]}>
            {matches.map(({ label: optLabel, value: optValue }: any) => (
              <ComboboxItem
                key={optValue}
                className={styles["item"]}
                onClick={() => {
                  onChange(optValue);
                  setOpen(false);
                }}
              >
                <span className={styles["item-text"]}>{optLabel}</span>
                {String(optValue) === String(value) && (
                  <span className={styles["item-indicator"]}>
                    <CheckIcon />
                  </span>
                )}
              </ComboboxItem>
            ))}
          </ComboboxList>
        )}
      </ComboboxProvider>
    </div>
  );
};

const Autocomplete = forwardRef<HTMLDivElement, AutocompleteProps>(
  AutocompleteComponent
);

Autocomplete.displayName = "Autocomplete";

export default Autocomplete;
