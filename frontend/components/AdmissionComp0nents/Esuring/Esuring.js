import React from "react";
import Image from "next/image";
import "./index.scss";
import esuring from "../../../Assets/svg/esuring.svg";
import ponit from "../../../Assets/svg/point.svg";
export const Esuring = () => {
  return (
    <div className="esuring">
      <div className="photo">
        <Image src={esuring} alt="" />
      </div>
      <div className="text">
        <div className="heading">
          <h2>
            Ensuring excellence and
            <br /> quality education
          </h2>
        </div>
        <div className="details">
          <p>
            At Anangpuria Institute of Pharmacy, we place a strong emphasis on
            maintaining an exclusive and intimate learning environment. By
            limiting our student intake, we can ensure that each student
            receives the personalised attention and guidance they deserve.This
            approach enables us to focus on delivering a high-quality education
            that empowers our students to excel academically and stand out in
            the competitive job market.
          </p>
        </div>
        <div className="points">
          <div className="point">
            <div className="photo">
              <Image src={ponit} alt="" />
            </div>
            <p>Industry-Level Labs</p>
          </div>
          <div className="point">
            <div className="photo">
              <Image src={ponit} alt="" />
            </div>
            <p>Problem-Based Learning Approach</p>
          </div>
          <div className="point">
            <div className="photo">
              <Image src={ponit} alt="" />
            </div>
            <p>Experienced Faculty</p>
          </div>
        </div>
      </div>
    </div>
  );
};
