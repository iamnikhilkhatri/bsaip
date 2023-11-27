import React, { Component } from "react";
import Slider from "react-slick";
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
      //       responsive: [
      //         {
      //           breakpoint: 2500,
      //           settings: {
      //             // slidesToShow: props.course.length > 3 ? 3 : props.course.length,
      //             slidesToScroll: 3,
      //             infinite: true,
      //             slidesToShow: 3,
      //             // dots: true,
      //           },
      //         },
      //         {
      //           breakpoint: 1199,
      //           settings: {
      //             slidesToShow: 2,
      //             slidesToScroll: 1,
      //             infinite: true,
      //             dots: true,
      //           },
      //         },
      //         {
      //           breakpoint: 991,
      //           settings: {
      //             slidesToShow: 2,
      //             slidesToScroll: 1,
      //             initialSlide: 1,
      //           },
      //         },
      //         {
      //           breakpoint: 600,
      //           settings: {
      //             slidesToShow: 1,
      //             slidesToScroll: 1,
      //           },
      //         },
      //       ],
    };
    return (
      <div className="vedios">
        <div className="main-container">
          <Slider {...settings}>
            <div className="continer">
              <div className="text">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/O3Jy4yovMCM?si=2Y4GCKqZcM4VLq98"
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
                  src="https://www.youtube.com/embed/gxccMCgh5y8?si=yWqgfb-OMSrdPX76"
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
                  src="https://www.youtube.com/embed/QXJyMpxd210?si=v8oiKzZWDj8BND-q"
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
                  src="https://www.youtube.com/embed/k_T-LFrTR4E?si=Z_5uSHlbrWWV8QDL"
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
