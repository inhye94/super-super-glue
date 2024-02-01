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
import ContentWrapper from "./components/ContentWrapper";

function App() {
  return (
    <AuthContextProvider>
      <ScreenStateProvider>
        <section className="">
          <Gnb />

          <ContentWrapper>
            <Outlet />
          </ContentWrapper>
        </section>
      </ScreenStateProvider>
    </AuthContextProvider>
  );
}

export default App;
