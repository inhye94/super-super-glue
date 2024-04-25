import { createContext, useContext, useEffect, useState } from "react";
import {
  onUserStateChanged,
  loginByDesktop,
  loginByMobile,
  logout,
} from "../api/auth";

const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    onUserStateChanged((user) => {
      setUserInfo(user);
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        userInfo,
        userId: userInfo ? userInfo.uid : null,
        loginByDesktop,
        loginByMobile,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => useContext(AuthContext);
