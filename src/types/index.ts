import { HTMLInputTypeAttribute, ReactNode } from "react";
import {
  Control,
  FieldPath,
  FieldValues,
  Path,
  RegisterOptions,
} from "react-hook-form";

export interface IFormItem<T extends FieldValues> {
  control: Control<T>;
  formName: Path<T>;
  formDesc: string;
  placeHolder?: string;
  type?: HTMLInputTypeAttribute | undefined;
  suffix?: ReactNode;
}

export type TLoginResult = {
  is_confirmed: boolean;
  token: string;
  message: string;
  status: number;
};

export interface IFormControl<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  rules?: RegisterOptions<T, FieldPath<T>>;
  required?: boolean;
}
