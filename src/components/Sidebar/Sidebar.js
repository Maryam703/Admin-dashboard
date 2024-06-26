import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">
        SAPPHIRE
      </div>
      <div className="sidebar-options">
        <Link to="/" className="options">
          <i className="icon fa-solid fa-clipboard"></i>
          <p className="para">DashBoard</p>
        </Link>
        <Link to="/Orders" className="options">
          <i className="icon fa-solid fa-cart-shopping"></i>
          <p className="para">Orders</p>
        </Link>
        <Link to="#" className="options">
          <i className="icon fa-solid fa-box"></i>
          <p className="para">Products</p>
        </Link>
        <Link to="#" className="options">
          <i className="icon fa-solid fa-user"></i>
          <p className="para">Customer</p>
        </Link>
        <Link to="#" className="options">
          <i className="icon fa-solid fa-envelope"></i>
          <p className="para">Message</p>
        </Link>
        <Link to="#" className="options">
          <i className="icon fa-solid fa-gear"></i>
          <p className="para">Setting</p>
        </Link>
      </div>
    </div>
  );
}
