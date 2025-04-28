/* eslint-disable react/prop-types */
//import { useEffect } from "react"
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

function ProtectedRoute({ children }) {
  const { pathname } = useLocation();
  const { token } = useAuth();

  return token ? (
    children
  ) : (
    <Navigate
      to="/login"
      state={{ message: "You must login first", path: pathname }}
      replace
    />
  );
}

export default ProtectedRoute;
