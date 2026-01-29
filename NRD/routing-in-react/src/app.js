import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { lazy , Suspense } from "react";
import Home from "./views/Home";
import About from "./views/About";
import Header from "./components/Header";
import Error from "./views/Error";


const Grocery = lazy(()=> import("./components/Grocery"))

const AppLayout = () => (
  <div>
    <Header />
    <Outlet/>
  </div>
);

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/grocery", element:(<Suspense fallback={<div>Loading...</div>}><Grocery /></Suspense>)},
    ],
    errorElement : <Error />
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter} />);
