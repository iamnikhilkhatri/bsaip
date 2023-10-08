import React from "react";
import students from "../../../Assets/svg/studyat.svg";
import marks from "../../../Assets/svg/marks.svg";
import Image from "next/image";
import "./index.scss";
export const ProblemLearn = () => {
  return (
    <div className="problemlearn">
      <div className="content-box">
        <div className="top-area">
          <div className="left">
            <h2>Problem-Based Learning Approach</h2>
            <p>
              Our problem-based learning approach encourages students to tackle
              real-world challenges by applying their knowledge, fostering
              critical thinking and problem-solving skills. This teaching
              methodology ensures our graduates are equipped to tackle complex
              issues in their careers, setting them apart from their peers.
            </p>
          </div>
          <div className="mid">
            <div className="photo">
              <Image src={students} alt="" />
            </div>
          </div>
          <div className="right">
            <h2>Experienced Faculty</h2>
            <p>
              Our faculty members are seasoned professionals with extensive
              experience in academia and the pharmaceutical industry. Their
              commitment to teaching and mentoring helps our students develop
              the knowledge, skills, and confidence necessary to excel in their
              chosen fields.
            </p>
          </div>
        </div>
        <div className="btm-area">
          <div className="photo">
            <Image src={marks} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
