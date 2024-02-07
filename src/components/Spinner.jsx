import React from "react";
import PacmanLoader from "react-spinners/PacmanLoader";

export default function Spinner({ text }) {
  return (
    <div className="fixed w-full h-full left-0 top-0 z-50 flex flex-col items-center justify-center text-center">
      <PacmanLoader color="#36d7b7" />
      <p className="mt-[32px] text-[16px] text-[#36d7b7] font-bold">{text}</p>

      <div
        className="w-full h-full bg-dark absolute top-0 left-0 z-[-1] opacity-55"
        aria-hidden
      ></div>
    </div>
  );
}
