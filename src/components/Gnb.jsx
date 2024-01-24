import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import IconButton from "./IconButton";
import Button from "./Button";
import ContentWrapper from "./ContentWrapper";
import { useGoogleAuthContext } from "../context/GoogleAuthContext";
import { useScreenStateContext } from "../context/ScreenStateContext";

export default function Gnb({ menu }) {
  const { loginByMobile, loginByDesktop, logout, userInfo } =
    useGoogleAuthContext();
  const { isMobile } = useScreenStateContext();

  const handleLogin = () => {
    isMobile ? loginByMobile() : loginByDesktop();
  };

  const handleLogout = () => {
    logout();
  };

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
            {userInfo && (
              <li className="shrink-0">
                <img
                  src={userInfo.photoURL}
                  alt={`${userInfo.displayName}님의 프로필`}
                  className="w-[32px] h-[32px] rounded-full object-cover"
                />
              </li>
            )}
          </ul>

          <div className="min-w-[64px] ml-[4px] md:min-w-[100px] md:ml-[24px]">
            {userInfo ? (
              <Button size="tiny" color="tertiary" clickCallback={handleLogout}>
                로그아웃
              </Button>
            ) : (
              <Button size="tiny" clickCallback={handleLogin}>
                로그인
              </Button>
            )}
          </div>
        </nav>
      </ContentWrapper>
    </header>
  );
}
