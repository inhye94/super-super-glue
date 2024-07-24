import React from "react";
import { LuShoppingCart } from "react-icons/lu";
import useCart from "../hooks/useCart";
import IconLink from "../shared/modules/button/IconLink";

const CartMenu: React.FC = () => {
  const {
    cartQuery: { data: cart },
  } = useCart();

  return (
    <IconLink
      url="/cart"
      text="장바구니"
      size="medium"
      color="secondary"
      count={cart && cart.length}
    >
      <LuShoppingCart aria-hidden="true" />
    </IconLink>
  );
};

export default CartMenu;
