import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import ContentWrapper from "../components/wrapper/ContentWrapper";
import Button from "../modules/components/button/Button";
import { useAuthContext } from "../context/AuthContext";
import { useScreenStateContext } from "../context/ScreenStateContext";
import Toast from "../components/Toast";
import useCart from "../hooks/useCart";

export default function ProductDetail() {
  const { userInfo, loginByDesktop, loginByMobile } = useAuthContext();

  const { isMobile } = useScreenStateContext();

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

  const [_selected, setSelected] = useState("");
  const [_success, setSuccess] = useState(false);

  const {
    updateCart: { mutate: update },
  } = useCart();

  const handleSelected = (e) => {
    setSelected(e.target.value);
  };

  const handelAddCart = async () => {
    // 로그인을 하지 않은 경우,
    if (!userInfo) {
      isMobile ? loginByMobile() : loginByDesktop();
      return;
    }

    // 로그인을 한 경우,
    const _product = {
      id,
      image: image[0],
      name,
      price,
      option: _selected,
      quantity: 1,
    };

    await update(
      { product: { ..._product }, quantity: _product.quantity },
      {
        onSuccess: () => {
          setSuccess(true);
          setTimeout(() => {
            setSuccess(false);
          }, 4000);
        },
      }
    );
  };

  return (
    <ContentWrapper>
      {_success && <Toast text="✅ 장바구니에 추가했습니다~!" />}

      <section className="flex flex-col gap-[8px] *:w-full md:flex-row md:gap-[16px]">
        <div className="w-full aspect-square rounded-lg overflow-hidden md:w-7/12">
          <img
            className="w-full h-full object-contain"
            src={image[0].url}
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
              _selected ? "tertiary" : "secondary"
            }`}
            name="option"
            onChange={handleSelected}
            value={_selected}
          >
            <option value="">--옵션을 선택해주세요--</option>
            {option.map((v) => (
              <option value={v} key={v}>
                {v}
              </option>
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
            <Button
              buttonStyle="outlined"
              clickCallback={handelAddCart}
              disabled={_success}
            >
              장바구니
            </Button>

            <Button>구매하기</Button>
          </div>
        </div>
      </section>

      <section>
        <h3 className="visually-hidden">상품 상세 정보</h3>

        <ul className="flex flex-col gap-[8px] w-full max-w-[900px] mx-auto md:gap-[16px]">
          {image &&
            image.map(({ url }, i) => (
              <li key={i}>
                <img src={url} alt={`대표 이미지 ${i + 1}`} />
              </li>
            ))}

          {detailImage &&
            detailImage.map(({ url }, i) => (
              <li key={i}>
                <img src={url} alt={`상세 이미지 ${i + 1}`} />
              </li>
            ))}
        </ul>
      </section>
    </ContentWrapper>
  );
}
