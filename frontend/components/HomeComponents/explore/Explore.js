import React from "react";
import "./index.scss";
import Image from "next/image";
import explore from "../../../Assets/svg/explore.png";
import { useState } from "react";
import time from "../../../Assets/svg/time.svg";
import location from "../../../Assets/svg/location.svg";
export const Explore = () => {
  const [id, setid] = useState(1);
  const eventdata = [
    {
      id: 1,
      img: explore,
      heading:
        "agendas International Conference on Advancements in Pharmaceutical Education and Research",
      date: "April 26, 2023 - April 28, 2023",
      location: "B. S. Anangpuria Educational Institutes",
    },
    {
      id: 2,
      img: explore,
      heading: "APOLLO PHARMACY CAMPUS DRIVE",
      date: "March 30,2018",
      location: "B. S. Anangpuria Educational Institutes",
    },
    {
      id: 3,
      img: explore,
      heading: "Inter College Achievements",
      date: "Jan 11,2016",
      location: "B. S. Anangpuria Educational Institutes",
    },
    {
      id: 4,
      img: explore,
      heading: "IDS Drive Infotech",
      date: "Jan 2,2018",
      location: "B. S. Anangpuria Educational Institutes",
    },
  ];
  return (
    <div className="explore">
      <div className="text">
        <div className="main-box">
          <h2>Explore the Events</h2>
          <p>
            Embark on a journey through upcoming events, where every moment
            holds the promise of excitement and new experiences.
          </p>
          <div className="points">
            <div
              className="point"
              onClick={() => {
                setid(1);
              }}
            >
              <p>Upcoming</p>{" "}
              <div
                className="outer"
                style={
                  id === 1
                    ? { border: " 1px solid #F8EE00" }
                    : { border: "1px solid #979797" }
                }
              >
                <div
                  className="inner"
                  style={
                    id === 1
                      ? { background: "#2F6672" }
                      : { background: "#979797" }
                  }
                ></div>
              </div>
            </div>
            <div
              className="point"
              onClick={() => {
                setid(2);
              }}
            >
              <p>year 2022-23</p>{" "}
              <div
                className="outer"
                style={
                  id === 2
                    ? { border: " 1px solid #F8EE00" }
                    : { border: "1px solid #979797" }
                }
              >
                <div
                  className="inner"
                  style={
                    id === 2
                      ? { background: "#2F6672" }
                      : { background: "#979797" }
                  }
                ></div>
              </div>
            </div>
            <div
              className="point"
              onClick={() => {
                setid(3);
              }}
            >
              <p>year 2021-22</p>{" "}
              <div
                className="outer"
                style={
                  id === 3
                    ? { border: " 1px solid #F8EE00" }
                    : { border: "1px solid #979797" }
                }
              >
                <div
                  className="inner"
                  style={
                    id === 3
                      ? { background: "#2F6672" }
                      : { background: "#979797" }
                  }
                ></div>
              </div>
            </div>
            <div
              className="point"
              onClick={() => {
                setid(4);
              }}
            >
              <p>year 2020-21</p>{" "}
              <div
                className="outer"
                style={
                  id === 4
                    ? { border: " 1px solid #F8EE00" }
                    : { border: "1px solid #979797" }
                }
              >
                <div
                  className="inner"
                  style={
                    id === 4
                      ? { background: "#2F6672" }
                      : { background: "#979797" }
                  }
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {eventdata.map((e) => {
        if (e.id === id) {
          return (
            <div
              className="photo"
              key={e.id}
              data-aos="flip-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
            >
              <div className="top skeleton">
                <Image loading="lazy" src={explore} alt="" unoptimized />
              </div>
              <div className="btm">
                <h2>{e.heading}</h2>
                <div className="time">
                  <Image loading="lazy" src={location} alt="" />
                  <p>{e.date}</p>
                </div>
                <div className="location">
                  <Image loading="lazy" src={time} alt="" />
                  <p>{e.location}</p>
                </div>
                <button>VIEW MORE</button>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};
