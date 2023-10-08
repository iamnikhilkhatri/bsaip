import React from "react";
import "./index.scss";
import Image from "next/image";
import history from "../../../Assets/svg/history.svg";
import medalist from "../../../Assets/svg/medalist.svg";
import merits from "../../../Assets/svg/merits.svg";
import enrolled from "../../../Assets/svg/enrolled.svg";
export const Facts = () => {
  return (
    <div className="facts">
      <div className="main-box">
        <div className="text">
          <div className="heading">
            <p>Most Interesting Facts</p>
          </div>
          <div className="details">
            <p>
              Reference site about Lorem Ipsum, giving information on its
              origins, as well as a random Lipsum generator.
            </p>
          </div>
        </div>
        <div className="photos">
          <div className="left">
            <div className="upper">
              <div className="number">
                <p className="p1">15</p>
                <p className="p2">Years of history</p>
              </div>
              <div className="img">
                <Image loading="lazy" src={history} alt="" />
              </div>
            </div>

            <div className="lower">
              <div className="number">
                <p className="p1">1997</p>
                <p className="p2">student enrolled</p>
              </div>
              <div className="img">
                <Image loading="lazy" src={enrolled} alt="" />
              </div>
            </div>
          </div>
          <div className="right">
            <div className="upper">
              <div className="img">
                <Image loading="lazy" src={medalist} alt="" />
              </div>
              <div className="number">
                <p className="p1">8</p>
                <p className="p2">gold medalist</p>
              </div>
            </div>
            <div className="lower">
              <div className="img">
                <Image loading="lazy" src={merits} alt="" />
              </div>
              <div className="number">
                <p className="p1">229</p>
                <p className="p2">university merits</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
