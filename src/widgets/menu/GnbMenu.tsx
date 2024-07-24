import React, { ReactNode } from "react";
import { LuPartyPopper, LuTable2, LuPictureInPicture2 } from "react-icons/lu";
import { RiMenuAddLine } from "react-icons/ri";
import CartMenu from "../../components/CartMenu";
import IconLink from "../../shared/modules/button/IconLink";
import { UserInfoType } from "../../model/auth";

const GnbMenus: React.FC<UserInfoType> = ({ userInfo }) => {
  return (
    <>
      {gnbMenuList
        .filter((menu) => {
          if (userInfo) {
            return userInfo.isAdmin || menu.role === "normal";
          } else {
            return menu.login;
          }
        })
        .map(({ path, text, icon }, i) => (
          <li key={i}>
            <IconLink url={path} text={text} size="medium" color="secondary">
              {icon}
            </IconLink>
          </li>
        ))}
    </>
  );
};

export default GnbMenus;

////////////////////////////////////////////////////////////

interface MenuType {
  path: string;
  text: string;
  icon?: ReactNode;
  login: boolean;
  role: "normal" | "admin";
}

const gnbMenuList: MenuType[] = [
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
    login: false,
    icon: <CartMenu />,
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
