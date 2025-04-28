/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useEffect } from "react";

export const authContext = createContext();

// function to lazily initialize the user state from local storage
function getUser() {
  const storedUser = localStorage.getItem("user");
  return storedUser ? JSON.parse(storedUser) : {};
}

// function to lazily initialize the token state from session storage
function getToken() {
  const storedToken = sessionStorage.getItem("token");
  return storedToken ? JSON.parse(storedToken) : false;
}

function AuthProvider({ children }) {
  const [user, setUser] = useState(getUser);
  const [token, setToken] = useState(getToken);

  // Whenever the user changes update local storage
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  // whenever token changes update session storage
  useEffect(() => {
    sessionStorage.setItem("token", JSON.stringify(token));
  }, [token]);

  return (
    <authContext.Provider value={{ user, token, setUser, setToken }}>
      {children}
    </authContext.Provider>
  );
}

export default AuthProvider;
