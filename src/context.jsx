import { createContext, useContext, useEffect, useState } from "react";
const AppContext = createContext();
const getInitialDarkMode = () => {
  const preferDarkMode = window.matchMedia(
    "(prefers-color-scheme:dark)"
  ).matches;
  const storedTheme = localStorage.getItem("darkTheme") === "true";
  return storedTheme || preferDarkMode;
};
export const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode());
  const [searchTerm, setSearchTerm] = useState("cat");
  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    // moved some codes to select the body to apply the them

    localStorage.setItem("darkTheme", newDarkTheme);
  };
  useEffect(() => {
    document.body.classList.toggle("darkTheme", isDarkTheme);
  }, [isDarkTheme]);

  return (
    <AppContext.Provider
      value={{ isDarkTheme, toggleDarkTheme, searchTerm, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
