import React from "react";
import Spinner from "../Spinner";
import ContentWrapper from "../wrapper/ContentWrapper";
import ProductCard from "../ProductCard/ProductCard";
import useProducts from "../../hooks/useProducts";
import styles from "./Products.module.scss";

export default function Products() {
  const {
    productsQuery: { isLoading, data: productAll },
  } = useProducts();

  if (isLoading) return <Spinner text="등록 상품 정보를 불러오는 중입니다!" />;

  if (!productAll || productAll.length === 0) {
    return <p>상품 준비중입니다!</p>;
  } else {
    return (
      <ContentWrapper>
        <ul className={styles.list}>
          {productAll.map((product) => (
            <li key={product.id} className={styles.item}>
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      </ContentWrapper>
    );
  }
}
