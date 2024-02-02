import classNames from "classnames";
import React from "react";
import "../modules/button.scss";

export default function Button({
  children,
  buttonType = "button",
  buttonStyle = "full",
  size = "big",
  color = "primary",
  rounded,
  disabled,
  clickCallback,
}) {
  return (
    <button
      type={buttonType}
      className={classNames("button", size, color, rounded, buttonStyle)}
      disabled={disabled}
      onClick={clickCallback}
    >
      {children}
    </button>
  );
}
