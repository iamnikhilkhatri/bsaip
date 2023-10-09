import React from "react";
import "../Principal/index.scss";
import director from "../../../Assets/svg/director.svg";
import Image from "next/image";
export const Director = () => {
  return (
    <div className="director">
      <div className="text">
        <div className="textarea">
          <h3>Director</h3>
          <h2 className="h2">Prof. Roop Krishen Khar</h2>
          <p className="p">Greetings to all,</p>
          <p className="p">
            It is with great honor and pride that I serve as the Director of B.
            S. Anangpuria Institute of Information & Technology, a prestigious
            institution that has established itself as a leading provider of
            quality education in the field of pharmaceutical sciences. BS
            Anangpuria Institute of pharmacy, founded in 2003 by the Bhawani
            Shanker Anangpuria Charitable Trust, our institute is situated in a
            picturesque and spacious campus along the Ballabgarh-Sohna Road in
            Faridabad.
          </p>
          <p className="p">
            Over the past two decades, our college has built an enviable
            reputation for its commitment to academic excellence, strict
            adherence to schedules, ethical values, and disciplined campus
            environment. This has resulted in consistently high student
            enrolment and an impressive record of successful placements. Our
            state-of-the-art facilities, coupled with a team of highly capable
            and qualified professionals, ensure that our students receive the
            best possible education.
          </p>
          <p className="p">
            At B. S. Anangpuria, we cater to students from diverse backgrounds
            by employing a blend of traditional and modern pedagogical tools,
            tailoring our approach to meet their unique needs and requirements.
            We offer two undergraduate programs: a four-year B. Pharm course and
            a two-year D. Pharm course. The B. Pharm program lays a strong
            foundation for students aspiring to build careers in pharmacy, while
            the D. Pharm course prepares graduates to serve as community or
            hospital pharmacists.
          </p>
          <p className="p">
            Drawing from my extensive experience as a pharmaceutical expert and
            academician, I have observed that a solid understanding of
            fundamental concepts is crucial for students to succeed in their
            chosen career paths. To this end, our mission at Anangpuria is to
            instil a deep understanding of basic concepts in our students,
            enabling them to become lifelong learners.
          </p>
        </div>
      </div>
      <div className="photo skeleton">
        <Image src={director} alt=" " />
      </div>
    </div>
  );
};
