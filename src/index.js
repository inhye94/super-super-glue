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
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Bookmark from "./pages/Bookmark";
import ProductTable from "./admin/ProductTable";
import ApplyForm from "./admin/ApplyForm";
import Modules from "./pages/Modules";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Products /> },
      { path: "/product/new", element: <Products /> },
      { path: "/product/:productId", element: <ProductDetail /> },
      { path: "/cart", element: <Cart /> },
      { path: "/bookmark", element: <Bookmark /> },
      { path: "/modules", element: <Modules /> },
      { path: "/admin", element: <ProductTable /> },
      { path: "/admin/regist", element: <ApplyForm /> },
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
