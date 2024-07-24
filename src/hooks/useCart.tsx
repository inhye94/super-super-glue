import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  getCart,
  removeCartItem as fetchRemove,
  updateCart as fetchUpdate,
} from "../api/cart";
import { useAuthContext } from "../context/AuthContext";
import { ShortcutProductType } from "../model/cart";

interface RemoveCartItemParams {
  id: string;
}

interface UpdateCartParamse {
  product: ShortcutProductType;
  quantity: number;
}

export default function useCart() {
  const { userId } = useAuthContext();
  const queryClient = useQueryClient();

  const cartQuery = useQuery({
    queryKey: ["cart", userId || ""],
    queryFn: () => getCart(userId),
    enabled: !!userId,
    refetchOnWindowFocus: false,
  });

  const removeCartItem = useMutation({
    mutationFn: ({ id }: RemoveCartItemParams) => fetchRemove(userId, id),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["cart", userId] }),
  });

  const updateCart = useMutation({
    mutationFn: ({ product, quantity }: UpdateCartParamse) =>
      fetchUpdate(userId, { ...product, quantity }),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["cart", userId] }),
  });

  return { cartQuery, removeCartItem, updateCart };
}
