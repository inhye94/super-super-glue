/**
 * 2024.01.16
 * dueto park
 * 라우터 설정
 */

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Bookmark from "./pages/Bookmark";
import ProductTable from "./pages/admin/ProductTable";
import RegistForm from "./pages/admin/RegistForm";
import Modules from "./pages/Modules";
import Home from "./pages/Home";
import AllProducts from "./pages/AllProducts";
import ProtectPage from "./pages/ProtectPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      { path: "/product/new", element: <AllProducts /> },
      { path: "/product/:productId", element: <ProductDetail /> },
      {
        path: "/cart",
        element: (
          <ProtectPage>
            <Cart />
          </ProtectPage>
        ),
      },
      { path: "/bookmark", element: <Bookmark /> },
      { path: "/modules", element: <Modules /> },
      {
        path: "/admin",
        element: (
          <ProtectPage requiredAdmin>
            <ProductTable />
          </ProtectPage>
        ),
      },
      {
        path: "/admin/regist",
        element: (
          <ProtectPage requiredAdmin>
            <RegistForm />
          </ProtectPage>
        ),
      },
      {
        path: "/admin/modify/:productId",
        element: (
          <ProtectPage requiredAdmin>
            <RegistForm />
          </ProtectPage>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
