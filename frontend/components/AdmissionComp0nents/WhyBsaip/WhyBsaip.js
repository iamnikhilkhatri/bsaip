import React from "react";
import Image from "next/image";
import right from "../../../Assets/svg/whyright.svg";
import left from "../../../Assets/svg/whyleft.svg";
import "./index.scss";

export const WhyBsaip = () => {
  return (
    <div className="whyBsaip">
      <div className="main-box">
        <div className="text">
          <div className="heading">
            <p>
              Why Choose Anangpuria <br /> Institute of <span>Pharmacy</span>
            </p>
          </div>
          <div className="details">
            <p>
              Choosing the Anangpuria Institute of Pharmacy signifies a
              commitment to excellence and a dedication to shaping the future
              leaders of the pharmaceutical industry. We take pride in offering
              our students an exclusive, high-quality education that sets them
              apart from their peers and prepares them for success in their
              professional lives.
            </p>
          </div>
        </div>
        <div className="photos">
          <div className="left">
            <div className="upper">
              <div className="number">
                <p className="p2">Tailored and intentional Education</p>
              </div>
              <div className="img">
                <Image src={left} alt="" />
              </div>
            </div>

            <div className="lower">
              <div className="number">
                <p className="p2">
                  Networking Opportunities and Industry Connections
                </p>
              </div>
              <div className="img">
                <Image src={left} alt="" />
              </div>
            </div>
          </div>
          <div className="right">
            <div className="upper">
              <div className="img">
                <Image src={right} alt="" />
              </div>
              <div className="number">
                <p className="p2">Prestigious Reputation</p>
              </div>
            </div>
            <div className="lower">
              <div className="img">
                <Image src={right} alt="" />
              </div>
              <div className="number">
                <p className="p2">Comprehensive Student Support Services</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
