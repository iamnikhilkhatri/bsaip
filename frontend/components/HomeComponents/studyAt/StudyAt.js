import React from "react";
import "./index.scss";
import Image from "next/image";
import mid from "../../../Assets/svg/studyat.svg";
import left from "../../../Assets/svg/bpharma.svg";
import right from "../../../Assets/svg/dpharma.svg";
export const StudyAt = () => {
  return (
    <div className="studyat">
      <div className="heading">
        <h1>
          Study At <span>Anangpuria</span>
        </h1>
      </div>

      <div className="content">
        <div className="left">
          <Image src={left} alt="left"></Image>
          <h2>B.PHARM</h2>
          <h6>BACHELOR OF PHARMACY</h6>
          <p>
            The Bachelor of Pharmacy (B.Pharm) program at Anangpuria Institute
            of Pharmacy is a comprehensive four-year degree course designed to
            equip students with the knowledge and skills required to thrive in
            the ever-evolving pharmaceutical industry.
          </p>
          <button>VIEW MORE</button>
        </div>

        <div className="center">
          <Image loading="lazy" src={mid} alt="mid"></Image>
        </div>

        <div className="right">
          <Image src={right} alt=""></Image>
          <h2>D.PHARM</h2>
          <h6>DIPLOMA IN PHARMACY</h6>
          <p>
            The Diploma in Pharmacy (D.Pharm) program at Anangpuria Institute of
            Pharmacy offers numerous benefits to students, making it an
            excellent choice for those looking to begin their journey in the
            field of pharmacy.
          </p>
          <button>VIEW MORE</button>
        </div>
      </div>
    </div>
  );
};
