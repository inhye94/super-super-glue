import React from "react";
import IconButton from "./IconButton";
import { LuShoppingCart } from "react-icons/lu";
import useCart from "../hooks/useCart";

export default function CartMenu() {
  const {
    cartQuery: { data: cart },
  } = useCart();

  return (
    <IconButton
      tag="link"
      url="/cart"
      icon={<LuShoppingCart aria-hidden="true" />}
      text="장바구니"
      size="medium"
      color="secondary"
      count={cart && cart.length}
    />
  );
}
