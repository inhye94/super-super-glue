import React from "react";

const LayoutWrapper = ({ children, extraStyle }) => {
  return (
    <div className={"w-full max-w-[1200px] px-[10px] mx-auto " + extraStyle}>
      {children}
    </div>
  );
};

export default LayoutWrapper;
