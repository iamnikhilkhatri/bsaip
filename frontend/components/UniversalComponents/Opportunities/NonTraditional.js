import React from "react";
import Image from "next/image";
import "./index.scss";
import dn from "../../../Assets/svg/dn.svg";
export const NonTraditional = ({ src, p1, p1s, p2, p2s, p3, p3s }) => {
  return (
    <div className="nontraditional">
      <div className="text">
        <div className="textarea">
          <h2>
            Non -Traditional Career
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
        <Image src={src} alt="" />
      </div>
    </div>
  );
};
