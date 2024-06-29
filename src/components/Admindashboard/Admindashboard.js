import React from "react";
import { useOutlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import "./Admindashboard.css";

export default function Admindashboard() {
  const Outlet = useOutlet();
  return (
    <div className="container">
      <div className="menu-bar">
        <Sidebar />
      </div>
      <div className="main">{Outlet}</div>
    </div>
  );
}
