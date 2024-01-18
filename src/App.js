/**
 * 2024.01.16
 * app 구조
 *
 * 2024.01.18
 * app 구조 수정
 */

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

import { Link, Outlet } from "react-router-dom";
import Logo from "./components/Logo";

// const firebaseConfig = {
//   apiKey: "AIzaSyAJbFKyxuwxiIuAUsZDUCXoysLT09iDZXE",
//   authDomain: "super-super-glue.firebaseapp.com",
//   databaseURL:
//     "https://super-super-glue-default-rtdb.asia-southeast1.firebasedatabase.app",
//   projectId: "super-super-glue",
//   storageBucket: "super-super-glue.appspot.com",
//   messagingSenderId: "267734854567",
//   appId: "1:267734854567:web:4e76ddc2ca3c2c7d226482",
//   measurementId: "G-81N7SNK2MB",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

function App() {
  return (
    <section className="">
      <header>
        <div className="wrapper">
          <Logo />
          <Link to="/product/new">새상품</Link>
          <Link to="/cart">카트</Link>
          <Link to="/admin">어드민</Link>
          <Link to="/modules">모듈</Link>
          <button type="button">로그인</button>
        </div>
      </header>

      <div>
        <div className="wrapper">
          <Outlet />
        </div>
      </div>
    </section>
  );
}

export default App;
