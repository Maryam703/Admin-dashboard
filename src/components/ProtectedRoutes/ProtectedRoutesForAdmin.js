import React from "react";
import { useNavigate } from "react-router-dom";


function ProtectedRoutesForAdmin({ children }) {
  const navigate = useNavigate();

  let user = JSON.parse(localStorage.getItem("users"))
  if (user.role === "admin") {
    return children ;
  } else{
    return navigate("/Login")
  }
}

export default ProtectedRoutesForAdmin;
