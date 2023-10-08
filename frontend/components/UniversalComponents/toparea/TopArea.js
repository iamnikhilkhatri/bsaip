import React from "react";
import "./index.scss";
import { Navbar } from "../navbar/Navbar";
export const TopArea = ({ pagename, moredet }) => {
  return (
    <div className="toparea">
      <div className="photo">
        <div className="menu">
          <Navbar />
        </div>
        <div className="text">
          <h2>{pagename}</h2>
          <p>{moredet}</p>
        </div>
      </div>
      <div className="menu"></div>
    </div>
  );
};
