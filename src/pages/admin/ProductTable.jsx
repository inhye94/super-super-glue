import React from "react";
import { useAuthContext } from "../../context/AuthContext";
import { useQuery } from "@tanstack/react-query";
import { getUserProduct } from "../../api/product";
import ContentWrapper from "../../components/wrapper/ContentWrapper";
import { Link } from "react-router-dom";
import Spinner from "../../components/Spinner";
import MyProductCard from "../../components/admin/MyProductCard/MyProductCard";

export default function ProductTable() {
  const { userInfo } = useAuthContext();

  const { data: productList, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => await getUserProduct(userInfo.uid),
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 1,
  });

  if (isLoading) return <Spinner text="등록 상품 정보를 불러오는 중입니다!" />;

  return (
    <ContentWrapper title="✨ 등록 상품 리스트 ✨">
      {productList ? (
        <ul className="flex flex-col gap-y-[8px]">
          {[...Object.values(productList)].map((product) => (
            <li
              key={product.id}
              className="p-[16px] bg-gray-light bg-opacity-55 rounded-md"
            >
              <MyProductCard product={product} />
            </li>
          ))}
        </ul>
      ) : (
        <Link
          to="/admin/regist"
          className="button primary full big md:max-w-[540px] md:mx-auto"
        >
          상품 등록하러 가기
        </Link>
      )}
    </ContentWrapper>
  );
}
