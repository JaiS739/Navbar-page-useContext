import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthorised, setIsAuthorised] = useState(false);

  const login = (username, password) => {
    if (username && password) {
      setIsAuthorised(true);
    } else {
      setIsAuthorised(false);
    }
  };

  const logout = (username, password) => {
    setIsAuthorised(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthorised, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
