"use client";
import React from "react";
import "./index.scss";
import img from "../../../Assets/svg/facebook.svg";
import img1 from "../../../Assets/svg/twitter.svg";
import { useEffect } from "react";
import img2 from "../../../Assets/svg/linkedin.svg";
import Image from "next/image";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
// import { useState } from "react";
import img3 from "../../../Assets/svg/mail.svg";
import img4 from "../../../Assets/svg/india.svg";
import img5 from "../../../Assets/svg/Vector.svg";
import img6 from "../../../Assets/svg/rightmail.svg";
import img7 from "../../../Assets/svg/phone.svg";
export const Language = () => {
  function loadGoogleTranslate() {
    new google.translate.TranslateElement(
      { pageLanguage: "en", includedLanguages: "en,fr,de,it" },
      "google_element"
    );
  }
  useEffect(() => {
    loadGoogleTranslate();
  }, []);
  // const [lang, setLang] = useState(true);
  return (
    <div className="header-language">
      <div className="header-top">
        <div className="header-top-left">
          <div className="social-media">
            <ul>
              <li className="fb">
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

          <div id="google_element"></div>
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
