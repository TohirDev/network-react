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
  suffix,
}: IFormItem<T>) => {
  return (
    <FormField
      control={control}
      name={formName}
      render={({ field }) => (
        <FormItem>
          <FormControl className="w-[100%]">
            <Input
              className="mt-3 w-[100%]"
              placeholder={placeHolder}
              type={type}
              {...field}
              suffix={suffix}
              accept={type === "file" ? "image/*" : ""}
            />
          </FormControl>
          <FormDescription>{formDesc}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
