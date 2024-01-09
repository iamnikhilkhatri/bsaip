"use client";
import React from "react";
import "./index.scss";
import Image from "next/image";
import facebook from "../../../Assets/svg/btmfb.svg";
import loc from "../../../Assets/svg/loca.svg";
import Link from "next/link";
import insta from "../../../Assets/svg/btminsta.svg";
import logo from "../../../Assets/svg/anag.svg";
import linkdin from "../../../Assets/svg/btmlinkdin.svg";
import tweet from "../../../Assets/svg/btmtweet.svg";
import { useRouter } from "next/navigation";

export const Footer = () => {
  const router = useRouter();
  const redirectTo = (path) => {
    router.push(path);
  };

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
            <h2>Quick Links</h2>
            <div className="types">
              <div className="type-1">
                <ul>
                  <a
                    href="https://www.pci.nic.in/"
                    target="_blank"
                    className="a"
                  >
                    <li>PCI</li>
                  </a>
                  <a
                    href="https://www.aicte-india.org/"
                    target="_blank"
                    className="a"
                  >
                    <li>AICTC</li>
                  </a>
                  <a
                    href="https://www.techeduhry.gov.in/"
                    target="_blank"
                    className="a"
                  >
                    <li>DTE</li>
                  </a>
                  <a href="http://hsbte.org.in/" target="_blank" className="a">
                    <li>HSBTE</li>
                  </a>
                  <a
                    href="https://www.hstes.org.in/"
                    target="_blank"
                    className="a"
                  >
                    <li>HSCS</li>
                  </a>
                </ul>
              </div>
              <div className="type-2">
                <ul>
                  <Link href="/about" className="a">
                    <li>About Us</li>
                  </Link>
                  <Link href="/register" className="a">
                    <li>Admissions</li>
                  </Link>

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
                  <a
                    href="https://www.vidyalakshmi.co.in/Students/"
                    target="_blanl"
                    className="a"
                  >
                    <li>Education Loans</li>
                  </a>

                  <a href="http://uhsr.ac.in/" target="_blank" className="a">
                    <li>Pt B D Sharma University</li>{" "}
                  </a>
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
            <div
              className="loca"
              onClick={() => {
                redirectTo("/contactUs#map");
              }}
            >
              <Image src={loc} alt="loc" unoptimized />{" "}
              <button>Find Us On Map</button>
            </div>
          </div>
          <div className="subscribe">
            <h2>Subscribe</h2>
            <a
              href="mailto:bsaei@anangpuria.com"
              style={{ textDecoration: "none" }}
            >
              <p>bsaei@anangpuria.com</p>
            </a>
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
              <a href="https://www.facebook.com/anangpuria/" target="_blank">
                <Image loading="lazy" src={facebook} alt="fb"></Image>
              </a>
            </div>
            <div className="logo">
              <Image loading="lazy" src={insta} alt="insta"></Image>
            </div>
            <div className="logo">
              <Image loading="lazy" src={linkdin} alt="linkdin"></Image>
            </div>
            <div className="logo">
              <a href="https://twitter.com/anangpurias" target="_blank">
                <Image loading="lazy" src={tweet} alt="tweet"></Image>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
