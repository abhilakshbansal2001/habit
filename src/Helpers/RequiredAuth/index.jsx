import React from "react";
import { useSelector } from "react-redux";
import { useLocation, Navigate } from "react-router-dom";


function RequireAuth({ children }) {
  let user = useSelector(state => state?.user.user)
  let location = useLocation();

  if (!user) {
    // Redirect them to the /login page, but save the current location they were
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
}

export default RequireAuth
