import { NavLink } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";
import { ModeToggle } from "./mode-toggle";

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
        <h1 style={{ fontFamily: "fantasy", fontSize: "25px" }}>
          <NavLink to={"/"}>Network</NavLink>
        </h1>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <ModeToggle />
        <LanguageSwitcher />
      </div>
    </div>
  );
};