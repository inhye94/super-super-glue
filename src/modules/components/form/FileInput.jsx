import classNames from "classnames";
import React, { useState } from "react";
import "./form.scss";
import InputError from "../../../components/InputError";
import { LuUpload } from "react-icons/lu";
import { useFormContext } from "react-hook-form";
import {
  findInputError,
  isFormInvalid,
  transferFileToImageSrc,
} from "../../../api/form";
import { AnimatePresence } from "framer-motion";

export default function FileInput({
  name,
  id,
  label,
  limitSize,
  limitCount = 1,
  validation,
  changeCallback,
}) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const [preview, setPreview] = useState();

  const _inputError = findInputError(errors, id);
  const _isInvalid = isFormInvalid(_inputError);

  const handleFile = (e) => {
    const [_newDataTransfer, _savedDataTrasfer] = changeCallback(
      e,
      limitCount,
      limitSize
    );

    if (_newDataTransfer) {
      setPreview((prev) => transferFileToImageSrc(_newDataTransfer));
      e.target.files = _newDataTransfer.files;
    } else {
      e.target.files = _savedDataTrasfer.files;
    }
  };

  return (
    <div className={classNames("input-wrapper", "file", _isInvalid && "error")}>
      <div className="input-text">
        {label} {validation && validation.required.value && "*"}
        <AnimatePresence mode="wait" initial={false}>
          {_isInvalid && <InputError message={_inputError.error.message} />}
        </AnimatePresence>
      </div>

      <label htmlFor={name} className="input-label">
        <div className="input-label-icon">
          <LuUpload aria-hidden />
        </div>

        <p>+ 이미지 추가하기</p>

        <span>
          .png, .jpeg, .jpg, .gif 파일만 등록 가능하며,
          <br />
          최대 {limitCount ? limitCount : 1}장까지 등록할 수 있습니다. (최대
          {limitSize < 1000
            ? `${limitSize}MB`
            : `${Math.floor(limitSize / 1000)}GB`}
          )
        </span>
      </label>

      <input
        type="file"
        id={name}
        className="visually-hidden"
        accept="image/png, image/jpeg, image/jpg, image/gif"
        multiple={limitCount > 1 ? true : false}
        {...register(name, { ...validation, onChange: handleFile })}
      />

      {preview && (
        <div className="image-preview">
          {preview.map((v) => (
            <img key={v} src={v} alt="" />
          ))}
        </div>
      )}
    </div>
  );
}
