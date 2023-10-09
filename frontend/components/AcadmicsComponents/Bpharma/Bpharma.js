import React from "react";
import bphoto from "../../../Assets/svg/bphoto.svg";
import Image from "next/image";
import "./index.scss";
export const Bpharma = () => {
  return (
    <div className="bpharma">
      <div className="text">
        <div className="textarea">
          <h2>B.Pharmacy at Anangpuria Institute of Pharmaceutical Studies</h2>

          <p>
            Our Institute is approved by the All India Council for Technical
            Education, New Delhi; Pharmacy Council of India, New Delhi;
            Government of Haryana. Furthermore, our B.Pharm course is affiliated
            to Pt. B. D. Sharma University of Health Sciences, Rohtak, Haryana.
          </p>
          <p>
            The Bachelor of Pharmacy (B.Pharm) program at Anangpuria Institute
            of Pharmacy is a comprehensive four-year degree course designed to
            equip students with the knowledge and skills required to thrive in
            the ever-evolving pharmaceutical industry. As an essential field in
            {`today's`} healthcare landscape, pharmacy plays a crucial role in
            the discovery, development, and distribution of medications that
            improve {`people's`} lives.
          </p>

          <p>
            Spanning over four years, our B.Pharm program adheres to the Indian
            syllabus and focuses on a diverse range of subjects, including
            pharmaceutical chemistry, pharmacology, pharmaceutics,
            pharmacognosy, and more. The curriculum is meticulously designed to
            meet the current industry demands, ensuring that our graduates are
            well-prepared to tackle the challenges of the pharmaceutical sector.
          </p>
        </div>
      </div>
      <div className="photo skeleton">
        <Image src={bphoto} alt=" " />
      </div>
    </div>
  );
};
