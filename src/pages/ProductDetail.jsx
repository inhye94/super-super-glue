import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import ContentWrapper from "../components/ContentWrapper";
import Button from "../components/Button";

export default function ProductDetail() {
  const {
    state: {
      product: {
        image,
        name,
        price,
        category,
        id,
        detailImage,
        option,
        description,
      },
    },
  } = useLocation();

  const [selected, setSelected] = useState("");

  const handleSelected = (e) => {
    setSelected(e.target.value);
  };

  return (
    <ContentWrapper>
      <section className="flex flex-col gap-[8px] *:w-full md:flex-row md:gap-[16px]">
        <div className="w-full aspect-square rounded-lg overflow-hidden md:w-7/12">
          <img
            className="w-full h-full object-contain"
            src={image[0]}
            alt={`${name}의 썸네일`}
          />
        </div>

        <div className="flex flex-col gap-[4px] md:gap-[12px] md:w-5/12">
          <p className="text-[14px] font-medium text-gray-dark">{category}</p>

          <h1
            className="text-[18px] font-medium text-secondary transition-colors group-hover:text-gray-dark
            md:mb-[8px] md:text-[28px]"
          >
            {name}
          </h1>

          <strong
            className="mb-[12px] text-[24px] text-dark
            md:text-[32px]"
          >
            {price === "무료" ? price : price.toLocaleString() + "원"}
          </strong>

          <select
            className={`button outlined appearance-none md:mb-[0px] cursor-pointer ${
              selected ? "tertiary" : "secondary"
            }`}
            name="option"
            onChange={handleSelected}
            value={selected}
          >
            <option value="">--옵션을 선택해주세요--</option>
            {option.map((v) => (
              <option value={v}>{v}</option>
            ))}
          </select>

          {description && (
            <p className="p-[8px] rounded-md text-[14px] text-secondary bg-background">
              &lt; 상품 설명 및 배송 안내 &gt;
              <br />
              <br />
              {description}
            </p>
          )}

          <div className="flex gap-[8px] mt-[24px] md:mt-[32px]">
            <Button buttonStyle="outlined">장바구니</Button>

            <Button>구매하기</Button>
          </div>
        </div>
      </section>

      <section>
        <h3 className="visually-hidden">상품 상세 정보</h3>

        <ul className="flex flex-col gap-[8px] w-full max-w-[900px] mx-auto md:gap-[16px]">
          {image &&
            image.map((url, i) => (
              <li key={i}>
                <img src={url} alt={`대표 이미지 ${i + 1}`} />
              </li>
            ))}

          {detailImage &&
            detailImage.map((url, i) => (
              <li key={i}>
                <img src={url} alt={`상세 이미지 ${i + 1}`} />
              </li>
            ))}
        </ul>
      </section>
    </ContentWrapper>
  );
}
