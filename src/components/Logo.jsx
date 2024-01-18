/**
 * 2024.01.18
 * dueto park
 * Logo 컴포넌트 생성
 */

import React from "react";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <h1>
      <Link
        className="block text-[24px] font-extrabold italic text-green-900 border-y-2 border-pink-300 whitespace-nowrap leading-none md:text-[48px] md:border-y-4"
        to="/"
      >
        SUPER SUPER GLUE
      </Link>
    </h1>
  );
}
