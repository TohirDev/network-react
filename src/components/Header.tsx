import { NavLink } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";
import { ModeToggle } from "./mode-toggle";
import { UserRound } from "lucide-react";
import { Button } from "./ui/button";

export const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "20px 0",
      }}
    >
      <div>
        <span style={{ fontFamily: "fantasy", fontSize: "25px" }}>
          <NavLink to={"/"}>Network</NavLink>
        </span>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <NavLink to={"/profile"}>
          <Button variant="outline" size="icon" className="mr-5">
            <UserRound />
          </Button>
        </NavLink>

        <ModeToggle />
        <LanguageSwitcher />
      </div>
    </div>
  );
};
