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
            Unveiling the Unmatched Journey of our Students at BSAIP – Real
            Voices, Real Success Stories.
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
                  BSAIP College is a hidden gem! The faculty is incredibly
                  supportive, always ready to help. The practical approach to
                  learning sets this college apart, ensuring we're well-prepared
                  for the industry. Highly recommended!"
                </p>
                <p className="name">Sneha Patel</p>
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
                  Attending BSAIP College has been a rewarding journey. The
                  state-of-the-art facilities and industry-experienced
                  professors create an ideal learning environment. Proud to be
                  part of such an enriching academic community."
                </p>
                <p className="name">Rahul Sharma</p>
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
                  I can't praise BSAIP enough! The curriculum is comprehensive,
                  and the emphasis on research and innovation is commendable.
                  The friendly atmosphere makes learning enjoyable. Great place
                  for aspiring pharmaceutical professionals!"
                </p>
                <p className="name">Aishwarya Singh</p>
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
                  Choosing BSAIP College was a game-changer for me. The
                  dedicated placement cell ensures excellent career
                  opportunities. The collaborative spirit among students and
                  faculty fosters a positive and motivating atmosphere.
                </p>
                <p className="name">Karthik Menon</p>
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
                  Impressed with BSAIP College! well-equipped labs and industry
                  partnerships is invaluable. The faculty's passion for teaching
                  reflects in the quality of education. Grateful for the solid
                  foundation for my pharmaceutical career.
                </p>
                <p className="name">Neha Desai</p>
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
