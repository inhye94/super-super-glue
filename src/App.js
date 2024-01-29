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
import { useEffect } from "react";
import { onUserStateChanged } from "./api/firebase";

function App() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    onUserStateChanged((user) => {
      // NOTE: admin redirect
      if (!user || !user.isAdmin) {
        pathname.startsWith("/admin") && navigate("/");
      }

      // NOTE: logout redirect
      if (!user) {
        pathname.startsWith("/cart") && navigate("/");
      }
    });
  }, [pathname, navigate]);

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
