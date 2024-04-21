import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";

type TRegister = {
  picture: FileList;
  firstname: string;
  lastname: string;
  username: string;
  password: string;
  email: string;
};

export const RegistrationPage = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TRegister>();

  const onSubmit = async (url: string, data: TRegister) => {
    try {
      const formData = new FormData();
      formData.append("picture", data.picture[0]);
      formData.append("firstname", data.firstname);
      formData.append("lastname", data.lastname);
      formData.append("username", data.username);
      formData.append("password", data.password);
      formData.append("email", data.email);
      const response = await fetch(url, {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  const url = `${import.meta.env.VITE_BASE_API_URL}/signup`;

  return (
    <div className="grid place-items-center h-[80vh]">
      <form onSubmit={handleSubmit((data) => onSubmit(url, data))}>
        <Card className="w-[350px] ">
          <CardHeader>
            <CardTitle>Register</CardTitle>
            <CardDescription>
              Create a new account with your email
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div>
              <Label>First Name</Label>
              <Input
                {...register("firstname", { required: true })}
                placeholder="Firstname"
                className="mt-1"
              />
              <ErrorLabel>{errors.firstname && "required"}</ErrorLabel>
            </div>

            <div>
              <Label>Last Name</Label>
              <Input
                {...register("lastname", { required: true })}
                placeholder="Lastname"
                className="mt-1"
              />
              <ErrorLabel>{errors.lastname && "required"}</ErrorLabel>
            </div>
            <div>
              <Label>Email</Label>
              <Input
                {...register("email", { required: true })}
                placeholder="Email"
                className="mt-1"
              />
              <ErrorLabel>{errors.email && "required"}</ErrorLabel>
            </div>
            <div>
              <Label>Password</Label>
              <Input
                {...register("password", { required: true })}
                placeholder="Password"
                className="mt-1"
              />
              <ErrorLabel>{errors.password && "required"}</ErrorLabel>
            </div>
            <div>
              <Label>Username</Label>
              <Input
                {...register("username", { required: true })}
                placeholder="Username"
                className="mt-1"
              />
              <ErrorLabel>{errors.username && "required"}</ErrorLabel>
            </div>
            <div>
              <Label>Picture</Label>
              <Input
                {...register("picture", { required: true })}
                type="file"
                className="mt-1"
              />
              <ErrorLabel>{errors.picture && "required"}</ErrorLabel>
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full">
              Submit
            </Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
};

export default RegistrationPage;

export const ErrorLabel = ({
  children,
}: {
  children: string | undefined;
}) => {
  return <Label className="text-red-500">{children}</Label>;
};
