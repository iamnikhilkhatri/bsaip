import React from "react";
import "./index.scss";
import Image from "next/image";
import explore from "../../../Assets/svg/explore.svg";
import time from "../../../Assets/svg/time.svg";
import location from "../../../Assets/svg/location.svg";
export const Explore = () => {
  return (
    <div className="explore">
      <div className="text">
        <div className="main-box">
          <h2>Explore the Events</h2>
          <p>
            Reference site about Lorem Ipsum, giving information on its origins,
            as well as a random Lipsum generator.
          </p>
          <div className="points">
            <div className="point">
              <p>Upcoming</p>
            </div>
            <div className="point">
              <p>year 2022-23</p>
            </div>
            <div className="point">
              <p>year 2021-22</p>
            </div>
            <div className="point">
              <p>year 2020-21</p>
            </div>
          </div>
        </div>
      </div>

      <div className="photo">
        <div className="top">
          <Image loading="lazy" src={explore} alt="" />
        </div>
        <div className="btm">
          <h2>
            agendas International Conference on Advancements in Pharmaceutical
            Education and Research
          </h2>
          <div className="time">
            <Image loading="lazy" src={location} alt="" />
            <p>April 26, 2023 - April 28, 2023</p>
          </div>
          <div className="location">
            <Image loading="lazy" src={time} alt="" />
            <p>B. S. Anangpuria Educational Institutes</p>
          </div>
          <button>VIEW MORE</button>
        </div>
      </div>
    </div>
  );
};
