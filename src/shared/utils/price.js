const getZeroOrPrice = (price) => {
  return price === "무료" ? 0 : price;
};

export const getTotalPrice = (data) => {
  return data.reduce((acc, cur) => {
    return acc + getZeroOrPrice(cur.price) * cur.quantity;
  }, 0);
};
