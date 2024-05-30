import classNames from "classnames";
import React, { useEffect, useState } from "react";
import "./form.scss";
import InputError from "./InputError";
import IconButton from "../button/IconButton";
import { useFormContext } from "react-hook-form";
import { findInputError, isFormInvalid } from "../../../api/form";
import { mergeFileList, genNewData, genFileImageSrc } from "../../../api/file";
import { AnimatePresence } from "framer-motion";
import { getLimitSize } from "../../../utils/file";
import { LuUpload } from "react-icons/lu";
import { IoIosCloseCircleOutline } from "react-icons/io";

// NOTE: e.target의 file을 변경
export default function FileInput({
  name,
  id,
  label,
  limitSize = 10,
  limitCount = 1,
  validation,
}) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const [preview, setPreview] = useState(null);
  const [savedData, setSavedData] = useState(new DataTransfer());

  const _inputError = findInputError(errors, id);
  const _isInvalid = isFormInvalid(_inputError);

  const updateFiles = (e) => {
    const selectedFiles = e.target.files;
    const mergedData = mergeFileList({
      savedData,
      selectedFiles,
      limitCount,
      limitSize,
    });

    setSavedData(mergedData);
    e.target.files = mergedData.files;
  };

  const removeSelectedFile = (index) => {
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
                icon={<IoIosCloseCircleOutline />}
                text="파일 삭제"
                color="orange"
                callback={removeSelectedFile.bind(null, i)}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
