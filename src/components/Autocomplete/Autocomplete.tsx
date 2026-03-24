import { startTransition, forwardRef, ForwardRefRenderFunction } from "react";
import * as RadixSelect from "@radix-ui/react-select";
import {
  Combobox,
  ComboboxItem,
  ComboboxList,
  ComboboxProvider,
} from "@ariakit/react";
import { ChevronUpDownIcon } from "./icons/ChevronUpDownIcon";
import { SearchIcon } from "./icons/SearchIcon";
import { CheckIcon } from "./icons/CheckIcon";
import useAutoCompleteController from "./useAutoCompleteController";
import styles from "./styles.module.css";

export interface AutocompleteProps {
  multiple?: boolean;
  onChange: (value: any) => void;
  options: { label: string; value: number | string }[];
  placeholder?: string;
  value?: any;
}

const AutocompleteComponent: ForwardRefRenderFunction<
  HTMLDivElement,
  AutocompleteProps
> = ({ value, onChange, options, multiple, placeholder }, ref) => {
  const { matches, open, setOpen, handleChange, setSearchValue } =
    useAutoCompleteController({ options, value, onChange, ref });

  return (
    <RadixSelect.Root
      value={value}
      onValueChange={handleChange}
      open={open}
      onOpenChange={setOpen}
    >
      <ComboboxProvider
        open={open}
        setOpen={setOpen}
        resetValueOnHide
        includesBaseElement={false}
        setValue={(value) => {
          startTransition(() => {
            setSearchValue(value);
            onChange(value);
          });
        }}
      >
        <RadixSelect.Trigger className={styles["select"]}>
          <RadixSelect.Value placeholder={placeholder} />
          <RadixSelect.Icon className={styles["select-icon"]}>
            <ChevronUpDownIcon />
          </RadixSelect.Icon>
        </RadixSelect.Trigger>
        <RadixSelect.Content
          role="dialog"
          position="popper"
          className={styles["popover"]}
          sideOffset={4}
          alignOffset={-16}
        >
          <div className={styles["combobox-wrapper"]}>
            <div className={styles["combobox-icon"]}>
              <SearchIcon />
            </div>
            <Combobox
              autoSelect
              multiple={multiple}
              placeholder={placeholder}
              className={styles["combobox"]}
              onBlurCapture={(event) => {
                event.preventDefault();
                event.stopPropagation();
              }}
            />
          </div>
          <ComboboxList className={styles["listbox"]}>
            {matches?.map(({ label, value }: any) => (
              <RadixSelect.Item
                key={value}
                value={value}
                asChild
                className={styles["item"]}
              >
                <ComboboxItem>
                  <RadixSelect.ItemText>{label}</RadixSelect.ItemText>
                  <RadixSelect.ItemIndicator
                    className={styles["item-indicator"]}
                  >
                    <CheckIcon />
                  </RadixSelect.ItemIndicator>
                </ComboboxItem>
              </RadixSelect.Item>
            ))}
          </ComboboxList>
        </RadixSelect.Content>
      </ComboboxProvider>
    </RadixSelect.Root>
  );
};

const Autocomplete = forwardRef<HTMLDivElement, AutocompleteProps>(
  AutocompleteComponent
);

Autocomplete.displayName = "Autocomplete";

export default Autocomplete;
