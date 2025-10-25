import { TextField } from "@mui/material";
import type { ChangeEvent } from "react";

type InputPropsType = {
  value: number;
  callback: (e: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  name: string;
  label?: string;
  placeholder?: string;
  fullWidth?: boolean;
  size?: "small" | "medium";
  variant?: "outlined" | "filled" | "standard";
  error?: boolean;
  helperText: string
};

export const Input = ({
  value,
  callback,
  disabled,
  name,
  label,
  placeholder,
  fullWidth = true,
  size = "small",
  variant = "outlined",
  error,
  helperText
}: InputPropsType) => {
  return (
    <TextField
      type="number"
      onChange={callback}
      disabled={disabled}
      value={value}
      name={name}
      label={label}
      placeholder={placeholder}
      fullWidth={fullWidth}
      size={size}
      variant={variant}
      inputProps={{
        // Дополнительные атрибуты для нативного input
        min: 0, // минимальное значение (можно настроить)
        step: 1, // шаг изменения (можно настроить)
      }}
      error={error}
      helperText={helperText}
    />
  );
};
