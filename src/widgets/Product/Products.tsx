import React from "react";
import Spinner from "../../components/Spinner";
import ContentWrapper from "../../components/wrapper/ContentWrapper";
import ProductCard from "../../components/ProductCard/ProductCard";
import useProducts from "../../hooks/useProducts";
import styles from "./Products.module.scss";
import { ProductType } from "../../model/product";

const Products: React.FC = () => {
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
          {productAll.map((product: ProductType) => (
            <li key={product.id} className={styles.item}>
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      </ContentWrapper>
    );
  }
};

export default Products;
