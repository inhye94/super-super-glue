export const getLimitSize = (limitSize) => {
  return limitSize < 1000
    ? `${limitSize}MB`
    : `${Math.floor(limitSize / 1000)}GB`;
};
