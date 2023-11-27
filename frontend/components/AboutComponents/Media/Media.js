import React from "react";
import Image from "next/image";
import "./index.scss";
import img2 from "../../../Assets/svg/news.svg";
import img from "../../../Assets/svg/media.svg";
export const Media = () => {
  const a = [1, 2, 3, 4];
  return (
    <div className="media">
      <div className="left">
        <div className="photo skeleton">{/* <Image src={img} alt="" /> */}</div>
      </div>
      <div className="right">
        <div className="news-boxs">
          {a.map((e) => {
            return (
              <div className="news-box">
                <div className="photo">
                  {" "}
                  <Image src={img2} alt="" />
                </div>
                <div className="text">
                  <div className="date">
                    <p>10 April, 2023</p>
                  </div>
                  <div className="title">
                    <p>Expert Talk by Dr. Jai Kumar Mishra</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
