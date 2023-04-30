import { createContext, useContext, useState, useEffect } from "react";

export const AppContext = createContext();

const getInitialDarkMode = () => {
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme:dark)"
  ).matches;
  console.log(prefersDarkMode);
  return prefersDarkMode
};

export const AppProvider = ({ children }) => {
  useEffect(() => {
    getInitialDarkMode();
  }, []);
  const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode());
  const [search, setSearch] = useState("dog");

  const toggleDarkTheme = () => {
    const drakTheme = !isDarkTheme;
    setIsDarkTheme(drakTheme);
    const body = document.querySelector("body");
    body.classList.toggle("darkTheme");
  };

  

  return (
    <AppContext.Provider
      value={{ isDarkTheme, toggleDarkTheme, setSearch, search }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
