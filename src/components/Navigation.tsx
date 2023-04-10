import React from "react";
import List from "./List";
import NavItem from "./NavItem";
import { INavItem } from "../types";

type Props = {
  navLinks: INavItem[];
};

const Navigation: React.FunctionComponent<Props> = ({ navLinks }) => {
  return (
    <nav className="nav">
      <List
        variant={"nav__list"}
        items={navLinks}
        renderItem={({ link, content }: INavItem) => (
          <NavItem link={link} content={content} key={link} />
        )}
      />
    </nav>
  );
};

export default Navigation;
