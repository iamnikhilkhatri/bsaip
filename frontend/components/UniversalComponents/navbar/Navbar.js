"use client";
import React from "react";
import "./index.scss";
import Image from "next/image";
import { useContext } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import logo from "../../../Assets/svg/logo.svg";
// import { useTheme } from "../../../app/context/Mycontext";
import { useEffect } from "react";

export const Navbar = () => {
  const router = usePathname();
  const [phoneMenu, setPhoneMenu] = useState(false);
  const [state, setState] = useState(false);
  const [moreMenuAbout, setMoreMenuAbout] = useState(false);
  const [moreMenuAcademics, setMoreMenuAcademics] = useState(false);
  const [moreMenuAdmission, setMoreMenuAdmission] = useState(false);
  const [moreMenuStudentLife, setMoreMenuStudentLife] = useState(false);
  const [moreMenuPlacement, setMoreMenuPlacement] = useState(false);
  console.log(router);
  // const { setFunc } = useTheme();
  const handleScroll = () => {
    const offSet = window.scrollY;
    if (offSet > 800) {
      setPhoneMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="nav-box">
      <div className="navbar">
        <div className="logo">
          <Image loading="lazy" src={logo} alt=""></Image>
        </div>
        <div className="menu">
          <ul>
            <li
              onClick={() => {
                setMoreMenuAbout(false);
                setMoreMenuAcademics(false);
                setMoreMenuAdmission(false);
                setMoreMenuPlacement(false);
                setMoreMenuStudentLife(false);
              }}
            >
              <Link className={router === "/" ? "active" : ""} href="/">
                HOME
              </Link>
            </li>
            <li
              onClick={() => {
                setMoreMenuAbout(!moreMenuAbout);
                setMoreMenuAcademics(false);
                setMoreMenuAdmission(false);
                setMoreMenuPlacement(false);
                setMoreMenuStudentLife(false);
              }}
            >
              <Link
                className={router.includes("/about") ? "active" : ""}
                href=""
              >
                ABOUT
              </Link>
            </li>
            <li
              onClick={() => {
                setMoreMenuAcademics(!moreMenuAcademics);
                setMoreMenuAbout(false);
                setMoreMenuAdmission(false);
                setMoreMenuPlacement(false);
                setMoreMenuStudentLife(false);
              }}
            >
              <Link
                className={router.includes("/academics") ? "active" : ""}
                href=""
              >
                ACADEMICS
              </Link>
            </li>
            <li
              onClick={() => {
                setMoreMenuAcademics(false);
                setMoreMenuAbout(false);
                setMoreMenuAdmission(!moreMenuAdmission);
                setMoreMenuPlacement(false);
                setMoreMenuStudentLife(false);
              }}
            >
              <Link
                href=""
                className={router.includes("/admission") ? "active" : ""}
              >
                ADMISSIONS
              </Link>
            </li>
            <li
              onClick={() => {
                setMoreMenuAcademics(false);
                setMoreMenuAbout(false);
                setMoreMenuStudentLife(!moreMenuStudentLife);
                setMoreMenuAdmission(false);
                setMoreMenuPlacement(false);
              }}
            >
              <Link
                href=""
                className={router.includes("/studentllife") ? "active" : ""}
              >
                STUDENT LIFE
              </Link>
            </li>
            <li
              onClick={() => {
                setMoreMenuAcademics(false);
                setMoreMenuAbout(false);
                setMoreMenuPlacement(false);
                setMoreMenuAdmission(false);
                setMoreMenuPlacement(!moreMenuPlacement);
              }}
            >
              <Link
                href=""
                className={router.includes("/placements") ? "active" : ""}
              >
                PLACEMENTS
              </Link>
            </li>
            <li
              onClick={() => {
                setMoreMenuAcademics(false);
                setMoreMenuAbout(false);
                setMoreMenuPlacement(false);
                setMoreMenuAdmission(false);
                setMoreMenuPlacement(false);
              }}
            >
              <Link
                href="/contactUs"
                className={router.includes("/contactUs") ? "active" : ""}
              >
                CONTACT US
              </Link>
            </li>
          </ul>
          {moreMenuAbout && (
            <div className="moremenu">
              <div className="eachmenu">
                <ul>
                  <li>
                    <Link href="/about">About B.S. Anangpuria</Link>
                  </li>
                  <li>
                    <Link href="">Vision & Mission</Link>
                  </li>
                  <li>
                    <Link href="">Photo and video gallery</Link>
                  </li>
                  <li>
                    <Link href="/about/ourFaculties">Our Faculties</Link>
                  </li>
                </ul>
              </div>
              <div className="eachmenu">
                <ul>
                  <li>
                    <Link href="/about/accreditationsAndAffiliations">
                      Accreditations and affiliations
                    </Link>
                  </li>
                  <li>
                    <Link href="/about/messagefromdirector">
                      Message From Chairmen
                    </Link>
                  </li>
                  <li>
                    <Link href="/about/messagefromprincipal">
                      Message From Principal
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="eachmenu">
                <ul>
                  <li>
                    <Link href="/about/mediaCoverageAndTestimonials">
                      Media coverage and testimonials
                    </Link>
                  </li>
                  <li>
                    <Link href="/about/facilities">
                      Campus facilities and infrastructure
                    </Link>
                  </li>
                  <li>
                    <Link href="">Awards & Accolades</Link>
                  </li>
                </ul>
              </div>
            </div>
          )}
          {moreMenuAcademics && (
            <div className="moremenu">
              <div className="eachmenu">
                <ul>
                  <li className="menuheading">SCHOOLS</li>
                  <li>
                    <Link href="">Institute of health management research</Link>
                  </li>
                  <li>
                    <Link href="">School of pharmaceutical management</Link>
                  </li>
                  <li>
                    <Link href="">School of development studies</Link>
                  </li>
                  <li>
                    <Link href="">B.S Anangpuria Schoolof public health</Link>
                  </li>
                </ul>
              </div>
              <div className="eachmenu">
                <ul>
                  <li className="menuheading">PROGRAMS</li>
                  <li>
                    <Link href="/academics/bpharma">
                      B.pharm (bechelor of pharmacy)
                    </Link>
                  </li>
                  <li>
                    <Link href="/academics/dpharma">
                      D.pharm (diploma in pharmacy)
                    </Link>
                  </li>
                  <li>
                    <Link href="">Career development workshops and events</Link>
                  </li>
                </ul>
              </div>
              <div className="eachmenu">
                <ul>
                  <li className="menuheading">GENERAL INFORMATION</li>
                  <li>
                    <Link href="/academics/commanInformationForAllProgram">
                      Common information for all the programs
                    </Link>
                  </li>
                  <li>
                    <Link href="/about/facilities">Academic Calender</Link>
                  </li>
                  <li>
                    <Link href="">Student Handbook 2022-24</Link>
                  </li>
                  <li>
                    <Link href="">College Circular</Link>
                  </li>
                </ul>
              </div>
            </div>
          )}
          {moreMenuAdmission && (
            <div className="moremenu">
              <div className="eachmenu">
                <ul>
                  <li>
                    <Link href="/admission/overview">Overview</Link>
                  </li>
                  <li>
                    <Link href="">Eligibility Criteria</Link>
                  </li>
                  <li>
                    <Link href="">Admission Process</Link>
                  </li>
                </ul>
              </div>
              <div className="eachmenu">
                <ul>
                  <li>
                    <Link href="">How to Apply</Link>
                  </li>
                  <li>
                    <Link href="">Scholarship</Link>
                  </li>
                  <li>
                    <Link href="">International Admissions</Link>
                  </li>
                </ul>
              </div>
              <div className="eachmenu">
                <ul>
                  <li>
                    <Link href="">Loan Assistance</Link>
                  </li>
                  <li>
                    <Link href="/about/facilities">Hostel</Link>
                  </li>
                </ul>
              </div>
            </div>
          )}
          {moreMenuStudentLife && (
            <div className="moremenu">
              <div className="eachmenu">
                <ul>
                  <li>
                    <Link href="">College Activities</Link>
                  </li>
                  <li>
                    <Link href="">Co-Curricular Activities</Link>
                  </li>
                </ul>
              </div>
              <div className="eachmenu">
                <ul>
                  <li>
                    <Link href="">Institute / University Transfer</Link>
                  </li>
                  <li>
                    <Link href="">Placement</Link>
                  </li>
                </ul>
              </div>
              <div className="eachmenu">
                <ul>
                  <li>
                    <Link href="">Events</Link>
                  </li>
                  <li>
                    <Link href="/studentLife/studentGallery">
                      Student Gallery
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          )}
          {moreMenuPlacement && (
            <div className="moremenu">
              <div className="eachmenu">
                <ul>
                  <li>
                    <Link href="">Placement at a Glance</Link>
                  </li>
                  <li>
                    <Link href="">Our Recruiters</Link>
                  </li>
                </ul>
              </div>
              <div className="eachmenu">
                <ul>
                  <li>
                    <Link href="">Summer Training</Link>
                  </li>
                  <li>
                    <Link href="">Placement Details</Link>
                  </li>
                </ul>
              </div>
              <div className="eachmenu">
                <ul>
                  <li>
                    <Link href="">Placement Brochure 2022-23</Link>
                  </li>
                  <li>
                    <Link href="">Contact Placement Cell</Link>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="phone">
        <div className="menu-box">
          {phoneMenu && (
            <div className="side-menu">
              <div className="phone-logo">
                <Image loading="lazy" src={logo} alt=""></Image>
                <div
                  onClick={() => {
                    setPhoneMenu(!phoneMenu);

                    setMoreMenuAbout(false);
                    setMoreMenuAcademics(false);
                    setMoreMenuAdmission(false);
                    setMoreMenuPlacement(false);
                    setMoreMenuStudentLife(false);
                  }}
                >
                  <i
                    className="fa-solid fa-xmark fa-xl"
                    style={{ color: "#F8EE00" }}
                  ></i>
                </div>
              </div>
              <div className="phone-menu">
                <div className="menu-list">
                  <div
                    onClick={() => {
                      setMoreMenuAbout(false);
                      setMoreMenuAcademics(false);
                      setMoreMenuAdmission(false);
                      setMoreMenuPlacement(false);
                      setMoreMenuStudentLife(false);
                    }}
                    className="each-menu"
                  >
                    <div className="div">
                      <Link className={router === "/" ? "active" : ""} href="/">
                        HOME
                      </Link>
                    </div>
                  </div>

                  <div className="each-menu">
                    <div
                      className="div"
                      onClick={() => {
                        setMoreMenuAbout(!moreMenuAbout);
                        setMoreMenuAcademics(false);
                        setMoreMenuAdmission(false);
                        setMoreMenuPlacement(false);
                        setMoreMenuStudentLife(false);
                      }}
                    >
                      <Link
                        className={router.includes("/about") ? "active" : ""}
                        href=""
                      >
                        ABOUT
                      </Link>
                      <i
                        className="fa-solid fa-angle-down"
                        style={{ color: " #ffffff " }}
                      ></i>
                    </div>
                    {moreMenuAbout && (
                      <div className="more-menu">
                        <ul>
                          <li>
                            <Link href="/about">About B.S. Anangpuria</Link>
                          </li>
                          <li>
                            <Link href="">Vision & Mission</Link>
                          </li>
                          <li>
                            <Link href="">Photo and video gallery</Link>
                          </li>

                          <li>
                            <Link href="/about/accreditationsAndAffiliations">
                              Accreditations and affiliations
                            </Link>
                          </li>
                          <li>
                            <Link href="/about/messagefromdirector">
                              Message From Chairmen
                            </Link>
                          </li>
                          <li>
                            <Link href="/about/messagefromprincipal">
                              Message From Principal
                            </Link>
                          </li>

                          <li>
                            <Link href="">Media coverage and testimonials</Link>
                          </li>
                          <li>
                            <Link href="/about/facilities">
                              Campus facilities and infrastructure
                            </Link>
                          </li>
                          <li>
                            <Link href="">Awards & Accolades</Link>
                          </li>
                          <li>
                            <Link href="/about/ourFaculties">
                              Our Faculties
                            </Link>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className="each-menu">
                    <div
                      className="div"
                      onClick={() => {
                        setMoreMenuAbout(false);
                        setMoreMenuAcademics(!moreMenuAcademics);
                        setMoreMenuAdmission(false);
                        setMoreMenuPlacement(false);
                        setMoreMenuStudentLife(false);
                      }}
                    >
                      <Link
                        className={
                          router.includes("/academics") ? "active" : ""
                        }
                        href=""
                      >
                        ACADEMICS
                      </Link>
                      <i
                        className="fa-solid fa-angle-down"
                        style={{ color: " #ffffff " }}
                      ></i>
                    </div>
                    {moreMenuAcademics && (
                      <div className="more-menu">
                        <li className="menuheading">SCHOOLS</li>
                        <li>
                          <Link href="">
                            Institute of health management research
                          </Link>
                        </li>
                        <li>
                          <Link href="">
                            School of pharmaceutical management
                          </Link>
                        </li>
                        <li>
                          <Link href="">School of development studies</Link>
                        </li>
                        <li>
                          <Link href="">
                            B.S Anangpuria Schoolof public health
                          </Link>
                        </li>

                        <li className="menuheading">PROGRAMS</li>
                        <li>
                          <Link href="/academics/bpharma">
                            B.pharm (bechelor of pharmacy)
                          </Link>
                        </li>
                        <li>
                          <Link href="/academics/dpharma">
                            D.pharm (diploma in pharmacy)
                          </Link>
                        </li>
                        <li>
                          <Link href="">
                            Career development workshops and events
                          </Link>
                        </li>

                        <li className="menuheading">GENERAL INFORMATION</li>
                        <li>
                          <Link href="/academics/commanInformationForAllProgram">
                            Common information for all the programs
                          </Link>
                        </li>
                        <li>
                          <Link href="/about/facilities">
                            Academic Calender
                          </Link>
                        </li>
                        <li>
                          <Link href="">Student Handbook 2022-24</Link>
                        </li>
                      </div>
                    )}
                  </div>

                  <div className="each-menu">
                    <div
                      className="div"
                      onClick={() => {
                        setMoreMenuAbout(false);
                        setMoreMenuAcademics(false);
                        setMoreMenuAdmission(!moreMenuAdmission);
                        setMoreMenuPlacement(false);
                        setMoreMenuStudentLife(false);
                      }}
                    >
                      <Link
                        className={
                          router.includes("/admission") ? "active" : ""
                        }
                        href=""
                      >
                        ADMISSIONS
                      </Link>
                      <i
                        className="fa-solid fa-angle-down"
                        style={{ color: " #ffffff " }}
                      ></i>
                    </div>
                    {moreMenuAdmission && (
                      <div className="more-menu">
                        <li>
                          <Link href="/admission/overview">Overview</Link>
                        </li>
                        <li>
                          <Link href="">Eligibility Criteria</Link>
                        </li>
                        <li>
                          <Link href="">Admission Process</Link>
                        </li>

                        <li>
                          <Link href="">How to Apply</Link>
                        </li>
                        <li>
                          <Link href="">Scholarship</Link>
                        </li>
                        <li>
                          <Link href="">International Admissions</Link>
                        </li>

                        <li>
                          <Link href="">Loan Assistance</Link>
                        </li>
                        <li>
                          <Link href="/about/facilities">Hostel</Link>
                        </li>
                      </div>
                    )}
                  </div>

                  <div className="each-menu">
                    <div
                      className="div"
                      onClick={() => {
                        setMoreMenuAbout(false);
                        setMoreMenuAcademics(false);
                        setMoreMenuAdmission(false);
                        setMoreMenuPlacement(false);
                        setMoreMenuStudentLife(!moreMenuStudentLife);
                      }}
                    >
                      <Link
                        className={
                          router.includes("/studentLife") ? "active" : ""
                        }
                        href=""
                      >
                        STUDENT LIFE
                      </Link>

                      <i
                        className="fa-solid fa-angle-down"
                        style={{ color: " #ffffff " }}
                      ></i>
                    </div>
                    {moreMenuStudentLife && (
                      <div className="more-menu">
                        <li>
                          <Link href="">College Activities</Link>
                        </li>
                        <li>
                          <Link href="">Co-Curricular Activities</Link>
                        </li>

                        <li>
                          <Link href="">Institute / University Transfer</Link>
                        </li>
                        <li>
                          <Link href="">Placement</Link>
                        </li>

                        <li>
                          <Link href="">Events</Link>
                        </li>
                        <li>
                          <Link href="">Student Gallery</Link>
                        </li>
                      </div>
                    )}
                  </div>

                  <div className="each-menu">
                    <div
                      className="div"
                      onClick={() => {
                        setMoreMenuAbout(false);
                        setMoreMenuAcademics(false);
                        setMoreMenuAdmission(false);
                        setMoreMenuPlacement(!moreMenuPlacement);
                        setMoreMenuStudentLife(false);
                      }}
                    >
                      <Link
                        className={
                          router.includes("/placements") ? "active" : ""
                        }
                        href=""
                      >
                        PLACEMENTS
                      </Link>

                      <i
                        className="fa-solid fa-angle-down"
                        style={{ color: " #ffffff " }}
                      ></i>
                    </div>
                    {moreMenuPlacement && (
                      <div className="more-menu">
                        <li>
                          <Link href="">Placement at a Glance</Link>
                        </li>
                        <li>
                          <Link href="">Our Recruiters</Link>
                        </li>

                        <li>
                          <Link href="">Summer Training</Link>
                        </li>
                        <li>
                          <Link href="">Placement Details</Link>
                        </li>

                        <li>
                          <Link href="">Placement Brochure 2022-23</Link>
                        </li>
                        <li>
                          <Link href="">Contact Placement Cell</Link>
                        </li>
                      </div>
                    )}
                  </div>

                  <div
                    onClick={() => {
                      setMoreMenuAcademics(false);
                      setMoreMenuAbout(false);
                      setMoreMenuPlacement(false);
                      setMoreMenuAdmission(false);
                      setMoreMenuPlacement(false);
                    }}
                    className="each-menu"
                  >
                    <div className="div">
                      <Link
                        href="/contactUs"
                        className={
                          router.includes("/contactUs") ? "active" : ""
                        }
                      >
                        CONTACT US
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div
            className="bars"
            onClick={() => {
              setPhoneMenu(!phoneMenu);

              setMoreMenuAbout(false);
              setMoreMenuAcademics(false);
              setMoreMenuAdmission(false);
              setMoreMenuPlacement(false);
              setMoreMenuStudentLife(false);
            }}
          >
            <i
              className="fa-solid fa-bars fa-2xl"
              style={{ color: "#F8EE00" }}
            ></i>
          </div>
          <div className="logo-box">
            <Image src={logo} alt=""></Image>
          </div>
        </div>
      </div>
    </div>
  );
};
