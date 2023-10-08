import React, { Component } from "react";
import Slider from "react-slick";
import "./index.scss";
import { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default class Vedios extends Component {
  render() {
    const settings = {
      centerMode: true,
      infinite: true,
      centerPadding: "0",
      slidesToShow: 3,
      speed: 500,
      focusOnSelect: true,
    };
    return (
      <div className="vedios">
        <h2>Center Mode</h2>
        <Slider {...settings}>
          <div className="custom-slide">
            <div className="link">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/wAnODJsK1hQ?si=u_6eYJsAsYHUMktV"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <div className="custom-slide">
            <div className="link">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/ZgzdjkhTI-Q?si=28Bxv6Q855qx6UIs"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>{" "}
          </div>
          <div className="custom-slide">
            <div className="link">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/7Z-zSY400Gc?si=Jd6U5u3OM7-aNYpP"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>{" "}
          </div>
          <div className="custom-slide">
            <div className="link">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/XSUAbB0yi6E?si=UVCaSgePz0gTEurF"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
