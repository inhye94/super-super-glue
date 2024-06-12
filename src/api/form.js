export function findInputError(errors, name) {
  return Object.keys(errors)
    .filter((key) => key.includes(name))
    .reduce((cur, key) => {
      return Object.assign(cur, { error: errors[key] });
    }, {});
}

export const isFormValid = (err) => {
  if (Object.keys(err).length > 0) return false;
  return true;
};
