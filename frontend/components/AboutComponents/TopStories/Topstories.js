import React from "react";
import "./index.scss";
import Image from "next/image";
import img from "../../../Assets/svg/topst.svg";
export const Topstories = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="topst">
      <div className="content-box">
        <div className="heading">
          <h1>Top stories</h1>
        </div>
        <div className="stories">
          <div className="news-boxs">
            {arr.map((e, index) => {
              return (
                <div className="news-box" key={index}>
                  <div className="photo">
                    <Image src={img} alt="" />
                  </div>
                  <div className="text">
                    <div className="title">
                      <p>Inauguration Function of National Pharmacy Week</p>
                    </div>
                    <div className="details">
                      <p>2K Views 2 Days ago</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
