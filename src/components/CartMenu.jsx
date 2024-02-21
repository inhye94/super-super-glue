import React from "react";
import IconButton from "./IconButton";
import { LuShoppingCart } from "react-icons/lu";
import { useAuthContext } from "../context/AuthContext";
import { useQuery } from "@tanstack/react-query";
import { getCart } from "../api/firebase";

export default function CartMenu() {
  const { userInfo } = useAuthContext();

  const { data: cart } = useQuery({
    queryKey: ["cart"],
    queryFn: () => getCart(userInfo.uid),
  });

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
