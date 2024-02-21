import React from "react";

export default function Toast({ text }) {
  return (
    <div className="fixed bottom-[72px] left-[50%] z-[30] -translate-x-[50%] flex flex-col gap-y-[8px] w-[90%] md:w-full md:max-w-[540px]">
      <p className="w-full p-[16px] rounded-lg bg-dark bg-opacity-55 shadow-lg shadow-gray-dark text-[16px] font-bold text-white animate-pop">
        {text}
      </p>
    </div>
  );
}
