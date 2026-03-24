import React from "react";
import {
  Box,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormControl,
} from "@mui/material";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

export type RadioGroupControllerProps<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
  fieldTitle?: string;
  options: Array<{ value: string; label: string }>;
  onValueChange?: (value: string) => void;
};

const RadioGroupController = <T extends FieldValues>({
  name,
  control,
  fieldTitle,
  options,
  onValueChange,
}: RadioGroupControllerProps<T>) => (
  <Controller
    name={name}
    control={control}
    render={({ field: { onChange, value } }) => (
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          flexDirection: "column",
          width: "100%",
        }}
      >
        {fieldTitle && (
          <Typography
            color="text.secondary"
            sx={{
              fontSize: "14px",
              fontWeight: 700,
              marginBottom: "8px",
              marginTop: "4px",
            }}
          >
            {fieldTitle}
          </Typography>
        )}
        <FormControl sx={{ width: "100%" }}>
          <RadioGroup
            value={value}
            onChange={(e) => {
              onChange(e.target.value);
              onValueChange?.(e.target.value);
            }}
          >
            {options.map((option) => (
              <FormControlLabel
                key={option.value}
                value={option.value}
                control={<Radio />}
                label={option.label}
                sx={{ marginBottom: "8px" }}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </Box>
    )}
  />
);

export default RadioGroupController;
