import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRouteAdmin = ({ auth, children }) => {
  if (!auth) {
    return <Navigate to="/admin" replace />;
  }
  return children;
};

export default ProtectedRouteAdmin;
