import { HTMLInputTypeAttribute } from "react";
import { Control, FieldValues, Path } from "react-hook-form";

export interface IFormItem<T extends FieldValues> {
  control: Control<T>;
  formName: Path<T>;
  formDesc: string;
  placeHolder: string;
  type?: HTMLInputTypeAttribute | undefined;
}
