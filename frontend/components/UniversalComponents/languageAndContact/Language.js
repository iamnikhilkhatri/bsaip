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
    try {
      new google.translate.TranslateElement(
        { pageLanguage: "en", includedLanguages: "en,fr,de,it" },
        "google_element"
      );
    } catch (err) {
      console.log(err);
    }
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
                <a href="https://www.facebook.com/anangpuria/" target="_blank">
                  <Image src={img} loading="lazy" alt="img"></Image>{" "}
                </a>
              </li>
              <li>
                <Image src={img1} loading="lazy" alt="img"></Image>
              </li>
              <li>
                <a href="https://twitter.com/anangpurias" target="_blank">
                  <Image src={img2} loading="lazy" alt="img"></Image>
                </a>
              </li>
              <li>
                <a
                  href="mailto:bsaei@anangpuria.com"
                  style={{ textDecoration: "none" }}
                >
                  <Image src={img3} loading="lazy" alt="img"></Image>{" "}
                </a>
              </li>
            </ul>
          </div>

          <div id="google_element"></div>
        </div>
        <div className="header-top-right">
          <div className="mail">
            <Image src={img6} loading="lazy" alt=""></Image>
            <a
              href="mailto:bsaei@anangpuria.com"
              style={{ textDecoration: "none" }}
            >
              {" "}
              <p>bsaei@anangpuria.com</p>{" "}
            </a>
          </div>
          <div className="phone">
            <Image src={img7} loading="lazy" alt=""></Image>
            <a href={`tel:0129-2206750-53`}>0129-2206750-53</a>
          </div>
        </div>
      </div>
    </div>
  );
};
