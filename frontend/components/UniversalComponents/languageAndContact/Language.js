import React from "react";
import "./index.scss";
import img from "../../../Assets/svg/facebook.svg";
import img1 from "../../../Assets/svg/twitter.svg";
import img2 from "../../../Assets/svg/linkedin.svg";
import Image from "next/image";
import img3 from "../../../Assets/svg/mail.svg";
import img4 from "../../../Assets/svg/india.svg";
import img5 from "../../../Assets/svg/vector.svg";
import img6 from "../../../Assets/svg/rightmail.svg";
import img7 from "../../../Assets/svg/phone.svg";
export const Language = () => {
  return (
    <div className="header-language">
      <div className="header-top">
        <div className="header-top-left">
          <div className="social-media">
            <ul>
              <li>
                <Image src={img} loading="lazy" alt="img"></Image>
              </li>
              <li>
                <Image src={img1} loading="lazy" alt="img"></Image>
              </li>
              <li>
                <Image src={img2} loading="lazy" alt="img"></Image>
              </li>
              <li>
                <Image src={img3} loading="lazy" alt="img"></Image>
              </li>
            </ul>
          </div>
          <div className="language">
            <div>
              <Image src={img4} loading="lazy" alt=""></Image>
              <p>English</p>
              <Image src={img5} loading="lazy" alt=""></Image>
            </div>
          </div>
        </div>
        <div className="header-top-right">
          <div className="mail">
            <Image src={img6} loading="lazy" alt=""></Image>
            <p> bsaei@anangpuria.com</p>
          </div>
          <div className="phone">
            <Image src={img7} loading="lazy" alt=""></Image>
            <p> 0129-2206750-53</p>
          </div>
        </div>
      </div>
    </div>
  );
};
