import React from "react";
import Spinner from "./Spinner";
import ContentWrapper from "./ContentWrapper";
import ProductCard from "./ProductCard";
import useProducts from "../hooks/useProducts";

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
        <ul className="flex flex-wrap -mx-[4px]">
          {productAll.map((product) => (
            <li
              key={product.id}
              className="w-[50%] p-[4px] md:w-[25%] md:p-[8px]"
            >
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      </ContentWrapper>
    );
  }
}
