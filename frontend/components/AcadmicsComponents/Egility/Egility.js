import React from "react";
import "./index.scss";
export const Egility = () => {
  return (
    <div className="egility">
      <div className="heading">
        <h2>Eligibility Criteria for B.Pharm & D.Pharm</h2>
        <p>
          The table below presents the eligibility criteria for both the
          Bachelor of Pharmacy (B.Pharm) and Diploma in Pharmacy (D.Pharm)
          programs at Anangpuria Institute of Pharmacy. Prospective students
          should ensure they meet the criteria before applying to their desired
          program.
        </p>
      </div>
      <div className="table">
        <div className="left">
          <p className="thead">B.Pharm Eligibility Criteria</p>
          <ul>
            <li>
              <span>•</span> Candidates must have passed 10+2 or equivalent
              examination
            </li>
            <li>
              <span>•</span> Subjects: Physics, Chemistry, and Biology or
              Mathematics
            </li>
            <li>
              <span>•</span> Minimum aggregate of 50% marks for General/OBC
              candidates
            </li>
            <li>
              <span>•</span> Minimum aggregate of 45% marks for SC/ST candidates
            </li>
            <li>
              <span>•</span> Qualifying rank in entrance exams (if applicable)
            </li>
          </ul>
        </div>
        <div className="right">
          <p className="thead">D.Pharm Eligibility Criteria</p>
          <ul>
            <li>
              <span>•</span> Candidates must have passed 10+2 or equivalent
              examination
            </li>
            <li>
              <span>•</span> Subjects: Physics, Chemistry, and Biology or
              Mathematics
            </li>
            <li>
              <span>•</span> Minimum aggregate of 50% marks for General/OBC
              candidates
            </li>
            <li>
              <span>•</span> Minimum aggregate of 45% marks for SC/ST candidates
            </li>
            <li>
              <span>•</span> No entrance exam required
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
