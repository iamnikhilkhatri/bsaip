import React from "react";
import "./index.scss";
import Image from "next/image";
import one from "../../../Assets/svg/one.svg";
import two from "../../../Assets/svg/two.svg";
import three from "../../../Assets/svg/three.svg";
import four from "../../../Assets/svg/four.svg";
import five from "../../../Assets/svg/five.svg";
import six from "../../../Assets/svg/six.svg";
import seven from "../../../Assets/svg/seven.svg";
import eight from "../../../Assets/svg/eight.svg";
import nine from "../../../Assets/svg/nine.svg";
import ten from "../../../Assets/svg/ten.svg";
import eleven from "../../../Assets/svg/eleven.svg";
import twelve from "../../../Assets/svg/twelve.svg";
import thirtee from "../../../Assets/svg/thirteen.svg";
import fourteen from "../../../Assets/svg/fourteen.svg";
import fifteen from "../../../Assets/svg/fifteen.svg";
import sixteen from "../../../Assets/svg/sixteen.svg";
import seventeen from "../../../Assets/svg/seventeen.svg";
import eighteen from "../../../Assets/svg/eighteen.svg";
import nineteen from "../../../Assets/svg/nineteen.svg";
import twenty from "../../../Assets/svg/twenty.svg";

export const StudentGallery = () => {
  return (
    <div className="images">
      <div className="left">
        <div className="photo skeleton">
          <Image alt="" loading="lazy" src={one}></Image>
        </div>
        <div className="photo skeleton">
          <Image alt="" loading="lazy" src={two}></Image>
        </div>
        <div className="photo skeleton">
          <Image alt="" loading="lazy" src={three}></Image>
        </div>
        <div className="photo skeleton">
          <Image alt="" loading="lazy" src={four}></Image>
        </div>
        <div className="photo skeleton">
          <Image alt="" loading="lazy" src={five}></Image>
        </div>
        <div className="photo skeleton">
          <Image alt="" loading="lazy" src={six}></Image>
        </div>
      </div>
      <div className="center">
        <div className="photo skeleton">
          <Image alt="" loading="lazy" src={seven}></Image>
        </div>
        <div className="photo skeleton">
          <Image alt="" loading="lazy" src={eight}></Image>
        </div>
        <div className="photo skeleton">
          <Image alt="" loading="lazy" src={nine}></Image>
        </div>
        <div className="photo skeleton">
          <Image alt="" loading="lazy" src={ten}></Image>
        </div>
        <div className="photo skeleton">
          <Image alt="" loading="lazy" src={eleven}></Image>
        </div>
        <div className="photo skeleton">
          <Image alt="" loading="lazy" src={twelve}></Image>
        </div>
        <div className="photo skeleton">
          <Image alt="" loading="lazy" src={thirtee}></Image>
        </div>
        <div className="photo skeleton">
          <Image alt="" loading="lazy" src={fourteen}></Image>
        </div>
      </div>
      <div className="right">
        <div className="photo skeleton">
          <Image alt="" loading="lazy" src={fifteen}></Image>
        </div>
        <div className="photo skeleton">
          <Image alt="" loading="lazy" src={sixteen}></Image>
        </div>
        <div className="photo skeleton">
          <Image alt="" loading="lazy" src={seventeen}></Image>
        </div>
        <div className="photo skeleton">
          <Image alt="" loading="lazy" src={eighteen}></Image>
        </div>
        <div className="photo skeleton">
          <Image alt="" loading="lazy" src={nineteen}></Image>
        </div>
        <div className="photo skeleton">
          <Image alt="" loading="lazy" src={twenty}></Image>
        </div>
      </div>
    </div>
  );
};
