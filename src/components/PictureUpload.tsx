import { FieldValues, UseFormRegister } from "react-hook-form";
import { Input } from "./ui/input";

export const PictureUpload = (register: UseFormRegister<FieldValues>) => {
  return <Input {...register} type="file" />;
};
