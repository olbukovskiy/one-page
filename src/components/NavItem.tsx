import React from "react";
import { INavItem } from "../types";

const NavItem: React.FunctionComponent<INavItem> = ({ link, content }) => {
  return (
    <li>
      <a className="button__signup" href={link}>
        {content}
      </a>
    </li>
  );
};

export default NavItem;
