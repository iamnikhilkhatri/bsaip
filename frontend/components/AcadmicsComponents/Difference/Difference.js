import React from "react";
import "./index.scss";
export const Difference = () => {
  return (
    <div className="difference">
      <div className="heading">
        <h2>Difference between B.Pharm & D.Pharm</h2>
        <p>
          The table below highlights the key similarities and differences
          between the Bachelor of Pharmacy (B.Pharm) and Diploma in Pharmacy
          (D.Pharm) programs at Anangpuria Institute of Pharmacy, making it
          easier for students to compare and choose the right program for their
          career goals.
        </p>
      </div>
      <div className="table">
        <div className="left">
          <p className="thead">B.Pharm</p>
          <ul>
            <li>
              <span>•</span> 4-year undergraduate degree
            </li>
            <li>
              <span>•</span> Comprehensive study of pharmaceutical sciences
            </li>
            <li>
              <span>•</span> Requires 10+2 with Physics, Chemistry, and
              Biology/Math
            </li>
            <li>
              <span>•</span> Wide range of job opportunities and higher
              positions
            </li>
            <li>
              <span>•</span> Option to pursue higher studies like M.Pharm or
              Pharm.D
            </li>
          </ul>
        </div>
        <div className="right">
          <p className="thead">D.Pharm</p>
          <ul>
            <li>
              <span>•</span> 2-year diploma course
            </li>
            <li>
              <span>•</span> Focused on fundamentals of pharmaceutical sciences
            </li>
            <li>
              <span>•</span> Requires 10+2 with Physics, Chemistry, and
              Biology/Math
            </li>
            <li>
              <span>•</span> Suitable for pharmacists and pharmacy technicians
            </li>
            <li>
              <span>•</span> Can continue to B.Pharm program for further
              education
            </li>
          </ul>
        </div>
      </div>
      <div className="details">
        <p>
          The choice between the B.Pharm and D.Pharm programs depends on each
          {`student's`} career goals, interests, and desired level of education.
          Both courses provide a strong foundation in pharmaceutical sciences
          and prepare students for successful careers in the field.
        </p>
      </div>
    </div>
  );
};
