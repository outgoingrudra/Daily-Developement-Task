import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import ErrorPage from "./Pages/ErrorPage"
import Header from "./components/Header";
export default function App() {
  const Products = lazy(() => import("./Pages/Products"));
  const Contact= lazy(() => import("./Pages/Contact"));
  return (
    <div>
      <Header />
      <Suspense fallback="Loading....">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="*" element={<ErrorPage/>}/>
        </Routes>
      </Suspense>
    </div>
  );
}


