"use client";
import React from "react";
import { createContext, useContext, useState } from "react";
const Context = createContext();
export function useTheme() {
  return useContext(Context);
}
const Mycontext = ({ children }) => {
  const [zindex, setZindex] = useState(true);
  const handleZindex = () => {
    setZindex((prev) => !prev);
  };
  return (
    <Context.Provider value={{ zindex, setFunc: handleZindex }}>
      {children}
    </Context.Provider>
  );
};
export default Mycontext;
