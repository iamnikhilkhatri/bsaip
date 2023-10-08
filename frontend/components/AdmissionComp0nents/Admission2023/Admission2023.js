import React from "react";
import "./index.scss";
import Image from "next/image";
import img from "../../../Assets/svg/2023.svg";
export const Admission2023 = () => {
  return (
    <div className="admission">
      <div className="text">
        <div className="textarea">
          <h2>
            Admission
            <br /> 2023-2025
          </h2>
          <p>
            While the admission requirements for each program vary, the
            selection process of the candidates to various postgraduate and
            doctoral research degrees of the University follows a rigorously
            competitive and merit-based selection process. It involves a written
            aptitude test, group discussion, and personal interview. We review
            each applicant with an eye to academic excellence, intellectual
            vitality, and personal context.
          </p>
        </div>
      </div>
      <div className="photo">
        <Image src={img} alt="" />
      </div>
    </div>
  );
};
