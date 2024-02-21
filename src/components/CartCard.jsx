import React, { useState } from "react";
import IconButton from "./IconButton";
import { PiPlusCircle, PiMinusCircle } from "react-icons/pi";
import { IoMdClose } from "react-icons/io";
import { removeCartItem, updateCart } from "../api/firebase";
import Toast from "./Toast";

export default function CartCard({
  product,
  product: { id, name, image, price, option, quantity },
  userId,
}) {
  const [_success, setSuccess] = useState(false);
  const [_text, setText] = useState("");

  const handleRemoveCartItem = async () => {
    removeCartItem(userId, id).then(() => {
      setText("장바구니에서 삭제되었습니다!");
      setSuccess(true);

      setTimeout(() => {
        setSuccess(false);
        setText("");
      }, 4000);
    });
  };

  const handleUpdateQuantity = async (e) => {
    updateCart(userId, {
      ...product,
      quantity: quantity + +e.currentTarget.value,
    }).then(() => {
      setText("수량이 변경되었습니다!");
      setSuccess(true);

      setTimeout(() => {
        setSuccess(false);
        setText("");
      }, 4000);
    });
  };

  return (
    <article className="relative flex flex-col gap-[8px] md:gap-[16px]">
      {_success && <Toast text={_text} />}

      <div className="flex gap-[12px]">
        <img
          className="shrink-0 w-[80px] h-[80px] object-cover rounded-md"
          src={image}
          alt={`${name}의 썸네일`}
        />

        <h3 className="w-1/2 text-[16px] font-semibold text-secondary md:w-5/6">
          {name}
        </h3>
      </div>

      <div className="flex flex-col gap-[8px] p-[8px] rounded-lg bg-background">
        <dl className="text-[14px] text-tertiary">
          <dt className="visually-hidden">옵션</dt>
          <dd>{option}</dd>
        </dl>

        <div className="shrink-0 inline-flex items-center">
          <IconButton
            text="수량 빼기"
            icon={<PiMinusCircle aria-hidden />}
            value={-1}
            disabled={quantity === 1}
            callback={handleUpdateQuantity}
          />

          <p className="w-[24px] text-center text-dark font-bold">{quantity}</p>

          <IconButton
            text="수량 더하기"
            icon={<PiPlusCircle aria-hidden />}
            value={1}
            callback={handleUpdateQuantity}
          />
        </div>
      </div>

      <p className="text-[20px] font-bold text-dark text-right">
        {price > 0 ? price.toLocaleString() + "원" : "무료"}
      </p>

      <div className="absolute -right-[8px] -top-[8px]">
        <IconButton
          text="장바구니에서 삭제"
          size="medium"
          icon={<IoMdClose aria-hidden />}
          callback={handleRemoveCartItem}
        />
      </div>
    </article>
  );
}
