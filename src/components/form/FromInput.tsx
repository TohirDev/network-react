import { FieldValues } from "react-hook-form";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { IFormItem } from "@/types";

export const FormInput = <T extends FieldValues>({
  control,
  formDesc,
  formName,
  placeHolder,
  type,
}: IFormItem<T>) => {
  return (
    <FormField
      control={control}
      name={formName}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <Input placeholder={placeHolder} type={type} {...field} />
          </FormControl>
          <FormDescription>{formDesc}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
