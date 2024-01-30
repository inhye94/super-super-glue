import classNames from "classnames";
import React from "react";
import "../modules/form.scss";
import Badge from "./Badge";
import { useFormContext } from "react-hook-form";
import { AnimatePresence, motion } from "framer-motion";
import { findInputError, isFormInvalid } from "../api/form";

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
    <div className={classNames("input-wrapper", _isInvalid && "error")}>
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

const InputError = ({ message }) => {
  return (
    <motion.p {..._framer_error}>
      <Badge text={message} color="red" alert />
    </motion.p>
  );
};

const _framer_error = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
  transition: { duration: 0.2 },
};
