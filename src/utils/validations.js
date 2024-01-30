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
    pattern: {
      value: /^[0-9]*$/,
      message: "숫자만!",
    },
  };
};

export const kr_en_validation = () => {
  return {
    pattern: {
      value: /^[ㄱ-ㅎㅏ-ㅣ가-힣a-zA-Z]*$/,
      message: "한글, 영어만 허용",
    },
  };
};

export const only_kr_validation = () => {
  return {
    pattern: {
      value: /^[ㄱ-ㅎㅏ-ㅣ가-힣]*$/,
      message: "한글만 허용",
    },
  };
};

export const special_validation = () => {
  return {
    pattern: {
      value: /^[&-_ㄱ-ㅎㅏ-ㅣ가-힣a-zA-Z ]*$/,
      message: "한글, 영어, 특수문자 &_- 만 허용",
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
