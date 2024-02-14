import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getAllProducts } from "../api/firebase";
import Spinner from "./Spinner";
import ContentWrapper from "./ContentWrapper";
import ProductCard from "./ProductCard";

export default function Products() {
  const { data: productAll, isLoading } = useQuery({
    queryKey: ["productAll"],
    queryFn: async () => await getAllProducts(),
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 1,
  });

  if (isLoading) return <Spinner text="등록 상품 정보를 불러오는 중입니다!" />;

  if (productAll.length === 0) {
    return <p>상품 준비중입니다!</p>;
  } else {
    return (
      <ContentWrapper title="✨ 상품 리스트 ✨">
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
