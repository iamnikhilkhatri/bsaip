"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { useState } from "react";
import "./index.scss";
import img from "../../../Assets/svg/f1.svg";
import mail from "../../../Assets/svg/teachergmail.svg";
import linkdin from "../../../Assets/svg/teacherlinkdin.svg";
import { useContext } from "react";
import { useRouter } from "next/navigation";

// import { Context } from "../../../app/[locale]/context/Mycontext";
export const Faculties = ({ id, setId }) => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const router = useRouter();
  return (
    <div className="faculties">
      <div className="images">
        {arr.map((e, index) => {
          return (
            <div
              key={index}
              style={{ cursor: "pointer" }}
              onClick={() => {
                router.push("/about/ourFaculties/moreDetails");
                setId(e);
              }}
              className="each-box"
            >
              <div className="bg"></div>
              <div className="image-box">
                <div className="photo">
                  <Image src={img} alt="" />
                </div>
                <div className="text">
                  <div className="details">
                    <p className="name">Dr. Madhuri Grover</p>
                    <p className="position">Associate Professor</p>
                  </div>
                  <div className="contact">
                    <div className="mail">
                      <a href="">
                        <Image src={mail} alt="" />
                      </a>
                    </div>
                    <div className="linkdin">
                      <a href="">
                        <Image src={linkdin} alt="" />{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
