import React from "react";
import Button from "../../shared/modules/button/Button";
import useProducts from "../../hooks/useProducts";
import { ProductType } from "../../model/product";

import styles from "./MyProductCard.module.scss";

interface ProductPropsType {
  product: ProductType;
}

const MyProductCard: React.FC<ProductPropsType> = ({ product }) => {
  const {
    removeProduct: { mutate },
  } = useProducts();

  const handleRemoveProductItem = async (productId: string) => {
    if (!window.confirm("정말 삭제하시겠습니까?")) return;

    await mutate(
      { productId },
      {
        onSuccess: (result) => {
          window.location.reload();
        },
      }
    );
  };

  return (
    <article className={styles.card}>
      <div className={styles["text-box"]}>
        <h3 className={styles.title}>{product.name}</h3>

        <dl className={styles.desc}>
          <dt>가격</dt>
          <dd>{product.price}</dd>
          <dt>카테고리</dt>
          <dd>{product.category}</dd>
          <dt>옵션</dt>
          <dd>{product.option.join(",")}</dd>
          <dt>배송설명</dt>
          <dd>{product.description}</dd>
        </dl>
      </div>

      <div className={styles["image-box"]}>
        <img src={product.image[0].url} alt={`${product.name}의 이미지`} />
      </div>

      <div className={styles["button-box"]}>
        <Button color="secondary">수정</Button>
        <Button
          color="secondary"
          buttonStyle="outlined"
          clickCallback={handleRemoveProductItem.bind(null, product.id)}
        >
          삭제
        </Button>
      </div>
    </article>
  );
};

export default MyProductCard;
