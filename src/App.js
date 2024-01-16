/**
 * 2024.01.16
 * dueto park
 * app 구조
 */

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

import { Link, Outlet } from "react-router-dom";

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
    <div className="App">
      <header>
        <Link to="/">홈</Link>
        <Link to="/product/asdf">상세</Link>
        <Link to="/cart">카트</Link>
        <Link to="/bookmark">북마크</Link>
      </header>

      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
