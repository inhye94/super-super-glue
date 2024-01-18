/**
 * 2024.01.16
 * dueto park
 * admin 구조
 */

import { Link, Outlet } from "react-router-dom";

function Admin() {
  return (
    <div className="Admin">
      <header>
        <Link to="/">홈</Link>
        <Link to="/admin">등록 상품 리스트</Link>
        <Link to="/admin/apply">상품 등록</Link>
      </header>

      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Admin;
