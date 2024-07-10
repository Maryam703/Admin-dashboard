import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Orders from "./components/Orders/Orders";
import Product from "./components/Product/Product";
import Login from "./components/Login/Login";
import Modal from "./components/Modal/Modal";
import ProtectedRoutesForAdmin from "./components/ProtectedRoutes/ProtectedRoutesForAdmin";
import OrderDetails from "./components/OrderDetail/OrderDetails";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/Login" element={<Login />} />
      <Route path="/" element={<App />}>
        <Route path="" element={<Navigate to="/Dashboard" />} />
        <Route
          path="Dashboard"
          element={
            <ProtectedRoutesForAdmin>
              <Dashboard />
            </ProtectedRoutesForAdmin>
          }
        />
        <Route
          path="Orders"
          element={
            <ProtectedRoutesForAdmin>
              <Orders />
            </ProtectedRoutesForAdmin>
          }
        />
        <Route
          path="Product"
          element={
            <ProtectedRoutesForAdmin>
              <Product />
            </ProtectedRoutesForAdmin>
          }
        />
        <Route path="Modal" element={<Modal />} />
        <Route path="/OrderDetails/:id" element={<OrderDetails/>} />
      </Route>
    </>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
