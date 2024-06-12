import classNames from "classnames";
import React, { PropsWithChildren } from "react";
import { Link } from "react-router-dom";

interface IconLinkPropsType {
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
  size?: "medium" | "small";
  text: string;
  url: string;
  count?: number;
}

const IconLink: React.FC<PropsWithChildren<IconLinkPropsType>> = ({
  children,
  color,
  size,
  text,
  url,
  count,
}) => {
  return (
    <Link
      className={classNames("icon-button", color, size)}
      title={text}
      to={url}
    >
      {children}
      {count ? <span>{count}</span> : ""}
    </Link>
  );
};

export default IconLink;
