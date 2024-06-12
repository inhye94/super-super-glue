import classNames from "classnames";
import React, { useEffect, useState } from "react";
import "./form.scss";
import InputError from "./InputError";
import IconButton from "../button/IconButton";
import {
  FieldError,
  FieldValues,
  RegisterOptions,
  useFormContext,
} from "react-hook-form";
import { findInputError, isFormValid } from "../../../api/form";
import { mergeFileList, genNewData, genFileImageSrc } from "../../../api/file";
import { AnimatePresence } from "framer-motion";
import { getLimitSize } from "../../utils/file";
import { LuUpload } from "react-icons/lu";
import { IoIosCloseCircleOutline } from "react-icons/io";

interface FileInputPropsType {
  name: string;
  id: string;
  label: string;
  limitSize?: number;
  limitCount?: number;
  validation?: RegisterOptions;
}

interface InputErrorType {
  error: FieldError;
}

// NOTE: e.target의 file을 변경
const FileInput: React.FC<FileInputPropsType> = ({
  name,
  id,
  label,
  limitSize = 10,
  limitCount = 1,
  validation,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FieldValues>();

  const [preview, setPreview] = useState<string[] | null>(null);
  const [savedData, setSavedData] = useState(new DataTransfer());

  const _inputError = findInputError(errors, id) as InputErrorType;
  const _isValid: boolean = isFormValid(_inputError);

  const isRequired: boolean =
    validation?.required === true ||
    (typeof validation?.required === "object" && validation.required.value);

  const updateFiles = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const selectedFiles = e.target.files;
    if (!selectedFiles) return;

    const mergedData = mergeFileList({
      savedData,
      selectedFiles,
      limitCount,
      limitSize,
    });

    setSavedData(mergedData);
    e.target.files = mergedData.files;
  };

  const removeSelectedFile = (index: number): void => {
    setSavedData((prev) => {
      prev.items.remove(index);

      return genNewData(prev);
    });
  };

  // Note: preview는 savedData에 의존
  useEffect(() => {
    setPreview((prev) => genFileImageSrc(savedData));
  }, [savedData]);

  return (
    <div className={classNames("input-wrapper", "file", !_isValid && "error")}>
      <div className="input-text">
        {label} {isRequired && "*"}
        <AnimatePresence mode="wait" initial={false}>
          {_inputError?.error?.message && (
            <InputError message={_inputError.error.message} />
          )}
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
          최대 {limitCount}장까지 등록할 수 있습니다. (최대
          {getLimitSize(limitSize)})
        </span>
      </label>

      <input
        type="file"
        id={name}
        className="visually-hidden"
        accept="image/png, image/jpeg, image/jpg, image/gif"
        multiple={limitCount > 1 ? true : false}
        {...register(name, { ...validation, onChange: updateFiles })}
      />

      {preview && (
        <div className="image-preview">
          {preview.map((v, i) => (
            <div className="preview-card" key={v}>
              <img src={v} alt="" />

              <IconButton
                text="파일 삭제"
                color="orange"
                callback={() => removeSelectedFile(i)}
              >
                <IoIosCloseCircleOutline />
              </IconButton>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FileInput;
