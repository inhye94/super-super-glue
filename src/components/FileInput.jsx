import classNames from "classnames";
import React from "react";
import "../modules/form.scss";
import InputError from "./InputError";
import { LuUpload } from "react-icons/lu";
import { useFormContext } from "react-hook-form";
import { findInputError, isFormInvalid } from "../api/form";
import { AnimatePresence } from "framer-motion";

export default function FileInput({
  name,
  id,
  label,
  size,
  value,
  multiple,
  validation,
}) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const _inputError = findInputError(errors, id);
  const _isInvalid = isFormInvalid(_inputError);

  return (
    <div className={classNames("input-wrapper", "file", _isInvalid && "error")}>
      <div className="input-text">
        {label}

        <AnimatePresence mode="wait" initial={false}>
          {_isInvalid && <InputError message={_inputError.error.message} />}
        </AnimatePresence>
      </div>

      <label htmlFor={id} className="input-label">
        <div className="input-label-icon">
          <LuUpload aria-hidden />
        </div>

        <p>+ 이미지 추가하기</p>

        <span>
          .png, .jpeg, .jpg, .gif 파일만 등록 가능하며,
          <br />
          최대 {multiple ? multiple : 1}장까지 등록할 수 있습니다. (최대 {size}
          MB)
        </span>
      </label>

      <input
        type="file"
        id={id}
        name={name}
        className="visually-hidden"
        accept="image/png, image/jpeg, image/jpg, image/gif"
        multiple={multiple ? true : false}
        {...register(id, validation)}
      />
    </div>
  );
}
