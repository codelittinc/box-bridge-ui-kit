import { matchSorter } from "match-sorter";
import { useMemo, useImperativeHandle, useRef, useState } from "react";

type Props = {
  options: { label: string; value: number | string }[];
  value?: any;
  onChange: (value: any) => void;
  ref: any;
};

type Response = {
  matches: any;
  open: boolean;
  setOpen: (value: boolean) => void;
  handleChange: (value: any) => void;
  setSearchValue: (value: string) => void;
};

const useAutoCompleteController = ({
  options,
  value,
  onChange,
  ref,
}: Props): Response => {
  const [open, setOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const handleChange = (newValue: any) => {
    onChange(newValue);
  };

  const localInputRef = useRef(null);
  useImperativeHandle(ref, () => ({
    focus: () => {
      if (localInputRef.current) {
        (localInputRef.current as any).focus();
      }
    },
  }));

  const matches = useMemo(() => {
    if (!searchValue) return options;
    const keys = ["label", "value"];
    const matched = matchSorter(options, searchValue, { keys });
    const selectedItem = options.find((item) => item.value === value);
    if (selectedItem && !matched.includes(selectedItem)) {
      matched.push(selectedItem);
    }
    return matched;
  }, [searchValue, value, options]);

  return {
    matches,
    open,
    setOpen,
    handleChange,
    setSearchValue,
  };
};

export default useAutoCompleteController;
