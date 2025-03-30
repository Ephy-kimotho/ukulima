import { useContext } from "react";
import { authContext } from "../Providers/AuthProvider";

function useAuth() {
  return useContext(authContext);
}

export default useAuth;
