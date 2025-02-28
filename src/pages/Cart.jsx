import React from "react";
import Spinner from "../components/Spinner";
import ContentWrapper from "../components/wrapper/ContentWrapper";
import Button from "../shared/modules/button/Button";
import useCart from "../hooks/useCart";
import CartCard from "../components/CartCard/CartCard";
import { getTotalPrice } from "../shared/utils/price";
import { DELIVERY } from "../shared/utils/constants/price";

export default function Cart() {
  const {
    cartQuery: { data: cart, isLoading },
  } = useCart();

  const _totalPrice = cart && getTotalPrice(cart);

  if (isLoading) return <Spinner text="장바구니 데이터를 불러오고 있습니다!" />;

  if (!cart) {
    return (
      <p className="border border-gray text-tertiary rounded-lg flex justify-center items-center h-[20vh]">
        장바구니가 비어있어요!
      </p>
    );
  } else {
    return (
      <ContentWrapper title="✨ 장바구니 ✨">
        <div className="relative flex flex-col gap-[16px] md:flex-row">
          <section className="w-full md:w-3/4">
            <h3 className="visually-hidden">장바구니 상품 리스트</h3>
            <ul className="flex flex-col gap-[24px]">
              {cart &&
                cart.map((v) => (
                  <li
                    key={v.id}
                    className="p-[16px] rounded-lg border border-gray-light"
                  >
                    <CartCard product={v} />
                  </li>
                ))}
            </ul>
          </section>

          <section className="sticky left-0 bottom-[60px] w-full py-[8px] bg-white md:bottom-[unset] md:top-0 md:w-1/4 md:p-0">
            <h3 className="visually-hidden">구매 정보 요약</h3>

            <dl
              className="hidden md:flex flex-col
            text-secondary font-semibold text-[14px]
            *:flex *:items-center *:justify-between *:py-[4px]
            md:border md:border-gray-light md:rounded-lg
            md:p-[16px] md:mb-[16px]"
            >
              <div>
                <dt>총 상품금액</dt>
                <dd>{_totalPrice.toLocaleString()}원</dd>
              </div>
              <div>
                <dt>총 배송비</dt>
                <dd>+ {DELIVERY.toLocaleString()}원</dd>
              </div>
              <div>
                <dt>총 할인금액</dt>
                <dd>- 0원</dd>
              </div>
              <div className="text-dark font-bold">
                <dt>결제금액</dt>
                <dd className="text-[24px]">
                  {(_totalPrice + DELIVERY).toLocaleString()}원
                </dd>
              </div>
            </dl>

            <div className="flex items-center gap-[8px]">
              <p className="shrink-0 text-dark text-[16px] font-semibold md:hidden">
                {(_totalPrice + DELIVERY).toLocaleString()}원
              </p>
              <Button>바로구매</Button>
            </div>
          </section>
        </div>
      </ContentWrapper>
    );
  }
}
