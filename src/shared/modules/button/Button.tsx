import classNames from "classnames";
import React, { PropsWithChildren } from "react";
import "./button.scss";

interface ButtonPropsType {
  buttonStyle?: "full" | "outlined" | "ghost";
  color?: "primary" | "secondary" | "tertiary";
  size?: "tiny" | "small" | "medium";
  rounded?: "round";
  disabled?: boolean;
  clickCallback?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button: React.FC<PropsWithChildren<ButtonPropsType>> = ({
  children,
  buttonStyle = "full",
  size,
  color = "primary",
  rounded,
  disabled,
  clickCallback,
}) => {
  return (
    <button
      type="button"
      className={classNames("button", size, color, rounded, buttonStyle)}
      disabled={disabled}
      onClick={clickCallback}
    >
      {children}
    </button>
  );
};

export default Button;
