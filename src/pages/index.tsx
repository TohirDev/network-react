import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

function HomePage() {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t("welcome")}</h1>
      <Button variant={"default"}>
        <NavLink to={"/login"}>{t("home-login")}</NavLink>
      </Button>
      <h3>{t("home-page")}</h3>
    </div>
  );
}

export default HomePage;
