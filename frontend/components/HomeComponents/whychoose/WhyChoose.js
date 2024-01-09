import React from "react";
import "./index.scss";
import Image from "next/image";
import why from "../../../Assets/svg/why.png";
// import why2 from "../../../Assets/images/why.png";
import point from "../../../Assets/svg/point.svg";
export const WhyChoose = () => {
  return (
    <div className="whychoose">
      <div className="photo skeleton">
        <Image loading="lazy" src={why} alt=""></Image>
      </div>
      <div className="text">
        <div className="top">
          <div className="heading">
            <p>Why Choose Anangpuria Institute of Pharmacy</p>
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
          <div className="points">
            <div className="each-point ">
              <Image loading="lazy" src={point} alt="point" />
              <p>Tailored and intentional Education</p>
            </div>
            <div className="each-point">
              <Image loading="lazy" src={point} alt="point" />
              <p>Comprehensive Student Support Services</p>
            </div>
            <div className="each-point">
              <Image loading="lazy" src={point} alt="point" />
              <p>Networking Opportunities and Industry Connections:</p>
            </div>
            <div className="each-point">
              <Image loading="lazy" src={point} alt="point" />
              <p>Prestigious Reputation</p>
            </div>
          </div>
        </div>
        <div className="btm">
          <div className="heading">
            <p>Ensuring excellence and quality education</p>
          </div>
          <div className="details">
            <p>
              At Anangpuria Institute of Pharmacy, we place a strong emphasis on
              maintaining an exclusive and intimate learning environment. By
              limiting our student intake, we can ensure that each student
              receives the personalised attention and guidance they deserve.This
              approach enables us to focus on delivering a high-quality
              education that empowers our students to excel academically and
              stand out in the competitive job market.
            </p>
          </div>
          <div className="points">
            <div className="each-point">
              <Image loading="lazy" src={point} alt="point" />
              <p>Industry-Level Labs</p>
            </div>
            <div className="each-point">
              <Image loading="lazy" src={point} alt="point" />
              <p>Problem-Based Learning Approach:</p>
            </div>
            <div className="each-point">
              <Image loading="lazy" src={point} alt="point" />{" "}
              <p>Experienced Faculty</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
