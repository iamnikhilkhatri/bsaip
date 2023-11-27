"use client";
import React from "react";
import { createContext, useContext, useState } from "react";
export const Context = createContext();

const Mycontext = ({ children }) => {
  const [id, setId] = useState("");
  const changeState = (e) => {
    setName(e);
  };
  return (
    <Context.Provider value={{ id, changeState }}>{children}</Context.Provider>
  );
};
export default Mycontext;
