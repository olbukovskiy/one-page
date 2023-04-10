import Logo from "./Logo";
import Navigation from "./Navigation";
import { INavItem } from "../types";
import { useState } from "react";

const AppBar = () => {
  const [navLinks] = useState<INavItem[]>([
    { link: "#register", content: "Sign up" },
    { link: "#users", content: "Users" },
  ]);

  return (
    <header className="header">
      <div className="container">
        <div className="header__thumb">
          <Logo />
          <Navigation navLinks={navLinks} />
        </div>
      </div>
    </header>
  );
};

export default AppBar;
