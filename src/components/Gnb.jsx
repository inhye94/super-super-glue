import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import IconButton from "./IconButton";
import Button from "./Button";
import ContentWrapper from "./ContentWrapper";
import { useScreenStateContext } from "../context/ScreenStateContext";
import {
  onUserStateChanged,
  loginByDesktop,
  loginByMobile,
  logout,
} from "../api/firebase";

import {
  LuPartyPopper,
  LuShoppingCart,
  LuTable2,
  LuPictureInPicture2,
} from "react-icons/lu";
import { RiMenuAddLine } from "react-icons/ri";

const _menu = [
  {
    path: "/product/new",
    text: "new",
    icon: <LuPartyPopper aria-hidden="true" />,
    login: true,
    role: "normal",
  },
  {
    path: "/cart",
    text: "장바구니",
    icon: <LuShoppingCart aria-hidden="true" />,
    login: false,
    role: "normal",
  },

  {
    path: "/admin",
    text: "어드민 메인",
    icon: <LuTable2 aria-hidden="true" />,
    login: false,
    role: "admin",
  },
  {
    path: "/admin/regist",
    text: "상품 등록",
    icon: <RiMenuAddLine aria-hidden="true" />,
    login: false,
    role: "admin",
  },

  {
    path: "/modules",
    text: "모듈",
    icon: <LuPictureInPicture2 aria-hidden="true" />,
    login: true,
    role: "normal",
  },
];

export default function Gnb({ menu }) {
  const [userInfo, setUserInfo] = useState();
  const { isMobile } = useScreenStateContext();

  const handleLogin = () => {
    isMobile ? loginByMobile() : loginByDesktop();
  };

  useEffect(() => {
    onUserStateChanged((user) => {
      setUserInfo(user);
    });
  }, []);

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
            {_menu
              .filter((v) => {
                if (userInfo) {
                  return userInfo.isAdmin ? true : v.role === "normal";
                } else {
                  return v.login;
                }
              })
              .map(({ path, text, icon }, i) => (
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
              <Button size="tiny" color="tertiary" clickCallback={logout}>
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
