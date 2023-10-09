import React from "react";
import Image from "next/image";
import principal from "../../../Assets/svg/principal.svg";
import "./index.scss";
export const Principal = () => {
  return (
    <div className="principal">
      <div className="text">
        <div className="textarea">
          <h3>Principal</h3>
          <h2 className="h2">Dr. Shiv Yadav</h2>
          <p className="p">Hello Everyone,</p>
          <p className="p">
            {`I'm`} honored to welcome you all to the B. S. Anangpuria Institute
            of Pharmacy! As the Principal of this prestigious institution, I
            take pride in leading the B. S. Anangpuria Institute of Pharmacy, a
            premier pharmacy college in our nation. Over time, our institution
            has played a crucial role in shaping skilled pharmacy professionals
            who have positively impacted the {`country's`} healthcare system.
          </p>
          <p className="p">
            The pharmacy field is not only essential but also a rewarding career
            path. It offers a plethora of opportunities in areas such as
            hospitals, clinics, retail, medical underwriting, drug research and
            development, and pharmaceutical sales and marketing. Pharmacy
            graduates enjoy numerous benefits, including job flexibility,
            allowing them to work in diverse environments like hospitals,
            nursing homes, pharmaceutical companies, and retail stores.
            Moreover, the growing demand for pharmacists is fuelled by
            continuous technological advancements and drug discoveries,
            resulting in a thriving job market in the pharmacy sector.
          </p>
          <p className="p">
            Pharmacy graduates can pursue various job profiles, including
            Medical Sales Representative, Drug Inspector, Regulatory Affairs
            Officer, Research Officer, and Clinical Research Associate. They can
            also venture into entrepreneurship and be part of the thriving
            startup culture.
          </p>
          <p className="p">
            Being accredited by the All India Council of Technical Education and
            the Pharmacy Council of India, the B. S. Anangpuria Institute of
            Pharmacy offers a comprehensive range of pharmacy courses, including
            the 4-year Bachelor of Pharmacy (B. Pharm) and the 2-year Diploma of
            Pharmacy (D. Pharm).
          </p>
        </div>
      </div>
      <div className="photo skeleton">
        <Image src={principal} alt=" " />
      </div>
    </div>
  );
};
