"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { useState } from "react";
import "./index.scss";
import img from "../../../Assets/svg/f1.svg";
import mail from "../../../Assets/svg/teachergmail.svg";
import Link from "next/link";
import linkdin from "../../../Assets/svg/teacherlinkdin.svg";

import { useRouter } from "next/navigation";
import axios from "axios";

import API_URLS from "../../../api/api";

// import { Context } from "../../../app/[locale]/context/Mycontext";
export const Faculties = ({ id, setId }) => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
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

  const router = useRouter();
  return (
    <div className="faculties">
      <div className="images">
        {data.map((e, index) => {
          return (
            <div key={index} className="each-box">
              <div className="bg"></div>
              <div className="image-box">
                <Link href={`/about/ourFaculties/${e.attributes.slug}`}>
                  <div
                    className="photo"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      router.push(`/about/ourFaculties/${e.attributes.slug}`);
                    }}
                  >
                    {/* e.attributes.img.data.attributes.urlclez */}
                    <Image
                      src={e.attributes.img.data?.attributes.url}
                      width={20}
                      height={20}
                      unoptimized
                      alt=""
                    />
                  </div>
                </Link>
                <div className="text">
                  <div className="details">
                    <p className="name" style={{ textTransform: "capitalize" }}>
                      {e.attributes.name}
                    </p>
                    <p className="position">{e.attributes.position}</p>
                  </div>
                  <div className="contact">
                    <div className="mail">
                      <a href={`mailto:${e.attributes.email}`} target="_blank">
                        <Image src={mail} alt="" />
                      </a>
                    </div>
                    <div className="linkdin">
                      <a href={e.attributes.linkedin} target="_blank">
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
