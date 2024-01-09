import React from "react";
import Image from "next/image";
import "./index.scss";
import about from "../../../Assets/svg/traditional.svg";
export const Traditional = ({ srct, p1, p1s, p2, p2s, p3, p3s }) => {
  return (
    <div className="traditional">
      <div className="text">
        <div className="textarea">
          <h2>
            Traditional Career
            <br /> opportunities
          </h2>
          <p>
            <strong>{p1s}</strong> {p1}
          </p>
          <p>
            <strong>{p2s}</strong> {p2}
          </p>
          <p>
            <strong>{p3s}</strong> {p3}
          </p>
        </div>
      </div>
      <div className="photo skeleton">
        <Image src={srct} alt="" />
      </div>
    </div>
  );
};
