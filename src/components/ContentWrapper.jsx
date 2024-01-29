import React from "react";

export default function ContentWrapper({ children, extraStyle }) {
  return (
    <div className={"w-full max-w-[1200px] px-[10px] mx-auto " + extraStyle}>
      {children}
    </div>
  );
}
