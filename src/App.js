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

function App() {
  return (
    <AuthContextProvider>
      <ScreenStateProvider>
        <section className="">
          <Gnb />

          <div>
            <div className="wrapper">
              <Outlet />
            </div>
          </div>
        </section>
      </ScreenStateProvider>
    </AuthContextProvider>
  );
}

export default App;
