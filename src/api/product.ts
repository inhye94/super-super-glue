import { ref, push, child } from "firebase/database";
import { database, getData, updateData, removeData } from "./firebase/base.js";
import {
  ProductIdType,
  ProductType,
  UserIdType,
  registResultType,
  removeResultType,
} from "../model/product.js";

export const getAllProducts = async (): Promise<ProductType[] | null> => {
  try {
    const data = await getData("product"); //
    if (!data) return null;

    const allProducts = data.val();

    return Object.values(allProducts) as ProductType[];
  } catch (error) {
    console.error("Error getting all products:", error);
    return null;
  }
};

export const getUserProduct = async (
  userId: UserIdType
): Promise<ProductType[] | null> => {
  try {
    const data = await getData("product");
    if (!data) return null;

    const allProducts = data.val();

    return (Object.values(allProducts) as ProductType[]).filter(
      (product: ProductType) => product.userId === userId
    );
  } catch (error) {
    console.error("Error getting user products:", error);
    return null;
  }
};

export const registProduct = async (
  userId: string,
  data: ProductType
): Promise<registResultType> => {
  const id = data.id || push(child(ref(database), "product")).key;

  return updateData(`product/${id}`, {
    ...data,
    id,
    userId,
  })
    .then(() => {
      return id;
    })
    .catch((error) => {
      throw Error(error.massage + "상품 등록 실패");
    });
};

export const removeProduct = (
  productId: ProductIdType
): Promise<removeResultType> => {
  return removeData(`product/${productId}`);
};
