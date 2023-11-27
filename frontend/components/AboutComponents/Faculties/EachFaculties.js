"use client";
import React from "react";
import Image from "next/image";
import "./index.scss";
import gmail from "../../../Assets/svg/teachergmail.svg";
import linkdin from "../../../Assets/svg/teacherlinkdin.svg";
import dob from "../../../Assets/svg/teacherdob.svg";
import eq from "../../../Assets/svg/teachereq.svg";
import id from "../../../Assets/svg/teacherid.svg";
import other from "../../../Assets/svg/other.svg";
import industry from "../../../Assets/svg/industry.svg";
import teaching from "../../../Assets/svg/teaching.svg";
import research from "../../../Assets/svg/research.svg";
import img from "../../../Assets/svg/eachFaculty.svg";
import { useEffect } from "react";
export const EachFaculties = (props) => {
  console.log(props.id);

  useEffect(() => {
    localStorage.setItem("ID", JSON.stringify(props.id));
  }, []);
  return (
    <div className="each-faculties">
      <div className="content-box">
        <div className="image-box">
          <div className="left">
            <div className="photo">
              <Image src={img} alt="" />
            </div>
          </div>
          <div className="right">
            <p className="post">Associate Professor</p>
            <p className="name">Dr. Madhuri Grover</p>
            <div className="gmail">
              <div className="photo">
                <Image src={gmail} alt="" />
              </div>
              <a href="">madhuri.grover@faculty.anangpuria.com</a>
            </div>
            <div className="linkdin">
              <div className="photo">
                <Image src={linkdin} alt="" />
              </div>
              <a href="">http://www.linkedin.com/in/madhuri-grover-398807165</a>
            </div>
            <div className="dob">
              <div className="photo">
                <Image src={dob} alt="" />
              </div>
              <p>DOB : 17/04/1989</p>
            </div>
            <div className="id">
              <div className="photo">
                <Image src={id} alt="" />
              </div>
              <p>Unique ID : 717793292470</p>
            </div>
            <div className="eq">
              <div className="photo">
                <Image src={eq} alt="" />
              </div>
              <p>Educational Qualification : Ph.D</p>
            </div>
            <div className="experience">
              <h1>Experience (Years)</h1>
              <div className="boxs">
                <div className="each-box">
                  <div className="top">
                    <div className="photo">
                      <Image src={research} alt="" />
                    </div>
                    <p>Research</p>
                  </div>
                  <div className="btm">
                    <p>0</p>
                  </div>
                </div>
                <div className="each-box">
                  <div className="top">
                    <div className="photo">
                      <Image src={teaching} alt="" />
                    </div>
                    <p>Teachig</p>
                  </div>
                  <div className="btm">
                    <p>11/01</p>
                  </div>
                </div>
                <div className="each-box">
                  <div className="top">
                    <div className="photo">
                      <Image src={industry} alt="" />
                    </div>
                    <p>Industry</p>
                  </div>
                  <div className="btm">
                    <p>0</p>
                  </div>
                </div>
                <div className="each-box">
                  <div className="top">
                    <div className="photo">
                      <Image src={other} alt="" />
                    </div>
                    <p>Other</p>
                  </div>
                  <div className="btm">
                    <p>No</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="detail-box">
          <p>
            Area of Specialization: <span>Pharmacology</span>
          </p>
          <p>
            Courses taught at Diploma/ Post Diploma/ Under Graduate/ Post
            Graduate/ Post Graduate Diploma Level:
            <span> D. Pharmacy & B.Pharmacy</span>
          </p>
          <p>
            No. of papers published in National/ International Journals/
            Conferences: <span>14</span>
          </p>
          <p>
            Masters: <span>Nil</span>
          </p>
          <p>
            Ph. D.: <span>Nil</span>
          </p>
          <p>
            Projects Carried Out: <span>04</span>
          </p>
          <p>
            Patents: <span>Nil</span>
          </p>
          <p>
            Technology Transfer: <span>Nil</span>
          </p>
          <p>
            Research Publication: <span>06</span>
          </p>
          <p>
            No. of Books Published: <span>04</span>
          </p>
        </div>
      </div>
    </div>
  );
};
