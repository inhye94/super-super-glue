import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import IconButton from "./IconButton";
import Button from "./Button";
import ContentWrapper from "./ContentWrapper";

export default function Gnb({ menu }) {
  return (
    <header className="sticky left-0 top-0 py-[8px] border-y-2 bg-white border-pink md:border-y-4">
      <ContentWrapper extraStyle="flex justify-between flex-wrap gap-y-[6px] items-center">
        <Logo />

        <nav className="flex items-center">
          <h2 className="visually-hidden">메뉴</h2>

          <ul
            className="
              fixed bottom-0 left-0
              flex justify-evenly items-center gap-x-[8px]
              w-full px-[16px] py-[8px]
              border-y-2  border-pink
              bg-white
              md:static md:justify-end
              md:px-[unset] md:py-[unset]
              md:border-y-0
              md:bg-transparent"
          >
            {menu.map(({ path, text, icon }, i) => (
              <li key={i}>
                {icon ? (
                  <IconButton
                    tag="link"
                    url={path}
                    icon={icon}
                    text={text}
                    size="medium"
                    color="secondary"
                  />
                ) : (
                  <Link
                    to={path}
                    title={text}
                    className="text-[14px] font-bold text-secondary hover:text-tertiary"
                  >
                    {text.toUpperCase()}
                  </Link>
                )}
              </li>
            ))}
            <li className="min-w-[80px] ml-[12px] md:min-w-[100px] md:ml-[24px]">
              <Button size="tiny">로그인</Button>
            </li>
          </ul>
        </nav>
      </ContentWrapper>
    </header>
  );
}
