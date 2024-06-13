/**
 * 2024.01.18
 * dueto park
 * Logo 컴포넌트 생성
 */

import React from "react";
import { Link } from "react-router-dom";

const Logo: React.FC = () => {
  return (
    <h1>
      <Link
        className="block text-[24px] font-extrabold italic text-green-dark whitespace-nowrap leading-none md:text-[48px]"
        to="/"
      >
        SUPER SUPER GLUE
      </Link>
    </h1>
  );
};

export default Logo;
