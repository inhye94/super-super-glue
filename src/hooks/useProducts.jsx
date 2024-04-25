import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  getAllProducts,
  registProduct,
  removeProduct as removeItem,
} from "../api/product";

export default function useProducts() {
  const queryClient = useQueryClient();

  const productsQuery = useQuery({
    queryKey: ["productAll"],
    queryFn: async () => await getAllProducts(),
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 5,
  });

  const addProduct = useMutation({
    mutationFn: ({ userID, data }) => registProduct(userID, data),
    onSuccess: () => queryClient.invalidateQueries(["productAll"]),
    onError: (error) => console.error(error),
  });

  const removeProduct = useMutation({
    mutationFn: ({ userID, productId }) => removeItem(userID, productId),
    onSuccess: () => queryClient.invalidateQueries(["productAll"]),
    onError: (error) => console.error(error),
  });

  return { productsQuery, addProduct, removeProduct };
}
