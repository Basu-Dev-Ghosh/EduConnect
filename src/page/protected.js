import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ auth, children }) => {
  if (!auth) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default ProtectedRoute;
