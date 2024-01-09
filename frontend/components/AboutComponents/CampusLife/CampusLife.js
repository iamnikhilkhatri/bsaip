import React from "react";
import "./index.scss";
export const CampusLife = (props) => {
  return (
    <div className="campus">
      <div className="heading">
        <h1>
          {props.h1} <br /> {props.h2} <br />
          {props.h3}
        </h1>
      </div>
      <div className="sub-heading">
        <p className="p1">
        {props.p1}
        </p>
        <p className="p2">
         {props.p2}
        </p>
      </div>
    </div>
  );
};
