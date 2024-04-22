import { ref, push, child } from "firebase/database";
import { database, getData, updateData, removeData } from "./firebase/base.js";

export const getAllProducts = () => {
  return getData("product") //
    .then((data) => {
      const allData = data.val();

      return Object.values(allData).reduce((acc, userProducts) => {
        acc.push(...Object.values(userProducts));
        return acc;
      }, []);
    });
};

export const getUserProduct = (userId) => {
  return getData(`product/${userId}`) //
    .then((data) => data.val());
};

export const registProduct = async (userId, data, image, detailImage) => {
  const _path = `product/${userId}`;
  const id = data.id || push(child(ref(database), _path)).key;

  return updateData(`${_path}/${id}`, {
    ...data,
    id,
    image,
    detailImage,
  }).then(() => {
    return id;
  });
};

export const removeProduct = (userId, productId) => {
  return removeData(`product/${userId}/${productId}`);
};
