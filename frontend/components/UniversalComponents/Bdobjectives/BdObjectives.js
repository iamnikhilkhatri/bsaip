import React from "react";
import "./index.scss";
export const BdpObjectives = ({ h1, h2, p1, p2, p3, p4, dp }) => {
  return (
    <div className="bdobjectives">
      <div className="content-box">
        <div className="heading">
          <h1>
            {h1} <br />
            {h2}
          </h1>
        </div>
        <div className="points">
          <div className="point">
            <p>{p1}</p>
          </div>
          <div className="point">
            <p>{p2}</p>
          </div>
          <div className="point">
            <p>{p3}</p>
          </div>
          <div className="point">
            <p>{p4}</p>
          </div>
        </div>
        <div className="details">
          <p>{dp}</p>
        </div>
      </div>
    </div>
  );
};
