import React from "react";
import "../modules/badge.scss";
import classNames from "classnames";
import { GoAlertFill } from "react-icons/go";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { IoCloseCircle } from "react-icons/io5";

export default function Badge({ text, alert, check, close, color = "gray" }) {
  return (
    <strong className={classNames("badge", color)}>
      {alert && <GoAlertFill className="badge-icon is-alert" aria-hidden />}
      {check && (
        <IoIosCheckmarkCircleOutline
          className="badge-icon is-check"
          aria-hidden
        />
      )}
      {close && <IoCloseCircle className="badge-icon is-close" aria-hidden />}
      {text}
    </strong>
  );
}
