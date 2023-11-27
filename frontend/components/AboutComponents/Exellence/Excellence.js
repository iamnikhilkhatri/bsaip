import React from "react";
import Image from "next/image";
import "./index.scss";
import img from "../../../Assets/svg/esurence.svg";
export const Excellence = () => {
  return (
    <div className="excellence">
      <div className="text">
        <div className="textarea">
          <h2>
            Ensuring
            <br /> excellence &<br /> quality education
          </h2>
          <p>
            At Anangpuria Institute of Pharmacy, we place a strong emphasis on
            maintaining an exclusive and intimate learning environment. By
            limiting our student intake, we can ensure that each student
            receives the personalised attention and guidance they deserve. This
            approach enables us to focus on delivering a high-quality education
            that empowers our students to excel academically and stand out in
            the competitive job market.
          </p>
          <p>
            Our commitment to exclusivity and quality education ensures that our
            students receive an unparalleled learning experience, which
            cultivates a strong sense of accomplishment and pride. Parents can
            rest assured that their {`child's`} education is in capable hands,
            and students can take pride in being part of an institution that
            fosters excellence, innovation, and success.
          </p>
          <p>
            In conclusion, Anangpuria Institute of Pharmacy represents the ideal
            choice for students seeking a prestigious, high-quality education in
            the field of pharmaceutical sciences. Our exclusive learning
            environment, coupled with our comprehensive support services and
            industry connections, guarantees that our students are well-equipped
            to embark on successful and fulfilling careers in the pharmaceutical
            industry.
          </p>
        </div>
      </div>
      <div className="photo">
        <Image src={img} alt="" />
      </div>
    </div>
  );
};
