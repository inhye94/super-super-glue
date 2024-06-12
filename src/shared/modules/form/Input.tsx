import classNames from "classnames";
import React from "react";
import "./form.scss";
import InputError from "./InputError";
import {
  FieldError,
  FieldValues,
  RegisterOptions,
  useFormContext,
} from "react-hook-form";
import { AnimatePresence } from "framer-motion";
import { findInputError, isFormValid } from "../../../api/form";

interface InputPropsType {
  id: string;
  label: string;
  placeholder: string;
  name: string;
  value?: string | number;
  maxLength?: number;
  validation?: RegisterOptions;
  disabled?: boolean;
}

interface InputErrorType {
  error: FieldError;
}

const Input: React.FC<InputPropsType> = ({
  name,
  id,
  label,
  placeholder,
  value,
  maxLength,
  validation,
  disabled,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FieldValues>();

  const inputError = findInputError(errors, id) as InputErrorType;
  const isValid: boolean = isFormValid(inputError);

  const isRequired: boolean =
    validation?.required === true ||
    (typeof validation?.required === "object" && validation.required.value);

  return (
    <div className={classNames("input-wrapper", "text", !isValid && "error")}>
      <div className="input-text">
        <label htmlFor={id} className="input-label">
          {label}
          {isRequired && "*"}
        </label>

        <AnimatePresence mode="wait" initial={false}>
          {inputError?.error?.message && (
            <InputError message={inputError.error.message} />
          )}
        </AnimatePresence>
      </div>

      {/* NOTE: register의 첫번째 인자가 name이라서 name attr이랑 겹침 */}
      {validation ? (
        // NOTE: 유효성 검사 하는 경우, name attr 삭제
        <input
          type="text"
          id={id}
          className="input"
          placeholder={placeholder}
          defaultValue={value}
          maxLength={maxLength}
          disabled={disabled}
          {...register(name, validation)}
        />
      ) : (
        // NOTE: 유효성 검사 안하는 경우, name attr 선언
        <input
          type="text"
          id={id}
          name={name}
          className="input"
          placeholder={placeholder}
          defaultValue={value}
          maxLength={maxLength}
          disabled={disabled}
        />
      )}
    </div>
  );
};

export default Input;
