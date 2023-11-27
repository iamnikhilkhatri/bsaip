import React from "react";
import "./index.scss";
import Image from "next/image";
import offcampus from "../../../Assets/svg/offcampus.svg";
import activities from "../../../Assets/svg/activities.svg";
import safety from "../../../Assets/svg/safety.svg";
import t1 from "../../../Assets/svg/t1.svg";
import t2 from "../../../Assets/svg/t2.svg";
import b1 from "../../../Assets/svg/b1.svg";
import b2 from "../../../Assets/svg/b2.svg";
import b3 from "../../../Assets/svg/b3.svg";
import green from "../../../Assets/svg/green.svg";
import modern from "../../../Assets/svg/modern.svg";
export const Facilites = () => {
  return (
    <div className="facilities">
      <div className="content-box">
        <div className="top">
          <div className="text">
            <div className="photo ">
              <Image src={modern} alt="" />
            </div>
            <h3>
              Modern
              <br /> Infrastructure
            </h3>
            <p>
              Our campus boasts modern infrastructure, including well-equipped
              classrooms, industry-level laboratories, and a spacious library
              stocked with the latest books and research materials. These
              facilities ensure that our students have the resources they need
              to excel academically.
            </p>
          </div>
          <div className="photo skeleton">
            <Image src={t1} alt=""></Image>
          </div>
          <div className="text">
            <div className="photo">
              <Image src={green} alt="" />
            </div>
            <h3>
              Green and Eco-friendly <br />
              Environment
            </h3>
            <p>
              Surrounded by lush greenery, the Anangpuria Institute of Pharmacy
              campus provides students with a peaceful and inspiring environment
              to study and relax. Our eco-friendly initiatives promote
              sustainability and contribute to a cleaner, healthier campus for
              everyone.
            </p>
          </div>
          <div className="photo skeleton">
            <Image src={t2} alt=""></Image>
          </div>
          <div className="text">
            <div className="photo">
              <Image src={activities} alt="" />
            </div>
            <h3>
              Extracurricular <br /> Activities
            </h3>
            <p>
              Surrounded by lush greenery, the Anangpuria Institute of Pharmacy
              campus provides students with a peaceful and inspiring environment
              to study and relax. Our eco-friendly initiatives promote
              sustainability and contribute to a cleaner, healthier campus for
              everyone.
            </p>
          </div>
        </div>
        <div className="btm">
          <div className="photo skeleton">
            <Image src={b1} alt=""></Image>
          </div>
          <div className="text">
            <div className="photo">
              <Image src={offcampus} alt="" />
            </div>
            <h3>
              Off-Campus Accommodation <br /> Support
            </h3>
            <p>
              Although we do not provide on-campus accommodations, our support
              staff can assist students in finding suitable nearby PG services
              upon request. This ensures that students have access to safe and
              comfortable living arrangements close to the campus.
            </p>
          </div>
          <div className="photo skeleton">
            <Image src={b2} alt=""></Image>
          </div>
          <div className="text">
            <div className="photo">
              <Image src={safety} alt="" />
            </div>
            <h3>
              Safety and <br /> Security
            </h3>
            <p>
              The safety and security of our students are of utmost importance.
              Our campus is equipped with modern security systems, and our
              vigilant security personnel work around the clock to ensure a safe
              and secure environment for all.
            </p>
          </div>
          <div className="photo skeleton">
            <Image src={b3} alt=""></Image>
          </div>
        </div>
      </div>
      <div className="content-box-phone">
        <div className="top">
          <div className="text">
            <div className="photo">
              <Image src={modern} alt="" />
            </div>
            <h3>
              Modern
              <br /> Infrastructure
            </h3>
            <p>
              Our campus boasts modern infrastructure, including well-equipped
              classrooms, industry-level laboratories, and a spacious library
              stocked with the latest books and research materials. These
              facilities ensure that our students have the resources they need
              to excel academically.
            </p>
          </div>
          <div className="photo skeleton">
            <Image src={t1} alt=""></Image>
          </div>
          <div className="photo skeleton">
            <Image src={t2} alt=""></Image>
          </div>
          <div className="text">
            <div className="photo">
              <Image src={green} alt="" />
            </div>
            <h3>
              Green and Eco-friendly <br />
              Environment
            </h3>
            <p>
              Surrounded by lush greenery, the Anangpuria Institute of Pharmacy
              campus provides students with a peaceful and inspiring environment
              to study and relax. Our eco-friendly initiatives promote
              sustainability and contribute to a cleaner, healthier campus for
              everyone.
            </p>
          </div>

          <div className="text">
            <div className="photo ">
              <Image src={activities} alt="" />
            </div>
            <h3>
              Extracurricular <br /> Activities
            </h3>
            <p>
              Surrounded by lush greenery, the Anangpuria Institute of Pharmacy
              campus provides students with a peaceful and inspiring environment
              to study and relax. Our eco-friendly initiatives promote
              sustainability and contribute to a cleaner, healthier campus for
              everyone.
            </p>
          </div>

          <div className="photo skeleton">
            <Image src={b1} alt=""></Image>
          </div>

          <div className="photo skeleton">
            <Image src={b2} alt=""></Image>
          </div>
          <div className="text">
            <div className="photo">
              <Image src={offcampus} alt="" />
            </div>
            <h3>
              Off-Campus Accommodation <br /> Support
            </h3>
            <p>
              Although we do not provide on-campus accommodations, our support
              staff can assist students in finding suitable nearby PG services
              upon request. This ensures that students have access to safe and
              comfortable living arrangements close to the campus.
            </p>
          </div>
          <div className="text">
            <div className="photo ">
              <Image src={safety} alt="" />
            </div>
            <h3>
              Safety and <br /> Security
            </h3>
            <p>
              The safety and security of our students are of utmost importance.
              Our campus is equipped with modern security systems, and our
              vigilant security personnel work around the clock to ensure a safe
              and secure environment for all.
            </p>
          </div>
          <div className="photo skeleton">
            <Image src={b3} alt=""></Image>
          </div>
        </div>
      </div>
    </div>
  );
};
