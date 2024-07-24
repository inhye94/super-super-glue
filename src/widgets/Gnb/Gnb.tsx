import React from "react";
import Logo from "../../components/Logo";
import Button from "../../shared/modules/button/Button";
import LayoutWrapper from "../../components/wrapper/LayoutWrapper";
import { useScreenStateContext } from "../../context/ScreenStateContext";
import { useAuthContext } from "../../context/AuthContext";
import GnbMenus from "../menu/GnbMenu";
import Profile from "../../components/Profile/Profile";
import styles from "./Gnb.module.scss";

const Gnb: React.FC = () => {
  const { userInfo, loginByDesktop, loginByMobile, logout } = useAuthContext();
  const { isMobile } = useScreenStateContext();

  const handleLogin = () => {
    isMobile ? loginByMobile() : loginByDesktop();
  };

  const handleLogout = () => {
    logout();
    window.location.reload();
  };

  return (
    <header className={styles.gnb}>
      <LayoutWrapper extraStyle="flex justify-between flex-wrap gap-y-[6px] items-center">
        <Logo />

        <nav className={styles.nav}>
          <h2 className="visually-hidden">메뉴</h2>

          <div className={styles.menu}>
            <ul className={styles["menu-list"]}>
              <GnbMenus userInfo={userInfo} />
              {userInfo && (
                <li className={styles.profile}>
                  <Profile userInfo={userInfo} />
                </li>
              )}
            </ul>
          </div>

          <div className={styles.auth}>
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
      </LayoutWrapper>
    </header>
  );
};

export default Gnb;
