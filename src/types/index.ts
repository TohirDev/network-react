import {
  Control,
  FieldValues,
  Path,
  RegisterOptions,
} from "react-hook-form";

export interface IFormItem<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  rules?: Omit<RegisterOptions<T>, "onChange" | "onBlur">;
  required?: boolean;
}
