import React from "react";
import Image from "next/image";
import "./index.scss";
import { useState } from "react";
import img1 from "../../../Assets/svg/ourmission.svg";
import OM from "../../../Assets/svg/OM.svg";
import LB from "../../../Assets/svg/LB.svg";
import RB from "../../../Assets/svg/RB.svg";
import OV from "../../../Assets/svg/OV.svg";
export const Ourmission = () => {
  const [state, setState] = useState(true);
  return (
    <div className="ourMission" id="vissionandmission">
      <div className="photo skeleton">
        <Image src={img1} alt="" />
      </div>
      {state ? (
        <div className="text">
          <div className="top">
            <div className="left">
              <h1>Our Mission</h1>
              <p>
                Our mission is to provide our students with a comprehensive and
                industry-relevant education, facilitated by a dedicated and
                experienced faculty. We strive to create an inclusive learning
                environment that encourages collaboration, critical thinking,
                and problem-solving while promoting a culture of research,
                innovation, and ethical practice.
              </p>
            </div>
            <div className="right">
              <div className="photo">
                <Image src={OM} alt="" />
              </div>
            </div>
          </div>
          <div className="btm">
            <div
              style={{ cursor: "pointer" }}
              className="photo"
              onClick={() => {
                setState(!state);
              }}
            >
              <Image src={LB} alt="" />
            </div>
            <div
              style={{ cursor: "pointer" }}
              className="photo"
              onClick={() => {
                setState(!state);
              }}
            >
              <Image src={RB} alt="" />
            </div>
          </div>
        </div>
      ) : (
        <div className="text">
          <div className="top">
            <div className="left">
              <h1>Our Vision</h1>
              <p>
                Our vision is to be recognized as a premier institution for
                pharmaceutical education, research, and innovation that
                cultivates skilled professionals who contribute positively to
                the healthcare sector and society at large
              </p>
            </div>
            <div className="right">
              <div className="photo2">
                <Image src={OV} alt="" />
              </div>
            </div>
          </div>
          <div className="btm">
            <div
              style={{ cursor: "pointer" }}
              className="photo"
              onClick={() => {
                setState(!state);
              }}
            >
              <Image src={LB} alt="" />
            </div>
            <div
              style={{ cursor: "pointer" }}
              className="photo"
              onClick={() => {
                setState(!state);
              }}
            >
              <Image src={RB} alt="" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
