import React from "react";
import Image from "next/image";
import "./index.scss";
import img1 from "../../../Assets/svg/campusright.svg";
import img2 from "../../../Assets/svg/clt.svg";
import img3 from "../../../Assets/svg/clbr.svg";
import img4 from "../../../Assets/svg/clbl.svg";
export const LifeAt = () => {
  return (
    <div className="lifeat">
      <div className="left">
        <div className="top">
          <div className="internal-div">
            <p className="heading">A Campus to Fall in love with</p>
            <p className="details">
              At Anangpuria Institute of Pharmacy, our state-of-the-art
              industry-level labs set us apart from other institutions in the
              vicinity.
            </p>
            <button>LIFE AT BSAIP</button>
          </div>
        </div>
        <div className="btm">
          <div className="single">
            <Image loading="lazy" src={img2} alt="" />
          </div>
          <div className="double">
            <Image loading="lazy" src={img3} alt="" />{" "}
            <Image src={img4} alt="" />
          </div>
        </div>
      </div>
      <div className="right">
        <Image loading="lazy" src={img1} alt="" />
      </div>
    </div>
  );
};
