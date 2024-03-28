import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardTitle,
  CardHeader,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FormInput } from "@/components/form/FromInput";
import { useTranslation } from "react-i18next";

export const LoginPage = () => {
  const { t } = useTranslation();

  const FormSchema = z.object({
    username: z.string().min(4, {
      message: t("login-valid-username"),
    }),
    password: z
      .string()
      .min(4, t("login-ps-num"))
      .regex(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$%^&+=!])(?!.*\s)/,
        t("login-ps-char")
      ),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid place-items-center h-[100vh]">
          <Card className="w-[350px] ">
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>{t("login-title")}</CardDescription>
            </CardHeader>
            <CardContent>
              <FormLabel>Username</FormLabel>
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="username" {...field} />
                    </FormControl>
                    <FormDescription>
                      {t("login-username")}
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormInput
                control={form.control}
                formDesc={t("login-password")}
                formName="password"
                placeHolder="Password"
                type="password"
              />
            </CardContent>
            <CardFooter>
              <Button type="submit">Login</Button>
            </CardFooter>
          </Card>
        </div>
      </form>
    </Form>
  );
};

export default LoginPage;
