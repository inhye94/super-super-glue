import React, { useEffect, useState } from "react";
import Input from "../../shared/modules/form/Input";
import FileInput from "../../shared/modules/form/FileInput";
import Button from "../../shared/modules/button/Button";
import { FormProvider, useForm } from "react-hook-form";
import {
  required_validation,
  special_validation,
  price_validation,
  only_kr_validation,
  option_validation,
} from "../../shared/utils/validations.js";
import ContentWrapper from "../../components/wrapper/ContentWrapper";
import { useAuthContext } from "../../context/AuthContext";
import { uploadFile } from "../../api/file";
import Spinner from "../../components/Spinner";
import Toast from "../../components/Toast";
import useProducts from "../../hooks/useProducts";

export default function RegistForm() {
  const { userInfo } = useAuthContext();

  const [isUploading, setIsUploading] = useState(false);
  const [success, setSuccess] = useState();
  const [_id, setId] = useState(null);
  const [_text, setText] = useState("저장");

  const methods = useForm();
  const { handleSubmit, formState, reset } = methods;

  const {
    addProduct: { mutate },
  } = useProducts();

  // NOTE: formState에 따라 isUploading 값 토글, body overflow 변경
  useEffect(() => {
    setIsUploading(formState.isSubmitting);

    if (formState.isSubmitting) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [formState]);

  // NOTE: isUploading과 success에 따라 text 변경
  useEffect(() => {
    if (isUploading) {
      setText("처리중 ...");
      return;
    }

    if (success) {
      setText("등록 완료");
      return;
    }

    setText("등록");
  }, [isUploading, success]);

  const handleFormSubmit = async (data) => {
    // 이미지 url로 변경 & image와 detailImage 덮어쓰기
    const image = await Promise.all(
      [...data.image].map(async (file) => await uploadFile(file))
    );

    const detailImage = await Promise.all(
      [...data.detailImage].map(async (file) => await uploadFile(file))
    );

    // 데이터 저장
    await mutate(
      { userID: userInfo.uid, data: { ...data, image, detailImage } },
      {
        onSuccess: (result) => {
          setId(result);
          setSuccess(true);

          setTimeout(() => {
            reset();
            window.location.replace("/");
          }, 2000);
        },
        onError: (error) => {
          console.error(error);
        },
      }
    );
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
          <input type="hidden" name="id" value={_id || ""} />

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
            limitSize="1"
            validation={{ ...required_validation() }}
          />

          <FileInput
            id="detailImage"
            name="detailImage"
            label="상세 이미지"
            limitCount="20"
            limitSize="2500"
            validation={{ ...required_validation() }}
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
            disabled={isUploading || success}
          >
            {_text}
          </Button>
        </div>
      </FormProvider>

      {isUploading && <Spinner text="상품 등록 중입니다~!" />}
    </ContentWrapper>
  );
}
