/**
 * 2024.01.16
 * app 구조
 *
 * 2024.01.18
 * app 구조 수정
 */

import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Gnb from "./components/Gnb";
import ScreenStateProvider from "./context/ScreenStateContext";

function App() {
  return (
    <section className="">
      <ScreenStateProvider>
        <Gnb />

        <div>
          <div className="wrapper">
            <Outlet />
          </div>
        </div>
      </ScreenStateProvider>
    </section>
  );
}

export default App;
