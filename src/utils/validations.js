export const required_validation = () => {
  return {
    required: {
      value: true,
      message: "필수 값",
    },
  };
};

export const num_validation = () => {
  return {
    onChange: (e) => {
      const _value = e.target.value;
      e.target.value = _value.replace(/[^0-9]/, "");
    },
  };
};

export const kr_en_validation = () => {
  return {
    onChange: (e) => {
      const _value = e.target.value;
      e.target.value = _value.replace(/[^ㄱ-ㅎㅏ-ㅣ가-힣a-zA-Z]/, "");
    },
  };
};

export const only_kr_validation = () => {
  return {
    onChange: (e) => {
      const _value = e.target.value;
      e.target.value = _value.replace(/[^ㄱ-ㅎㅏ-ㅣ가-힣]/, "");
    },
  };
};

export const special_validation = () => {
  return {
    onChange: (e) => {
      const _value = e.target.value;
      e.target.value = _value.replace(/[^\w\-&ㄱ-ㅎㅏ-ㅣ가-힣]/, "");
    },
  };
};

export const min_validation = (min) => {
  return {
    minLength: {
      value: min,
      message: `최소 ${min}자`,
    },
  };
};

export const max_validation = (max) => {
  return {
    maxLength: {
      value: max,
      message: `최소 ${max}자`,
    },
  };
};
