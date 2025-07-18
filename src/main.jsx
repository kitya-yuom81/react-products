import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App";
import About from "./page/About";
import Error from "./layout/Error"
import MainLayout from "./layout/MainLayout";
import Login from "./auth/Login";
import "./index.css";
import ProductDetail from "./page/product/ProductDetail";
import CategoryProduct from "./page/product/CategoryProduct"

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      {/* Routes with Navbar */}
      <Route element={<MainLayout />} errorElement={<Error/>}>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/products/:id" element={<ProductDetail/>}/>
        <Route path="/products/category/:categorySlug" element={<CategoryProduct/>}/>

        
      </Route>
      <Route path="/login" element={<Login />} />

      <Route path="*" element={<Error />} />
    </Routes>
  </BrowserRouter>
); 