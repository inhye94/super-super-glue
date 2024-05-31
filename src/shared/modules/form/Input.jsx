import classNames from "classnames";
import React from "react";
import "./form.scss";
import InputError from "./InputError";
import { useFormContext } from "react-hook-form";
import { AnimatePresence } from "framer-motion";
import { findInputError, isFormInvalid } from "../../../api/form";

export default function Input({
  name,
  id,
  label,
  placeholder,
  value,
  maxLength,
  validation,
  disabled,
}) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const _inputError = findInputError(errors, id);
  const _isInvalid = isFormInvalid(_inputError);

  return (
    <div className={classNames("input-wrapper", "text", _isInvalid && "error")}>
      <div className="input-text">
        <label htmlFor={id} className="input-label">
          {label}
          {validation && validation.required.value && "*"}
        </label>

        <AnimatePresence mode="wait" initial={false}>
          {_isInvalid && <InputError message={_inputError.error.message} />}
        </AnimatePresence>
      </div>

      <input
        type="text"
        id={id}
        name={name}
        className="input"
        placeholder={placeholder}
        defaultValue={value}
        maxLength={maxLength}
        disabled={disabled}
        {...register(id, validation)}
      />
    </div>
  );
}
