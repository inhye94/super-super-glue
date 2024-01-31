import classNames from "classnames";
import React, { useState } from "react";
import "../modules/form.scss";
import InputError from "./InputError";
import { LuUpload } from "react-icons/lu";
import { useFormContext } from "react-hook-form";
import { findInputError, isFormInvalid, mergeFileList } from "../api/form";
import { AnimatePresence } from "framer-motion";

export default function FileInput({
  name,
  id,
  label,
  limitSize,
  limitCount = 1,
  validation,
}) {
  const {
    register,
    setValue,
    clearErrors,
    formState: { errors },
  } = useFormContext();

  const _inputError = findInputError(errors, id);
  const _isInvalid = isFormInvalid(_inputError);

  const [_fileData, setFileData] = useState(new DataTransfer());

  const handleFile = (e) => {
    const _selectedFiles = e.target.files;

    if (_selectedFiles.length === 0) return;

    const _newFileList = mergeFileList({
      _fileData,
      _selectedFiles,
      limitCount,
      limitSize,
    });

    clearErrors(name);

    setFileData(_newFileList);
    setValue(name, _newFileList.files);
  };

  return (
    <div className={classNames("input-wrapper", "file", _isInvalid && "error")}>
      <div className="input-text">
        {label}

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
          최대 {limitCount ? limitCount : 1}장까지 등록할 수 있습니다. (최대{" "}
          {limitSize}
          MB)
        </span>
      </label>

      <input
        type="file"
        id={name}
        className="visually-hidden"
        accept="image/png, image/jpeg, image/jpg, image/gif"
        multiple={limitCount > 1 ? true : false}
        {...register(name, { ...validation, onChange: (e) => handleFile(e) })}
      />
    </div>
  );
}
