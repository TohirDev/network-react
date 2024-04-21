import { Controller, FieldValues } from "react-hook-form";
import { Input, InputProps } from "../ui/input";
import { IFormControl } from "@/types";

export const FormText = <T extends FieldValues>({
  control,
  name,
  rules,
  required,
  disabled,
  ...props
}: IFormControl<T> & Omit<InputProps, "name">) => {
  return (
    <Controller
      {...{ control, name, rules: { ...rules, required } }}
      render={({ field }) => (
        <Input
          {...props}
          {...field}
          value={field.value ?? props.defaultValue ?? ""}
          onChange={(e) => {
            field.onChange(e);
            props.onChange?.(e);
          }}
          disabled={disabled}
        />
      )}
    />
  );
};
