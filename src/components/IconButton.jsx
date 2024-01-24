import classNames from "classnames";
import React from "react";
import { Link } from "react-router-dom";

export default function IconButton({
  icon,
  text,
  url,
  color = "primary",
  tag = "button",
  size,
  callback,
}) {
  if (tag === "button") {
    return (
      <button
        className={classNames("icon-button", color, size)}
        type="button"
        title={text}
        onClick={callback}
      >
        {icon}
      </button>
    );
  }

  if (tag === "link") {
    return (
      <Link
        className={classNames("icon-button", color, size)}
        title={text}
        to={url}
        onClick={callback}
      >
        {icon}
      </Link>
    );
  }
}
