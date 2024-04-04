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
import { Form, FormLabel } from "@/components/ui/form";
import { FormInput } from "@/components/form/FromInput";
import { useTranslation } from "react-i18next";
import { useCallback, useState } from "react";

import { Toaster } from "@/components/ui/toaster";
import { EyeIcon, EyeOffIcon, UserRound } from "lucide-react";
import { TLoginResult } from "@/types";

export const RegistrationPage = () => {
  const [show, setShow] = useState(false);
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
    firstname: z.string(),
    lastname: z.string(),
    email: z.string().email(),
    picture: z.any(),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      password: "",
      email: "",
      firstname: "",
      lastname: "",
      picture: "",
    },
  });
  const url = `${import.meta.env.VITE_BASE_API_URL}/signup`;
  const onSubmit = useCallback(async (url: string, data: unknown) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result: TLoginResult = await response.json();
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit((data) => onSubmit(url, data))}>
        <div className="grid place-items-center h-[80vh]">
          <Card className="w-[350px] ">
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>{t("login-title")}</CardDescription>
            </CardHeader>
            <CardContent>
              <FormLabel>Firstname</FormLabel>
              <FormInput
                formDesc={"This is your firstname"}
                control={form.control}
                formName="firstname"
                placeHolder="Firstname"
                suffix={
                  <UserRound className="mt-3 cursor-pointer select-none" />
                }
              />
              <FormLabel>Lastname</FormLabel>
              <FormInput
                formDesc={"Lastname"}
                control={form.control}
                formName="lastname"
                placeHolder="Lastname"
                suffix={
                  <UserRound className="mt-3 cursor-pointer select-none" />
                }
              />
              <FormLabel>Username</FormLabel>
              <FormInput
                formDesc={t("login-username")}
                control={form.control}
                formName="username"
                placeHolder="Username"
                suffix={
                  <UserRound className="mt-3 cursor-pointer select-none" />
                }
              />
              <FormLabel>Password</FormLabel>
              <FormInput
                control={form.control}
                formDesc={t("login-password")}
                formName="password"
                placeHolder="Password"
                type={show ? "text" : "password"}
                suffix={
                  show ? (
                    <EyeIcon
                      className="mt-3 cursor-pointer select-none"
                      onClick={() => setShow(false)}
                    />
                  ) : (
                    <EyeOffIcon
                      className="mt-3 cursor-pointer select-none"
                      onClick={() => setShow(true)}
                    />
                  )
                }
              />
              <FormLabel>Email</FormLabel>
              <FormInput
                formDesc={"This is your email"}
                control={form.control}
                formName="email"
                placeHolder="email"
                suffix={
                  <UserRound className="mt-3 cursor-pointer select-none" />
                }
              />
              <FormLabel>Picture</FormLabel>
              <FormInput
                formDesc={"Picture"}
                control={form.control}
                formName="picture"
                placeHolder="Picture"
                suffix={
                  <UserRound className="mt-3 cursor-pointer select-none" />
                }
                type="file"
              />
            </CardContent>
            <CardFooter
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Button className="w-[100%]" type="submit">
                Sign up
              </Button>
            </CardFooter>
          </Card>
        </div>
      </form>

      <Toaster />
    </Form>
  );
};

export default RegistrationPage;
