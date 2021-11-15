import React, { useState, useContext, useLayoutEffect, useRef } from "react";
import { useCallback } from "react";
import { navs } from "./data";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const toggleSubmenu = () => {
    setIsSubmenuOpen(!isSubmenuOpen);
  };

  const container = useRef(0);
  const scrollHeight = useCallback(() => {
    // let body = container.current.style;
    // console.log(body);
    // let windowSize = window.innerWidth;
    // if (windowSize <= 991) {
    //   body.paddingBottom = "0px";
    // }
    // if (windowSize > 991) {
    //   body.paddingBottom = `400px`;
    // }
  }, []);

  useLayoutEffect(() => {
    window.addEventListener("resize", scrollHeight);
    scrollHeight();
    return () => window.removeEventListener("resize", scrollHeight);
  });

  return (
    <AppContext.Provider
      value={{
        navs,
        openSidebar,
        closeSidebar,
        isSidebarOpen,
        toggleSubmenu,
        isSubmenuOpen,
        setIsSidebarOpen,
        scrollHeight,
        container,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
