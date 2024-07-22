import { useState } from "react";
import { Route, Routes, useRoutes } from "react-router-dom";

import "./App.css";
import Client from "./layout/client";
import Home from "./components/home";
import ProductPage from "./components/productPage";
import ProductDetail from "./components/productDetail";

function App() {
  const routes = useRoutes([
    {
      path: "",
      Component: Client,
      children: [
        { path: "/", element: <Home /> },
        { path: "/product", element: <ProductPage /> },
        { path: "/productDetail", element: <ProductDetail /> },
      ],
    },
  ]);
  return routes;
}
export default App;
