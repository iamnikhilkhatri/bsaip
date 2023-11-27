import React from "react";
import "./index.scss";
import bnf1 from "../../../Assets/svg/bnf1.svg";
import bnf2 from "../../../Assets/svg/bnf2.svg";
import Image from "next/image";
import bnf3 from "../../../Assets/svg/bnf3.svg";
import bnf4 from "../../../Assets/svg/bnf4.svg";
export const Benifits = ({ h, p, p1, p2, p3, p4, dp }) => {
  return (
    <div className="benefits">
      <div className="content-box">
        <div className="heading">
          <h2>{h}Benefits Of Pursuing B.Pharm</h2>
          <p>
            {p}
            Choosing to pursue a B.Pharm degree at Anangpuria Institute of
            Pharmacy comes with numerous benefits
          </p>
        </div>
        <div className="points">
          <div className="point">
            <div className="photo">
              <Image src={bnf1} alt="" />
            </div>
            <h2>
              Comprehensive <br />
              Curriculum
            </h2>
            <p>
              {p1}
              Our B.Pharm program covers a broad spectrum of topics, providing
              students with an in-depth understanding of the pharmaceutical
              sciences.
            </p>
          </div>
          <div className="point">
            <div className="photo">
              <Image src={bnf2} alt="" />
            </div>
            <h2>
              Skilled <br />
              Faculty
            </h2>
            <p>
              {p2}
              Our experienced faculty members are committed to delivering
              high-quality education and fostering an environment that
              encourages learning and growth.
            </p>
          </div>
          <div className="point">
            <div className="photo">
              <Image src={bnf3} alt="" />
            </div>
            <h2>
              Modern <br />
              Infrastructure
            </h2>
            <p>
              {p3}
              Equipped with advanced laboratories and learning facilities, our
              Institute ensures that students have access to the resources they
              need to excel in their studies.
            </p>
          </div>
          <div className="point">
            <div className="photo">
              <Image src={bnf4} alt="" />
            </div>
            <h2>
              Strong
              <br /> Industry Ties
            </h2>
            <p>
              {p4}
              We maintain close connections with the pharmaceutical industry,
              enabling us to offer students valuable internship and job
              opportunities
            </p>
          </div>
        </div>
        <div className="details">
          <p>
            {dp}
            Affiliations and Approvals: As an Institute approved by AICTE, PCI,
            and affiliated to Pt. B. D. Sharma University of Health Sciences, a
            B.Pharm degree from Anangpuria Institute of Pharmacy is widely
            recognized and respected.
          </p>
        </div>
      </div>
    </div>
  );
};
