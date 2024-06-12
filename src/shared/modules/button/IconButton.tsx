import classNames from "classnames";
import React, { PropsWithChildren } from "react";

interface IconButtonPropsType {
  text: string;
  color?:
    | "black"
    | "dark"
    | "primary"
    | "secondary"
    | "tertiary"
    | "orange"
    | "yellow"
    | "green"
    | "pink";
  size?: "tiny" | "small" | "medium";
  count?: number;
  value?: number | string;
  disabled?: boolean;
  callback?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const IconButton: React.FC<PropsWithChildren<IconButtonPropsType>> = ({
  text,
  color = "primary",
  size,
  count,
  value,
  disabled,
  callback,
  children,
}) => {
  return (
    <button
      className={classNames("icon-button", color, size)}
      type="button"
      title={text}
      value={value}
      onClick={callback}
      disabled={disabled}
    >
      {children}
      {count ? <span>{count}</span> : ""}
    </button>
  );
};

export default IconButton;
