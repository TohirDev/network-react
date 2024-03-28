import { IFormItem } from "@/types";
import { Controller, FieldValues } from "react-hook-form";
import { Input, InputProps } from "../ui/input";

export const FormInput = <T extends FieldValues>({
  control,
  name,
  rules,
  required,
  ...props
}: IFormItem<T> & Omit<InputProps, "name">) => {
  return (
    <Controller
      {...{ control, name, rules: { required, ...rules } }}
      render={({ field, fieldState: { error } }) => (
        <>
          <Input
            {...props}
            {...field}
            value={field.value ?? props.defaultValue ?? ""}
            className={error ? "error" : ""}
          />
          {error && <span>{error?.message}</span>}
        </>
      )}
    />
  );
};
