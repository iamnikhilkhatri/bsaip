"use client";
import React from "react";
import "./index.scss";

import { useTypewriter } from "react-simple-typewriter";
import campus from "../../../Assets/svg/360.svg";
import vision from "../../../Assets/svg/vission.svg";
import asmission from "../../../Assets/svg/admission.svg";
import register from "../../../Assets/svg/register.svg";
import Career from "../../../Assets/svg/career.svg";
import { useContext } from "react";
import { Typewriter } from "react-simple-typewriter";
import { useRouter } from "next/navigation";
// import { useTheme } from "..../../../app/context/Mycontext";
import ourComunity from "../../../Assets/svg/ourcomunity.svg";
import globalCampus from "../../../Assets/svg/globalcampus.svg";
import Image from "next/image";
import { useState } from "react";
import { Navbar } from "../../UniversalComponents/navbar/Navbar";
import { Language } from "../../../components/UniversalComponents/languageAndContact/Language";
export const Header = () => {
  const router = useRouter();
  const redirectTo = (path) => {
    router.push(path);
  };

  const [text] = useTypewriter({
    words: ["Hello", "From", "Typewriter", "Hook!"],
    loop: 0,
  });
  const [anim1, setAnim1] = useState(false);
  const [anim2, setAnim2] = useState(false);
  const [anim3, setAnim3] = useState(false);
  return (
    <div className="header-box">
      <div className="header">
        <div className="content-box">
          <div className="content">
            <div className="nav">
              <Navbar />
            </div>
            <div className="title">
              {/* <h1>
                Find Your Career <br />  with
                <br /> Anangpuria
              </h1> */}
              <h1>
                {/* Style will be inherited from the parent element */}
                <Typewriter
                  words={["Find Your Career"]}
                  loop={1}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                  onLoopDone={() => {
                    setAnim1(true);
                  }}
                />
                <br></br>
                {anim1 && (
                  <Typewriter
                    words={["Opportunities"]}
                    loop={1}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                    onLoopDone={() => {
                      setAnim2(true);
                    }}
                  />
                )}
                <br />
                {anim2 && (
                  <Typewriter
                    words={["with Anangpuria"]}
                    loop={1}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                )}
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
                  <button
                    onClick={() => {
                      redirectTo("/register");
                    }}
                  >
                    EXPLORE
                  </button>
                  <button
                    onClick={() => {
                      redirectTo("/register");
                    }}
                  >
                    APPLY NOW
                  </button>
                  <button
                    onClick={() => {
                      redirectTo("/about");
                    }}
                    className="visit"
                  >
                    VISIT US
                  </button>
                </div>
              </div>
              {/* /about   /about/mediaCoverageAndTestimonials  */}
              <div className="campus-360">
                <div>
                  <Image loading="lazy" alt="img" src={campus}></Image>
                </div>
              </div>
            </div>
          </div>

          <div className="header-btm">
            <div className="btm-left">
              <div
                className="our-comunity"
                onClick={() => {
                  redirectTo("/about/ourFaculties");
                }}
                style={{ cursor: "pointer" }}
              >
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
              <div
                className="global-campus"
                onClick={() => {
                  redirectTo("/about/facilities");
                }}
                style={{ cursor: "pointer" }}
              >
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

                <h2>
                  Admission & <br />
                  Records
                </h2>
              </div>
              <div className="main-box">
                <div className="photo">
                  <Image loading="lazy" src={register} alt="img"></Image>
                </div>

                <h2>
                  College <br />
                  Circular
                </h2>
              </div>
              <div
                className="main-box"
                onClick={() => {
                  redirectTo("/about#vissionandmission");
                }}
                style={{ cursor: "pointer" }}
              >
                <div className="photo">
                  <Image loading="lazy" src={vision} alt="img"></Image>
                </div>

                <h2>
                  Vision & <br /> Mission
                </h2>
              </div>
              <div className="main-box last">
                <div className="photo">
                  <Image loading="lazy" src={Career} alt="img"></Image>
                </div>

                <h2>
                  Career <br />
                  Opportunities
                </h2>
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
            <div className="phone-btns">
              <div className="green">
                <button>EXPLORE</button>
                <button>APPLY NOW</button>
              </div>
              <div className="yellow">
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

              <h2>College Circular</h2>
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
