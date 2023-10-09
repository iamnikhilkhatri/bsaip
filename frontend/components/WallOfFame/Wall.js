import React from "react";
import Image from "next/image";
import wof1 from "../../Assets/svg/wof1.svg";
import wof2 from "../../Assets/svg/wof2.svg";
import wof3 from "../../Assets/svg/wof3.svg";
import wof4 from "../../Assets/svg/wof4.svg";
import wof5 from "../../Assets/svg/wof5.svg";
import wof6 from "../../Assets/svg/wof6.svg";
import wof7 from "../../Assets/svg/wof7.svg";
import wof8 from "../../Assets/svg/wof8.svg";
import wof9 from "../../Assets/svg/wof9.svg";
import wof10 from "../../Assets/svg/wof10.svg";
import wof11 from "../../Assets/svg/wof11.svg";
import wof12 from "../../Assets/svg/wof12.svg";
import wof13 from "../../Assets/svg/wof13.svg";
import wof14 from "../../Assets/svg/wof14.svg";
import wof15 from "../../Assets/svg/wof15.svg";
import wof from "../../Assets/svg/wof.svg";
import "./index.scss";
export const Wall = () => {
  return (
    <div className="wall">
      <div className="image-box skeleton">
        <Image
          unoptimized
          src={wof}
          width={500}
          height={500}
          alt=""
          loading="lazy"
        />
        {/* <div className="top">
          <div className="photo1 skeleton">
            <Image loading="lazy" src={wof1} alt="" />
          </div>
          <div className="photo2 skeleton">
            <Image loading="lazy" src={wof2} alt="" />
          </div>
          <div className="photo3 skeleton">
            <Image loading="lazy" src={wof3} alt="" />
          </div>
          <div className="photo2 skeleton">
            <Image loading="lazy" src={wof4} alt="" />
          </div>
          <div className="photo1 skeleton">
            <Image loading="lazy" src={wof5} alt="" />
          </div>
        </div>
        <div className="center">
          <div className="photo1">
            <Image loading="lazy" src={wof6} alt="" />
          </div>
          <div className="photo2">
            <Image loading="lazy" src={wof7} alt="" />
          </div>
          <div className="photo3">
            <Image loading="lazy" src={wof8} alt="" />
          </div>
          <div className="photo2">
            <Image loading="lazy" src={wof9} alt="" />
          </div>
          <div className="photo1">
            <Image loading="lazy" src={wof10} alt="" />
          </div>
        </div>
        <div className="btm">
          <div className="photo1">
            <Image loading="lazy" src={wof11} alt="" />
          </div>
          <div className="photo2">
            <Image loading="lazy" src={wof12} alt="" />
          </div>
          <div className="photo3">
            <Image loading="lazy" src={wof13} alt="" />
          </div>
          <div className="photo2">
            <Image loading="lazy" src={wof14} alt="" />
          </div>
          <div className="photo1">
            <Image loading="lazy" src={wof15} alt="" />
          </div>
        </div> */}
      </div>
    </div>
  );
};
