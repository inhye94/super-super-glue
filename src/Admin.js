/**
 * 2024.01.16
 * dueto park
 * admin 구조
 */

import { Outlet } from "react-router-dom";
import Gnb from "./components/Gnb";

const _menu = [
  { path: "/admin", text: "등록 상품 리스트" },
  { path: "/admin/apply", text: "상품 등록" },
];

function Admin() {
  return (
    <div className="Admin">
      <Gnb menu={_menu} />

      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Admin;
