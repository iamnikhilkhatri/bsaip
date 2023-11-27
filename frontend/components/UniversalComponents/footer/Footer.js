"use client";
import React from "react";
import "./index.scss";
import { useContext } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import facebook from "../../../Assets/svg/btmfb.svg";
import insta from "../../../Assets/svg/btminsta.svg";
import logo from "../../../Assets/svg/anag.svg";
// import { i18n } from "next-i18next";
import linkdin from "../../../Assets/svg/btmlinkdin.svg";
import tweet from "../../../Assets/svg/btmtweet.svg";
// import { Context } from "../../../app/context/Mycontext";
import { useTransform } from "framer-motion";
// import { i18n } from "@/next-i18next.config";
import { changeLanguage } from "i18next";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="content-box">
        <div className="footer-top">
          <div className="heading">
            <p>
              At Anangpuria Institute of Pharmacy, we believe in fostering an
              environment that nurtures creativity, innovation, and excellence.
            </p>
          </div>
        </div>
        <div className="footer-mid">
          <div className="quick-links">
            <h2>QUICK LINKS</h2>
            <div className="types">
              <div className="type-1">
                <ul>
                  <li>PCI</li>
                  <li>AICTC</li>
                  <li>DTE</li>
                  <li>HSBTE</li>
                  <li>HSCS</li>
                </ul>
              </div>
              <div className="type-2">
                <ul>
                  <li>About Us</li>
                  <li>Admissions</li>
                  <li>Placements</li>
                  <li>Students Life</li>
                  <li>Academics</li>
                </ul>
              </div>
              <div className="type-3">
                <ul>
                  <li>SIF Report of PCI</li>
                  <li>Student Results</li>
                  <li>Internal Committees</li>
                  <li>Education Loans</li>
                  <li>Pt B D Sharma University</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="address">
            <h2>Campus Address</h2>
            <p>
              B. S. Anangpuria Educational Institutes,Alampur, Ballabgarh-Sohna
              Major District Road,Faridabad-121004, Delhi-NCR, INDIA.
            </p>
            <button>Find Us On Map</button>
          </div>
          <div className="subscribe">
            <h2>Subscribe</h2>
            <p>abc@gmail.com</p>
            <hr />
            <button>SUBSCRIBE</button>
          </div>
        </div>
        <div className="footer-btm">
          <div className="rights">© BSAIP. All Rights Reserved.</div>
          <div className="name">
            <Image loading="lazy" src={logo} alt="logo"></Image>
          </div>

          <div className="social-media">
            <div className="logo">
              <Image loading="lazy" src={facebook} alt="fb"></Image>
            </div>
            <div className="logo">
              <Image loading="lazy" src={insta} alt="insta"></Image>
            </div>
            <div className="logo">
              <Image loading="lazy" src={linkdin} alt="linkdin"></Image>
            </div>
            <div className="logo">
              <Image loading="lazy" src={tweet} alt="tweet"></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
