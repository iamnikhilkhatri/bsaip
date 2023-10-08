"use client";
import React from "react";
import "./index.scss";
import { useState } from "react";
import campus from "../../../Assets/svg/360.svg";
import vision from "../../../Assets/svg/vision.svg";
import asmission from "../../../Assets/svg/admission.svg";
import register from "../../../Assets/svg/register.svg";
import Career from "../../../Assets/svg/career.svg";
import { useContext } from "react";
import { useTheme } from "../../../context/Mycontext";
import ourComunity from "../../../Assets/svg/ourcomunity.svg";
import globalCampus from "../../../Assets/svg/globalcampus.svg";
import Image from "next/image";

import { Navbar } from "../../UniversalComponents/navbar/Navbar";
import { Language } from "../../../components/UniversalComponents/languageAndContact/Language";
export const Header = () => {
  return (
    <div className="header-box">
      <div className="header">
        <div className="content-box">
          <div className="content">
            <div className="nav">
              <Navbar />
            </div>
            <div className="title">
              <h1>
                Find Your Career <br />
                Opportunities with
                <br /> Anangpuria
              </h1>
            </div>
            <div className="details">
              <div className="announcements">
                <p>NEWS & ANNOUNCEMENTS</p>
                <h5>01-03-2023</h5>
                <h6>
                  Report on webinar on Career Guidance, GPAT exam Presentation
                  <br></br> and Development of soft skills dated 28th february
                  2023
                </h6>
              </div>
              <div className="details-btn">
                <div className="btns">
                  <button>EXPLORE</button>
                  <button>APPLY NOW</button>
                  <button
                    onClick={() => {
                      console.log("clicked");
                    }}
                    className="visit"
                  >
                    VISIT US
                  </button>
                </div>
              </div>
              <div className="campus-360">
                <div>
                  <Image loading="lazy" alt="img" src={campus}></Image>
                </div>
              </div>
            </div>
          </div>

          <div className="header-btm">
            <div className="btm-left">
              <div className="our-comunity">
                <div className="text">
                  <h3>
                    Our <br />
                    Community
                  </h3>
                  <p>Know About Our Faculty</p>
                </div>
                <div className="photo">
                  <Image loading="lazy" src={ourComunity} alt="img"></Image>
                </div>
              </div>
              <div className="global-campus">
                <div className="text">
                  <h3>
                    Global <br></br>Campus
                  </h3>
                  <p>Facilities & Infrastructure</p>
                </div>
                <div className="photo">
                  <Image loading="lazy" src={globalCampus} alt=""></Image>
                </div>
              </div>
            </div>
            <div className="btm-right">
              <div className="main-box">
                <div className="photo">
                  <Image loading="lazy" src={asmission} alt="img"></Image>
                </div>

                <h2>Admission & Records</h2>
              </div>
              <div className="main-box">
                <div className="photo">
                  <Image loading="lazy" src={register} alt="img"></Image>
                </div>

                <h2>register for classes</h2>
              </div>
              <div className="main-box">
                <div className="photo">
                  <Image loading="lazy" src={vision} alt="img"></Image>
                </div>

                <h2>Vision & Mission</h2>
              </div>
              <div className="main-box last">
                <div className="photo">
                  <Image loading="lazy" src={Career} alt="img"></Image>
                </div>

                <h2>Career Opportunities</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="phone">
        <div className="photo-box">
          <Navbar />
          <div className="text">
            <h2 className={"index"}>
              Find Your Career
              <br /> Opportunities with <br /> Anangpuria
            </h2>
            <div className="news">
              <p className={"heading"}>NEWS & ANNOUNCEMENTS</p>
              <p className={"date"}>01-03-2023</p>
              <p className={"details"}>
                Report on webinar on Career Guidance, GPAT exam Presentation and
                Development of soft skills dated 28th february 2023
              </p>
            </div>
            <div className={"btns"} style={{ position: "relative" }}>
              <button className="green">EXPLORE</button>
              <button className="green">APPLY NOW</button>
              <button className="yellow">VISIT US</button>
            </div>

            <div className="campus-360">
              <div>
                <Image loading="lazy" alt="img" src={campus}></Image>
              </div>
            </div>
          </div>
        </div>
        <div className="header-btm">
          <div className="btm-left">
            <div className="our-comunity">
              <div className="text">
                <h3>
                  Our <br />
                  Community
                </h3>
                <p>Know About Our Faculty</p>
              </div>
              <div className="photo">
                <Image src={ourComunity} alt="img"></Image>
              </div>
            </div>
            <div className="global-campus">
              <div className="text">
                <h3>
                  Global <br></br>Campus
                </h3>
                <p>Facilities & Infrastructure</p>
              </div>
              <div className="photo">
                <Image src={globalCampus} alt=""></Image>
              </div>
            </div>
          </div>
          <div className="btm-right">
            <div className="main-box">
              <div className="photo">
                <Image src={asmission} alt="img"></Image>
              </div>

              <h2>Admission & Records</h2>
            </div>
            <div className="main-box">
              <div className="photo">
                <Image src={register} alt="img"></Image>
              </div>

              <h2>register for classes</h2>
            </div>
            <div className="main-box">
              <div className="photo">
                <Image src={vision} alt="img"></Image>
              </div>

              <h2>Vision & Mission</h2>
            </div>
            <div className="main-box last">
              <div className="photo">
                <Image src={Career} alt="img"></Image>
              </div>

              <h2>Career Opportunities</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
