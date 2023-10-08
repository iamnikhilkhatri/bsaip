import React from "react";
import Image from "next/image";
import why from "../../../../Assets/svg/bd.svg";
import point from "../../../../Assets/svg/point.svg";
import "./index.scss";
export const Objectives = () => {
  return (
    <div className="objectivess">
      <div className="photo">
        <Image src={why} alt=""></Image>
      </div>
      <div className="text">
        <div className="top">
          <div className="heading">
            <p>Our primary objectives</p>
          </div>
          <div className="details">
            <p>
              Our primary objectives at B. S. Anangpuria Institute of Pharmacy
              are to:
            </p>
          </div>
          <div className="points">
            <div className="each-point">
              <Image src={point} alt="point" />
              <p>
                Instil a scientific mindset in students, encouraging them to
                delve into the research and development aspects of pharmacy.
              </p>
            </div>
            <div className="each-point">
              <Image src={point} alt="point" />
              <p>
                Prepare our students to embrace the responsibilities associated
                with the pharmacy profession.
              </p>
            </div>
            <div className="each-point">
              <Image src={point} alt="point" />
              <p>
                Offer world-class resources and expertise to help our students
                excel in the field of pharmacy.
              </p>
            </div>
            <div className="each-point">
              <Image src={point} alt="point" />
              <p>
                We employ innovative teaching methods such as brainstorming,
                experiential learning, peer review, and group discussions to
                prepare our students to be globally competitive and make a
                significant contribution to the healthcare industry.
              </p>
            </div>
          </div>
        </div>
        <div className="btm">
          <p>
            Along with a strong academic foundation, we focus on providing
            hands-on knowledge and training to help our students become
            job-ready. Our dedicated placement cell works tirelessly to groom
            students and facilitate their recruitment into renowned
            organisations. Our consistent placement record and alumni working in
            various pharmacy sectors, such as Marketing, Production, Research &
            Development, and Academics, are testaments to the quality of
            education and the efforts of our placement cell.
          </p>
          <p>
            At the B. S. Anangpuria Institute of Pharmacy, we take pride in our
            state-of-the-art infrastructure and well-equipped laboratories,
            ensuring the best educational experience for our students. Our
            experienced and highly qualified faculty members are committed to
            providing a balanced blend of theoretical knowledge and practical
            training. They constantly strive to enhance the learning experience
            of our students through quality instruction and guidance.
          </p>
          <p>
            In addition to academics, we also emphasize the importance of
            extracurricular and co-curricular activities for the holistic
            development of our students. We aim to nurture their creative
            instincts, enabling them to generate novel ideas, drive innovation,
            and foster progress.
          </p>
          <p>
            Our dedicated team at the B. S. Anangpuria Institute of Pharmacy is
            continuously working to achieve higher levels of excellence. We are
            committed to our community and strive to accomplish our goals as we
            move forward with passion and enthusiasm.
          </p>
          <p>
            I invite you to join our vibrant and enriching learning community!
          </p>
          <p className="special">
            Thank you!
            <br /> Principal – B.S. Anangpuria Institute of Pharmacy
          </p>
        </div>
      </div>
    </div>
  );
};
