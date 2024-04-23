import { getData, updateData, removeData } from "./firebase/base.js";

export const getCart = (userId) => {
  return getData(`cart/${userId}`) //
    .then((data) => {
      if (data) {
        return Object.values(data.val());
      }

      return null;
    });
};

export const updateCart = (userId, product) => {
  return updateData(`cart/${userId}/${product.id}`, product);
};

export const removeCartItem = (userId, productId) => {
  return removeData(`cart/${userId}/${productId}`);
};
