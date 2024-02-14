const _MAX_PRISE = 100000000;

export const required_validation = () => {
  return {
    required: {
      value: true,
      message: "필수 값",
    },
  };
};

export const num_validation = (max) => {
  return {
    required: false,
    max: {
      value: max,
      message: `${max} 이하`,
    },
    onChange: (e) => {
      const _value = e.target.value;
      e.target.value = +_value.replace(/[^0-9]/, "");
    },
  };
};

export const price_validation = (limit) => {
  return {
    required: false,
    max: {
      value: limit || _MAX_PRISE,
      message: `${(limit || _MAX_PRISE).toLocaleString()}원 이하`,
    },
    onChange: (e) => {
      const _value = e.target.value.replaceAll(/[^0-9]/g, "").slice(0, 9);
      e.target.value = Number(_value).toLocaleString();
    },
    setValueAs: (v) => {
      if (Number(v) === 0) return "무료";
      return Number(v.replaceAll(/[^0-9]/g, ""));
    },
  };
};

export const kr_en_validation = () => {
  return {
    required: false,
    onChange: (e) => {
      const _value = e.target.value;
      e.target.value = _value.replace(/[^ㄱ-ㅎㅏ-ㅣ가-힣a-zA-Z]/, "");
    },
  };
};

export const only_kr_validation = () => {
  return {
    required: false,
    onChange: (e) => {
      const _value = e.target.value;
      e.target.value = _value.replace(/[^ㄱ-ㅎㅏ-ㅣ가-힣]/, "");
    },
  };
};

export const special_validation = () => {
  return {
    required: false,
    onChange: (e) => {
      const _value = e.target.value;
      e.target.value = _value.replace(/[^\w\-&ㄱ-ㅎㅏ-ㅣ가-힣 _]/, "");
    },
  };
};

export const option_validation = () => {
  return {
    required: false,
    onChange: (e) => {
      const _value = e.target.value;
      e.target.value = _value.replace(
        /[^ㄱ-ㅎㅏ-ㅣ가-힣a-zA-Z0-9 ,(){}[\]]/,
        ""
      );
    },
    setValueAs: (v) => v.split(","),
  };
};

export const minlength_validation = (min) => {
  return {
    minLength: {
      value: min,
      message: `최소 ${min}자`,
    },
  };
};

export const maxlength_validation = (max) => {
  return {
    maxLength: {
      value: max,
      message: `최대 ${max}자`,
    },
  };
};
