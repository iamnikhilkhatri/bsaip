import React, { Component } from "react";
import Slider from "react-slick";
import "./index.scss";
import Image from "next/image";
import stars from "../../../Assets/svg/stars.svg";
import right from "../../../Assets/svg/right.svg";
import left from "../../../Assets/svg/left.svg";
import person from "../../../Assets/svg/person.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default class Reviews extends Component {
  render() {
    var settings = {
      // dots: true,
      infinite: true,
      // autoplay: true,
      autoplaySpeed: 3000,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 2500,
          settings: {
            // slidesToShow: props.course.length > 3 ? 3 : props.course.length,
            slidesToScroll: 1,
            infinite: true,
            slidesToShow: 4,
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
      <div className="reviews">
        <div className="content">
          <h2> Hear Our Students Words</h2>
          <p className="subheading">
            Reference site about Lorem Ipsum, giving information on its origins,
            as well as a random Lipsum generator.
          </p>
          <Slider {...settings}>
            <div className="continer">
              <div className="text">
                <div className="person">
                  <Image loading="lazy" src={person} alt="" />
                </div>
                <div className="stars">
                  <Image loading="lazy" src={stars} alt="" />
                </div>
                <p>
                  Reference site about Lorem Ipsum, giving information on its
                  origins, as well as a random Lipsum generator Reference site
                  about Lorem Ipsum, giving information on its origins, as well
                  as a random Lipsum generator.
                </p>
                <p className="name">Nikhil</p>
              </div>
            </div>

            <div className="continer">
              <div className="text">
                <div className="perosn">
                  <Image loading="lazy" src={person} alt="" />
                </div>
                <div className="stars">
                  <Image loading="lazy" src={stars} alt="" />
                </div>
                <p>
                  Reference site about Lorem Ipsum, giving information on its
                  origins, as well as a random Lipsum generator Reference site
                  about Lorem Ipsum, giving information on its origins, as well
                  as a random Lipsum generator.
                </p>
                <p className="name">Nikhil</p>
              </div>
            </div>

            <div className="continer">
              <div className="text">
                <div className="perosn">
                  <Image loading="lazy" src={person} alt="" />
                </div>
                <div className="stars">
                  <Image loading="lazy" src={stars} alt="" />
                </div>
                <p>
                  Reference site about Lorem Ipsum, giving information on its
                  origins, as well as a random Lipsum generator Reference site
                  about Lorem Ipsum, giving information on its origins, as well
                  as a random Lipsum generator.
                </p>
                <p className="name">Nikhil</p>
              </div>
            </div>

            <div className="continer">
              <div className="text">
                <div className="perosn">
                  <Image loading="lazy" src={person} alt="" />
                </div>
                <div className="stars">
                  <Image loading="lazy" src={stars} alt="" />
                </div>
                <p>
                  Reference site about Lorem Ipsum, giving information on its
                  origins, as well as a random Lipsum generator Reference site
                  about Lorem Ipsum, giving information on its origins, as well
                  as a random Lipsum generator.
                </p>
                <p className="name">Nikhil</p>
              </div>
            </div>
            <div className="continer">
              <div className="text">
                <div className="perosn">
                  <Image loading="lazy" src={person} alt="" />
                </div>
                <div className="stars">
                  <Image loading="lazy" src={stars} alt="" />
                </div>
                <p>
                  Reference site about Lorem Ipsum, giving information on its
                  origins, as well as a random Lipsum generator Reference site
                  about Lorem Ipsum, giving information on its origins, as well
                  as a random Lipsum generator.
                </p>
                <p className="name">Nikhil</p>
              </div>
            </div>
          </Slider>
          <div className="slider-movers">
            <div className="buttons">
              <div className="left">
                <Image loading="lazy" src={left} alt="" />
              </div>
              <div className="right">
                <Image loading="lazy" src={right} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
