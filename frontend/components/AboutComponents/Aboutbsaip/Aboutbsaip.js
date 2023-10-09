import React from "react";
import "./index.scss";
import Image from "next/image";
// import history from "../../Assets/svg/bsaiphistory.svg";
import about from "../../../Assets/svg/about.svg";
export const Aboutbsaip = () => {
  return (
    <div className="about">
      <div className="text">
        <div className="textarea">
          <h2>
            About
            <br /> Anangpuria Institute Of Pharmacy
          </h2>
          <p>
            At Anangpuria Institute of Pharmacy, we believe in fostering an
            environment that nurtures creativity, innovation, and excellence. We
            are committed to providing our students with unparalleled
            opportunities for academic and professional growth, empowering them
            to become leaders in the rapidly evolving world of pharmaceutical
            sciences.
          </p>
        </div>
      </div>
      <div className="photo skeleton">
        <Image src={about} alt="" />
      </div>
    </div>
  );
};
