import React, { Component } from "react";
import Slider from "react-slick";
import img from "../../../Assets/svg/tick.svg";
import Image from "next/image";
import "./index.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default class Vedios extends Component {
  render() {
    var settings = {
      //       dots: true,
      infinite: true,
      centerMode: true,
      slidesToShow: 2.311111,

      slidesToScroll: 1,
      responsive: [
        // {
        //   breakpoint: 2500,
        //   settings: {
        //     slidesToScroll: 3,
        //     infinite: true,
        //     slidesToShow: 3,
        //     // dots: true,
        //   },
        // },
        // {
        //   breakpoint: 1199,
        //   settings: {
        //     slidesToShow: 2,
        //     slidesToScroll: 1,
        //     infinite: true,
        //     // dots: true,
        //   },
        // },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="vedios">
        <div className="text-container">
          <div className="heading">
            <h2 className="h21">Why Choose Anangpuria</h2>
            <h2 className="h22">Institute of Pharmacy</h2>
          </div>
          <div className="para">
            <p>
              Choosing the Anangpuria Institute of Pharmacy signifies a
              commitment to excellence and a dedication to shaping the future
              leaders of the pharmaceutical industry. We take pride in offering
              our students an exclusive, high-quality education that sets them
              apart from their peers and prepares them for success in their
              professional lives.
            </p>
          </div>
          <div className="points">
            <div className="ech-pnt">
              <div className="tick">
                <Image src={img} alt="" />
              </div>
              <p>Tailored and intentional Education</p>
            </div>
            <div className="ech-pnt">
              <div className="tick">
                <Image src={img} alt="" />
              </div>
              <p>Comprehensive Student Support Services</p>
            </div>
            <div className="ech-pnt">
              <div className="tick">
                <Image src={img} alt="" />
              </div>
              <p>Networking Opportunities and Industry Connections</p>
            </div>
            <div className="ech-pnt">
              <div className="tick">
                <Image src={img} alt="" />
              </div>
              <p>Prestigious Reputation</p>
            </div>
          </div>
        </div>
        <div className="main-container">
          <Slider {...settings}>
            <div className="continer">
              <div className="text">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/9En0nepqITk?si=gArsYTywNsB6p148"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            </div>

            <div className="continer">
              <div className="text">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/3pZXi_0uF0M?si=hqPyTL6Yn6So738Y"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            </div>

            <div className="continer">
              <div className="text">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/6zZVvdJS_aM?si=94AQi3-pJnVxCRuN"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            </div>

            <div className="continer">
              <div className="text">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/TxyYfREENpY?si=TEtE6tYE84BUjsTw"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
