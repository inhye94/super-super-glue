import React from "react";

const ContentWrapper = ({ children, title }) => {
  return (
    <section className="flex flex-col gap-y-[64px] pb-[32px] pt-[24px]">
      {title && (
        <h2 className="p-[16px] text-[24px] font-extrabold text-[#333] bg-[#efefef] rounded-md">
          {title}
        </h2>
      )}

      {children}
    </section>
  );
};

export default ContentWrapper;
