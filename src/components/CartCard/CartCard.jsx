import React, { useState } from "react";
import IconButton from "../../shared/modules/button/IconButton";
import { PiPlusCircle, PiMinusCircle } from "react-icons/pi";
import { IoMdClose } from "react-icons/io";
import Toast from "../Toast";
import useCart from "../../hooks/useCart";
import styles from "./CartCard.module.scss";

export default function CartCard({
  product,
  product: { id, name, image, price, option, quantity },
}) {
  const [_success, setSuccess] = useState(false);

  const {
    updateCart: { mutate: update },
    removeCartItem: { mutate: remove },
  } = useCart();

  const handleRemoveCartItem = async () => {
    if (window.confirm("장바구니에서 삭제하겠습니까?")) {
      await remove({ id });
    }
  };

  const handleUpdateQuantity = async (e) => {
    await update(
      { product, quantity: quantity + +e.currentTarget.value },
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
    <article className={styles.card}>
      {_success && <Toast text="수량이 변경되었습니다!" />}

      <div className={styles["image-box"]}>
        <img src={image.url} alt={`${name}의 썸네일`} />

        <h3>{name}</h3>
      </div>

      <div className={styles["option-box"]}>
        <dl>
          <dt className="visually-hidden">옵션</dt>
          <dd>{option}</dd>
        </dl>

        <div className={styles["button-wrapper"]}>
          <IconButton
            text="수량 빼기"
            value={-1}
            disabled={quantity === 1}
            callback={handleUpdateQuantity}
          >
            <PiMinusCircle aria-hidden />
          </IconButton>

          <p>{quantity}</p>

          <IconButton
            text="수량 더하기"
            value={1}
            callback={handleUpdateQuantity}
          >
            <PiPlusCircle aria-hidden />
          </IconButton>
        </div>
      </div>

      <p className={styles.price}>
        {price > 0 ? price.toLocaleString() + "원" : "무료"}
      </p>

      <div className={styles.remove}>
        <IconButton
          text="장바구니에서 삭제"
          size="medium"
          callback={handleRemoveCartItem}
        >
          <IoMdClose aria-hidden />
        </IconButton>
      </div>
    </article>
  );
}
