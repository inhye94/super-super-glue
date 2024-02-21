import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  getCart,
  removeCartItem as fetchRemove,
  updateCart as fetchUpdate,
} from "../api/firebase";
import { useAuthContext } from "../context/AuthContext";

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
    mutationFn: ({ id }) => fetchRemove(userId, id),
    onSuccess: () => queryClient.invalidateQueries(["cart", userId]),
  });

  const updateCart = useMutation({
    mutationFn: ({ product, quantity }) =>
      fetchUpdate(userId, { ...product, quantity }),
    onSuccess: () => queryClient.invalidateQueries(["cart", userId]),
  });

  return { cartQuery, removeCartItem, updateCart };
}
