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
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { Toaster } from "@/components/ui/toaster";
import { EyeIcon, EyeOffIcon, UserRound } from "lucide-react";
import { useSubmitLogin } from "./funcs";
import { getTokenFromCookie } from "@/global";

export const LoginPage = () => {
  const [show, setShow] = useState(false);
  const { t } = useTranslation();

  const FormSchema = z.object({
    username: z.string(),
    password: z.string(),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const url = `${import.meta.env.VITE_BASE_API_URL}/signin`;

  const [onSubmit, { loading }] = useSubmitLogin();
  const token = getTokenFromCookie();
  const navigate = useNavigate();
  useEffect(() => {
    if (token) navigate("/profile");
  }, [token, navigate]);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((data) => {
          onSubmit(url, data);
        })}
      >
        <div className="grid place-items-center h-[80vh]">
          <Card className="w-[350px] ">
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>{t("login-title")}</CardDescription>
            </CardHeader>
            <CardContent>
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
            </CardContent>
            <CardFooter
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Button
                className="w-[100%]"
                type="submit"
                disabled={loading}
              >
                {loading ? "Loading..." : "Sign in"}
              </Button>

              <NavLink to={"/register"}>
                <Button className="mt-3" type="button" variant={"link"}>
                  Don't you have an account?
                </Button>
              </NavLink>
            </CardFooter>
          </Card>
        </div>
      </form>

      <Toaster />
    </Form>
  );
};

export default LoginPage;
