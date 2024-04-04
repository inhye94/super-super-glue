import React from "react";
import { useAuthContext } from "../context/AuthContext";
import { useQuery } from "@tanstack/react-query";
import { getUserProduct } from "../api/firebase";
import ContentWrapper from "../components/wrapper/ContentWrapper";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";

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
              <div className="flex flex-col gap-[16px] md:flex-row">
                <p className="max-w-[540px] font-bold">{product.name}</p>
                <p>{product.price}</p>
                <p>{product.category}</p>
                <p>{product.option.join(",")}</p>
                <p>{product.description}</p>
              </div>

              <div className="flex flex-col flex-wrap gap-[16px] mt-[12px] md:flex-row">
                {[...product.image, ...product.detailImage].map((v) => (
                  <img
                    className="md:max-w-[120px] aspect-square object-cover rounded-md"
                    src={v}
                    alt={`${product.image}의 이미지`}
                  />
                ))}
              </div>
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
