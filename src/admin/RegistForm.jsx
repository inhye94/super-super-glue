import React, { useEffect, useState } from "react";
import Input from "../components/Input";
// import FileInput from "../components/FileInput";
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
import { writeProductData } from "../api/firebase";
import { useParams } from "react-router-dom";

export default function RegistForm() {
  const [_processing, setProcessing] = useState(false);
  const [_id, setId] = useState();

  const { productId } = useParams();
  const { userInfo } = useAuthContext();
  const methods = useForm();
  const { handleSubmit, setValue } = methods;

  const handleFormSubmit = handleSubmit(async (data) => {
    console.log(data);

    setProcessing(true);
    setId(await writeProductData(userInfo.uid, data));
    setTimeout(() => setProcessing(false), 2000);
  });

  useEffect(() => {
    if (productId || _id) {
      setValue("id", productId || _id);
    }
  }, [setValue, productId, _id]);

  return (
    <ContentWrapper title="✨ 상품 등록 ✨">
      <FormProvider {...methods}>
        <form
          autoComplete="off"
          noValidate
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col gap-y-[24px] p-[16px] bg-[#efefef] rounded-md md:py-[32px]"
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
          {/* <FileInput
            id="image"
            name="image"
            label="대표 이미지"
            limitCount="5"
            limitSize="10"
            validation={{ ...required_validation() }}
          />
          <FileInput
            id="detailImage"
            name="detailImage"
            label="상세 이미지"
            limitCount="20"
            limitSize="2500"
            validation={{ ...required_validation() }}
          /> */}
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
            clickCallback={handleFormSubmit}
            disabled={_processing}
          >
            {_processing ? "처리중 ... " : "저장"}
          </Button>
        </div>
      </FormProvider>
    </ContentWrapper>
  );
}
