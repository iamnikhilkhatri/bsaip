"use client";
import React from "react";
import "./index.scss";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import Image from "next/image";
import mid from "../../../Assets/svg/studyat.png";
import left from "../../../Assets/svg/bpharma.svg";
import right from "../../../Assets/svg/dpharma.svg";
export const StudyAt = () => {
  const router = useRouter();
  const redirectTo = (path) => {
    router.push(path);
  };
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="studyat">
      <div className="heading">
        <h1>
          Study At <span>Anangpuria</span>
        </h1>
      </div>

      <div className="content">
        <div className="left" data-aos="fade-left">
          <div className={`img`}>
            <Image src={left} alt="left"></Image>
          </div>
          <h2>B.PHARM</h2>
          <h6>BACHELOR OF PHARMACY</h6>
          <p>
            The Bachelor of Pharmacy (B.Pharm) program at Anangpuria Institute
            of Pharmacy is a comprehensive four-year degree course designed to
            equip students with the knowledge and skills required to thrive in
            the ever-evolving pharmaceutical industry.
          </p>
          {/* <Link href="/academics/bpharma"> */}
          <button
            onClick={() => {
              redirectTo("/academics/bpharma");
            }}
          >
            VIEW MORE
          </button>
          {/* </Link> */}
        </div>

        <div className="center skeleton">
          <div className="img">
            <Image loading="lazy" src={mid} alt="mid"></Image>
          </div>
        </div>

        <div className="right" data-aos="fade-right">
          <div className={`img `}>
            <Image src={right} alt=""></Image>
          </div>
          <h2>D.PHARM</h2>
          <h6>DIPLOMA IN PHARMACY</h6>
          <p>
            The Diploma in Pharmacy (D.Pharm) program at Anangpuria Institute of
            Pharmacy offers numerous benefits to students, making it an
            excellent choice for those looking to begin their journey in the
            field of pharmacy.
          </p>
          <button
            onClick={() => {
              redirectTo("/academics/dpharma");
            }}
          >
            VIEW MORE
          </button>
        </div>
      </div>
    </div>
  );
};
