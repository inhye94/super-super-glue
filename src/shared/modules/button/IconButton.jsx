import classNames from "classnames";
import React from "react";
import { Link } from "react-router-dom";

export default function IconButton({
  text,
  url,
  color = "primary",
  tag = "button",
  size,
  count,
  value,
  disabled,
  callback,
  children,
}) {
  if (tag === "button") {
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
  }

  if (tag === "link") {
    return (
      <Link
        className={classNames("icon-button", color, size)}
        title={text}
        to={url}
        value={value}
        onClick={callback}
        disabled={disabled}
      >
        {children}
        {count ? <span>{count}</span> : ""}
      </Link>
    );
  }
}
