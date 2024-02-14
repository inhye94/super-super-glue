import React from "react";

export default function Banner() {
  return (
    <section className="relative h-[320px] -mt-[16px] md:-mt-[36px]">
      <h2 className="visually-hidden">배너</h2>

      <div className="absolute left-[50%] top-0 w-screen h-full -translate-x-[50%] bg-cover bg-center bg-banner"></div>

      <div className="relative z-1 flex flex-col justify-center h-full">
        <p className="mb-[8px] text-[14px] text-gray">대충살자</p>
        <h3 className="mb-[40px] text-[40px] font-semibold text-white">
          하고싶은거 다 하자!
        </h3>
        <p className="text-[14px] text-tertiary">고민하면 늙는다</p>
      </div>
    </section>
  );
}
