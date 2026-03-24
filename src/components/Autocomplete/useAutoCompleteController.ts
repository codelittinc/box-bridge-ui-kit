import { matchSorter } from "match-sorter";
import { useMemo, useImperativeHandle, useRef, useState } from "react";

type Props = {
  options: { label: string; value: number | string }[];
  value?: any;
  onChange: (value: any) => void;
  ref: any;
};

type Response = {
  matches: { label: string; value: number | string }[];
  open: boolean;
  setOpen: (value: boolean) => void;
  searchValue: string;
  setSearchValue: (value: string) => void;
  selectedLabel: string | undefined;
};

const useAutoCompleteController = ({
  options,
  value,
  onChange,
  ref,
}: Props): Response => {
  const [open, setOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const localInputRef = useRef(null);
  useImperativeHandle(ref, () => ({
    focus: () => {
      if (localInputRef.current) {
        (localInputRef.current as any).focus();
      }
    },
  }));

  const selectedLabel = useMemo(() => {
    const selected = options.find(
      (item) => String(item.value) === String(value)
    );
    return selected?.label;
  }, [value, options]);

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
    searchValue,
    setSearchValue,
    selectedLabel,
  };
};

export default useAutoCompleteController;
