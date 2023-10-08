import React from "react";
import dphoto from "../../../Assets/svg/dphoto.svg";
import aicte from "../../../Assets/svg/aicte.svg";
import Image from "next/image";
import "./index.scss";
export const Dpharma = () => {
  return (
    <div className="dpharma">
      <div className="text">
        <div className="textarea">
          <h2>D.Pharmacy at Anangpuria Institute of Pharmaceutical Studies</h2>

          <p>
            The Diploma in Pharmacy (D.Pharm) program at Anangpuria Institute of
            Pharmacy is a two-year diploma course that provides students with a
            strong foundation in the field of pharmacy. This program is ideal
            for those who wish to gain practical knowledge and skills, enabling
            them to pursue a successful career in the pharmaceutical industry,
            community pharmacies, or hospital settings.
          </p>
          <div className="textarea1">
            <div className="photo1">
              <Image src={aicte} alt=" " />
            </div>
            <p>
              Our D.Pharm program adheres to the Indian syllabus and is approved
              by the All India Council for Technical Education, New Delhi;
              Pharmacy Council of India, New Delhi; and the Government of
              Haryana. The course is affiliated to the State Board of Technical
              Education, Haryana.
            </p>
          </div>

          <p>
            The D.Pharm program focuses on subjects such as pharmaceutical
            chemistry, pharmacology, pharmaceutics, pharmacognosy, and pharmacy
            practice, among others. The curriculum is designed to provide
            students with a thorough understanding of the fundamentals of
            pharmacy, ensuring that they are well-prepared for entry-level
            positions in the field.
          </p>
        </div>
      </div>
      <div className="photo">
        <Image src={dphoto} alt=" " />
      </div>
    </div>
  );
};
