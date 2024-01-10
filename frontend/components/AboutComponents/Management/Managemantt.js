import React, { Component } from "react";
import Slider from "react-slick";
import { useEffect } from "react";
import { useState } from "react";
import API_URLS from "../../../api/api";
import axios from "axios";
import "./index.scss";
import Image from "next/image";
import Link from "next/link";
import left from "../../../Assets/svg/left2.svg";
import right from "../../../Assets/svg/right2.svg";
import faculty1 from "../../../Assets/svg/faculty1.svg";
import faculty2 from "../../../Assets/svg/faculty2.svg";
import faculty3 from "../../../Assets/svg/faculty3.svg";
const Management = () => {
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
  useEffect(() => {
    fetchdata();
  }, []);
  const [data, setData] = useState([]);
  const fetchdata = () => {
    axios
      .get(
        `${API_URLS.faculties}?pagination[page]=1&pagination[pageSize]=100&populate=*`
      )
      .then((res) => {
        console.log(res);
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="management">
      <div className="heading">
        <h1 className="heading">Our Faculties</h1>
      </div>
      <div className="faculties">
        <div className="container">
          <Slider {...settings}>
            {data.map((e, index) => {
              return (
                <div key={index} className="content">
                  <div className="main-box">
                    <div className="bg"></div>
                    <div className="photo">
                      <div style={{ width: "74%" }} className="skeleton">
                        <Image
                          src={e.attributes.img.data?.attributes.url}
                          width={20}
                          height={20}
                          unoptimized
                          alt=""
                        />
                      </div>
                      <div className="name">
                        <p>{e.attributes.name}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
        <div className="viewmore">
          <Link href="/about/ourFaculties">VIEW ALL</Link>
        </div>
      </div>
      <div className="slider-movers-left">
        <div className="left">
          <Image src={left} alt="" />
        </div>
      </div>
      <div className="slider-movers-right">
        <div className="right ">
          <Image src={right} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Management;
