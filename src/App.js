/**
 * 2024.01.16
 * app 구조
 *
 * 2024.01.18
 * app 구조 수정
 */

import { Outlet } from "react-router-dom";
import Gnb from "./components/Gnb";
import ScreenStateProvider from "./context/ScreenStateContext";
import AuthContextProvider from "./context/AuthContext";
import LayoutWrapper from "./components/LayoutWrapper";

function App() {
  return (
    <AuthContextProvider>
      <ScreenStateProvider>
        <section className="">
          <Gnb />

          <LayoutWrapper extraStyle="mt-[16px] mb-[84px] md:mt-[36px]">
            <Outlet />
          </LayoutWrapper>
        </section>
      </ScreenStateProvider>
    </AuthContextProvider>
  );
}

export default App;
