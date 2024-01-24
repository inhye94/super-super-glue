/**
 * 2024.01.16
 * app 구조
 *
 * 2024.01.18
 * app 구조 수정
 */

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

import { Outlet } from "react-router-dom";
import Gnb from "./components/Gnb";
import { BsCake2 } from "react-icons/bs";
import { IoCartOutline } from "react-icons/io5";
import { SiStyledcomponents } from "react-icons/si";
import { ImTable } from "react-icons/im";

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
      <Gnb menu={_menu} />

      <div>
        <div className="wrapper">
          <Outlet />
        </div>
      </div>
    </section>
  );
}

export default App;
