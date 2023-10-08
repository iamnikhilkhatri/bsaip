import React, { Component } from "react";
import Slider from "react-slick";
import "./index.scss";
import Image from "next/image";

import left from "../../../Assets/svg/left2.svg";
import right from "../../../Assets/svg/right2.svg";
import faculty1 from "../../../Assets/svg/faculty1.svg";
import faculty2 from "../../../Assets/svg/faculty2.svg";
import faculty3 from "../../../Assets/svg/faculty3.svg";
export default class Management extends Component {
  render() {
    var settings = {
      // dots: true,
      infinite: true,
      //       autoplay: true,
      autoplaySpeed: 3000,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 2500,
          settings: {
            // slidesToShow: props.course.length > 3 ? 3 : props.course.length,
            slidesToScroll: 1,
            infinite: true,

            // dots: true,
          },
        },
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="management">
        <div className="heading">
          <h1 className="heading">Our Management Team</h1>
          <p className="subheading">
            Reference site about Lorem Ipsum, giving information on its origins,
            as well as a random Lipsum generator.
          </p>
        </div>
        <div className="faculties">
          <div className="container">
            <Slider {...settings}>
              <div className="content">
                <div className="main-box">
                  <div className="bg"></div>
                  <div className="photo">
                    <Image src={faculty1} alt="" />
                    <div className="name">
                      <p>Nikhil</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="content">
                <div className="main-box">
                  <div className="bg"></div>
                  <div className="photo">
                    <Image src={faculty2} alt="" />
                    <div className="name">
                      <p>Nikhil</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="content">
                <div className="main-box">
                  <div className="bg"></div>
                  <div className="photo">
                    <Image src={faculty3} alt="" />
                    <div className="name">
                      <p>Nikhil</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="content">
                <div className="main-box">
                  <div className="bg"></div>
                  <div className="photo">
                    <Image src={faculty1} alt="" />
                    <div className="name">
                      <p>Nikhil</p>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
        <div className="slider-movers">
          <div className="left">
            <Image src={left} alt="" />
          </div>
          <div className="right">
            <Image src={right} alt="" />
          </div>
        </div>
      </div>
    );
  }
}
