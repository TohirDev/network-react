import HomePage from "@/pages";
import LoginPage from "@/pages/auth/login";
import RegistrationPage from "@/pages/auth/register";
import { useRoutes } from "react-router-dom";

export const Router = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/register",
      element: <RegistrationPage />,
    },
  ]);
  return routes;
};
