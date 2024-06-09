import React, { PropsWithChildren } from "react";

interface LayoutWrapperPropsType {
  extraStyle?: string;
}

const LayoutWrapper: React.FC<PropsWithChildren<LayoutWrapperPropsType>> = ({
  children,
  extraStyle,
}) => {
  return (
    <div className={"w-full max-w-[1200px] px-[10px] mx-auto " + extraStyle}>
      {children}
    </div>
  );
};

export default LayoutWrapper;
