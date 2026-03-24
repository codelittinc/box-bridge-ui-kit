import { Control, Controller, FieldValues, Path } from "react-hook-form";
import Autocomplete from "../../../Autocomplete/Autocomplete";

export type AutocompleteControllerProps<T extends FieldValues> = {
  [key: string]: any;
  control: Control<T>;
  label: string;
  name: Path<T>;
  options: { label: string; value: number | string }[];
  required?: boolean;
  withObjectValue?: boolean;
};

const AutocompleteController = <T extends FieldValues>({
  name,
  control,
  required,
  options = [],
  withObjectValue = true,
  ...rest
}: AutocompleteControllerProps<T>) => (
  <Controller
    name={name}
    control={control}
    rules={{
      required: required && "This field is required",
    }}
    render={({ field: { onChange, value } }) => {
      return (
        <Autocomplete
          options={options}
          onChange={(newValue: any) => {
            const isValueObject = typeof newValue === "object";
            let v = newValue;
            if (!withObjectValue && isValueObject) {
              v = newValue.id;
            }
            onChange(v);
          }}
          value={value || null}
          {...rest}
        />
      );
    }}
  />
);

export default AutocompleteController;
