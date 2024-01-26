/**
 * 2024.01.16
 * app 구조
 *
 * 2024.01.18
 * app 구조 수정
 */

import { Outlet } from "react-router-dom";
import Gnb from "./components/Gnb";
import { BsCake2 } from "react-icons/bs";
import { IoCartOutline } from "react-icons/io5";
import { SiStyledcomponents } from "react-icons/si";
import { ImTable } from "react-icons/im";
import ScreenStateProvider from "./context/ScreenStateContext";

const _menu = [
  { path: "/product/new", text: "new", icon: <BsCake2 aria-hidden="true" /> },
  {
    path: "/cart",
    text: "장바구니",
    icon: <IoCartOutline aria-hidden="true" />,
  },
  {
    path: "/admin",
    text: "어드민",
    icon: <ImTable aria-hidden="true" />,
  },
  {
    path: "/modules",
    text: "모듈",
    icon: <SiStyledcomponents aria-hidden="true" />,
  },
];

function App() {
  return (
    <section className="">
      <ScreenStateProvider>
        <Gnb menu={_menu} />

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
