import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  getAllProducts,
  registProduct,
  removeProduct as removeItem,
} from "../api/product";
import {
  ProductIdType,
  ProductType,
  UserIdType,
  registResultType,
  removeResultType,
} from "../model/product";

interface AddProductParmasType {
  userID: UserIdType;
  data: ProductType;
}

interface RemoveProductParamsType {
  productId: ProductIdType;
}

const useProducts = () => {
  const queryClient = useQueryClient();

  const productsQuery = useQuery({
    queryKey: ["productAll"],
    queryFn: async () => await getAllProducts(),
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 5,
  });

  const addProduct = useMutation<registResultType, Error, AddProductParmasType>(
    {
      mutationFn: ({ userID, data }) => registProduct(userID, data),
      onSuccess: () =>
        queryClient.invalidateQueries({ queryKey: ["productAll"] }),
      onError: (error) => console.error(error),
    }
  );

  const removeProduct = useMutation<
    removeResultType,
    Error,
    RemoveProductParamsType
  >({
    mutationFn: ({ productId }) => removeItem(productId),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["productAll"] }),
    onError: (error) => console.error(error),
  });

  return { productsQuery, addProduct, removeProduct };
};

export default useProducts;
