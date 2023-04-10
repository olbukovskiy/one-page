import React from "react";

interface IButton {
  type: "button" | "submit";
  variant: "button__show-more" | "button__signup";
  children: React.ReactNode;
}

const Button: React.FunctionComponent<IButton> = ({
  type,
  children,
  variant,
}) => {
  return (
    <button type={type} className={variant}>
      {children}
    </button>
  );
};

export default Button;
