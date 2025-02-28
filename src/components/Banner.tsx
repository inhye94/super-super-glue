import React from "react";

const Banner: React.FC = () => {
  return (
    <section className="relative h-[320px] -mt-[16px] md:-mt-[36px]">
      <h2 className="visually-hidden">배너</h2>

      <div className="absolute left-[50%] top-0 w-screen h-full -translate-x-[50%] bg-cover bg-center bg-banner brightness-50"></div>

      <div className="relative z-1 flex flex-col justify-center h-full">
        <p className="mb-[8px] text-[14px] text-gray">인혜의 집</p>
        <h3 className="mb-[40px] text-[40px] font-semibold text-white">
          브랜드의 <br />
          모든 것
        </h3>
        <p className="text-[14px] text-white">멋진 식기 보러오세요!!</p>
      </div>
    </section>
  );
};

export default Banner;
