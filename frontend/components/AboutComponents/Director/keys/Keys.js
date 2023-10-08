import React from "react";
import Image from "next/image";
import why from "../../../../Assets/svg/bd.svg";
import point from "../../../../Assets/svg/point.svg";
import "../../Principal/objectives/index.scss";
export const Keys = () => {
  return (
    <div className="keys">
      <div className="photo">
        <Image src={why} alt=""></Image>
      </div>
      <div className="text director-text">
        <div className="top">
          <div className="heading">
            <p>key principles that guide our teaching approach</p>
          </div>
          <div className="details">
            <p>
              In our pursuit of academic excellence, we have identified five key
              principles that guide our teaching approach:
            </p>
          </div>
          <div className="points">
            <div className="each-point">
              <Image src={point} alt="point" />
              <p>
                Employ modern pedagogical tools to inspire a
                {` "spirit of enquiry" `}
                and foster lifelong learning among our students.
              </p>
            </div>
            <div className="each-point">
              <Image src={point} alt="point" />
              <p>
                Cultivate strong basic and fundamental concepts through
                interactive teaching, group discussions, assignments,
                brainstorming sessions, and guest lectures from academia and
                industry experts.
              </p>
            </div>
            <div className="each-point">
              <Image src={point} alt="point" />
              <p>
                Systematically impart essential experimental and domain
                knowledge skills based on theoretical and practical syllabi,
                helping students develop a unique selling proposition (USP) in
                their respective specializations.
              </p>
            </div>
            <div className="each-point">
              <Image src={point} alt="point" />
              <p>
                Place emphasis on developing life skills and soft skills through
                formal activities, outdoor visits, and seminars
              </p>
            </div>
            <div className="each-point">
              <Image src={point} alt="point" />
              <p>
                Establish a robust mentor-mentee system to ensure continuous
                progress.
              </p>
            </div>
          </div>
        </div>
        <div className="btm">
          <p>
            I extend my best wishes to all our students for a productive and
            memorable time at B. S. Anangpuria Educational Institutes.
          </p>
          <p>Prof. Roop Krishen Khar</p>
          <p className="special">
            Director <br />
            B. S. Anangpuria Educational Institutes <br />
            Faridabad
          </p>
        </div>
      </div>
    </div>
  );
};
