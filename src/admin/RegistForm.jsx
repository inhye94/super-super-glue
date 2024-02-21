import React, { useEffect, useState } from "react";
import Input from "../components/Input";
import FileInput from "../components/FileInput";
import Button from "../components/Button";
import { FormProvider, useForm } from "react-hook-form";
import {
  required_validation,
  special_validation,
  price_validation,
  only_kr_validation,
  option_validation,
} from "../utils/validations.js";
import ContentWrapper from "../components/ContentWrapper";
import { useAuthContext } from "../context/AuthContext";
import { uploadFile } from "../api/uploadFile";
import { mergeFileList } from "../api/form";
import Spinner from "../components/Spinner";
import Toast from "../components/Toast";
import useProducts from "../hooks/useProducts";

export default function RegistForm() {
  const { userInfo } = useAuthContext();

  const [files, setFiles] = useState({ ...initFiles });
  const [isUploading, setIsUploading] = useState(false);
  const [success, setSuccess] = useState();
  const [_id, setId] = useState();

  const methods = useForm();
  const { handleSubmit, formState } = methods;

  const {
    addProduct: { mutate },
  } = useProducts();

  useEffect(() => {
    setIsUploading(formState.isSubmitting);

    if (formState.isSubmitting) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [formState]);

  const handleFormSubmit = async (data) => {
    // 이미지 url로 변경
    const image = await Promise.all(
      [...files.image.datatransfer.files].map(
        async (file) => await uploadFile(file)
      )
    );

    const detailImage = await Promise.all(
      [...files.detailImage.datatransfer.files].map(
        async (file) => await uploadFile(file)
      )
    );

    // 데이터 저장
    await mutate(
      { userID: userInfo.uid, data, image, detailImage },
      {
        onSuccess: (result) => {
          setId(result);

          setSuccess(true);
          setTimeout(() => {
            setSuccess(false);
          }, 4000);
        },
      }
    );
  };

  const handleFiles = (e, limitCount, limitSize) => {
    const { name, files: _selectedFiles } = e.target;
    const _savedDataTrasfer = files[name].datatransfer;

    let _newDataTransfer = null;

    if (_selectedFiles && _selectedFiles.length) {
      _newDataTransfer = mergeFileList({
        _savedDataTrasfer,
        _selectedFiles,
        limitCount,
        limitSize,
      });

      files[name].datatransfer = _newDataTransfer;

      setFiles((prev) => ({ ...files }));
    }

    return [_newDataTransfer, _savedDataTrasfer];
  };

  return (
    <ContentWrapper title="✨ 상품 등록 ✨">
      {success && <Toast text="✅ 등록이 완료됐습니다~!" />}

      <FormProvider {...methods}>
        <form
          autoComplete="off"
          noValidate
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col gap-y-[24px] p-[16px] bg-background rounded-md md:py-[32px]"
        >
          <Input
            id="name"
            name="name"
            label="상품명"
            maxLength="100"
            placeholder="상품명 (최대 100자, 한글, 영어, 숫자, 특수문자는 -_&만 허용)"
            validation={{ ...special_validation(), ...required_validation() }}
          />

          <Input
            id="price"
            name="price"
            label="가격"
            placeholder="가격 (숫자, 0 ~ 1,000,000 이하)"
            validation={{ ...price_validation(), ...required_validation() }}
          />

          <Input
            id="category"
            name="category"
            label="카테고리"
            maxLength="10"
            placeholder="카테고리 (한글, 최대 10자)"
            validation={{ ...only_kr_validation(), ...required_validation() }}
          />

          <Input
            id="option"
            name="option"
            label="상품 옵션"
            placeholder="옵션 (콤마(,)로 구분)"
            validation={{ ...option_validation(), ...required_validation() }}
          />

          <FileInput
            id="image"
            name="image"
            label="대표 이미지"
            limitCount="5"
            limitSize="10"
            validation={{ ...required_validation() }}
            changeCallback={handleFiles}
          />

          <FileInput
            id="detailImage"
            name="detailImage"
            label="상세 이미지"
            limitCount="20"
            limitSize="2500"
            validation={{ ...required_validation() }}
            changeCallback={handleFiles}
          />

          <Input
            id="description"
            name="description"
            label="상품 설명"
            placeholder="상품 설명"
          />
        </form>

        <div className="w-full max-w-[540px] mx-auto">
          <Button
            type="submit"
            color="primary"
            clickCallback={handleSubmit(handleFormSubmit)}
            disabled={isUploading}
          >
            {isUploading ? "처리중 ... " : "저장"}
          </Button>
        </div>
      </FormProvider>

      {isUploading && <Spinner text="상품 등록 중입니다~!" />}
    </ContentWrapper>
  );
}

const initFiles = {
  image: { url: [], datatransfer: new DataTransfer() },
  detailImage: { url: [], datatransfer: new DataTransfer() },
};
