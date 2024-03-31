import { FormInput } from "@/components/form/FromInput";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Form, FormLabel } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { z } from "zod";

function RegistrationPage() {
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
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit((data) => console.log(data))}>
        <div className="grid place-items-center h-[80vh]">
          <Card className="w-[350px]">
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>{t("login-title")}</CardDescription>
            </CardHeader>
            <CardContent>
              <FormLabel>Username</FormLabel>
              <FormInput
                control={form.control}
                formDesc="nimad"
                formName="username"
                placeHolder="deadass"
              />
            </CardContent>
            <CardFooter
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Button className="w-[100%]" type="submit">
                {"Sign up"}
              </Button>
            </CardFooter>
          </Card>
        </div>
      </form>
    </Form>
  );
}

export default RegistrationPage;
