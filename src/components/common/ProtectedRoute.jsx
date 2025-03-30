/* eslint-disable react/prop-types */
//import { useEffect } from "react"
import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

function ProtectedRoute({ children }) {
  const { token } = useAuth();

  return token ? (
    children
  ) : (
    <Navigate to="/login" state={{ message: "You must login first" }} replace />
  );
}

export default ProtectedRoute;
