"use client";
import React from "react";
import Image from "next/image";
import "./index.scss";
import gmail from "../../../Assets/svg/teachergmail.svg";
import linkdin from "../../../Assets/svg/teacherlinkdin.svg";
import dob from "../../../Assets/svg/teacherdob.svg";
import eq from "../../../Assets/svg/teachereq.svg";
import ids from "../../../Assets/svg/teacherid.svg";
import other from "../../../Assets/svg/other.svg";
import industry from "../../../Assets/svg/industry.svg";
import teaching from "../../../Assets/svg/teaching.svg";
import research from "../../../Assets/svg/research.svg";
import img from "../../../Assets/svg/eachFaculty.svg";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import API_URLS from "../../../api/api";
import axios from "axios";
import { error } from "jquery";

export const EachFaculties = () => {
  const [data, setData] = useState([]);
  const router = useRouter();
  useEffect(() => {
    fetchData();
  }, []);
  const path = usePathname().split("/").pop();
  console.log(path.split("/").pop());
  const redirectTo = (path) => {
    router.push(path);
  };
  const fetchData = () => {
    axios
      .get(`${API_URLS.faculties}?filters[slug]=${path}&populate=*`)
      .then((res) => {
        console.log(res.data.data[0]);
        setData(res.data.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="each-faculties">
      {/* {Object.keys(props.id)} */}
      <div className="content-box">
        <div className="image-box">
          <div className="left">
            <div className="photo">
              <Image
                src={data.attributes?.img.data?.attributes.url}
                width={20}
                height={20}
                unoptimized
                alt=""
              />
            </div>
          </div>
          <div className="right">
            <p className="post">{data.attributes?.position}</p>
            <p className="name">{data.attributes?.name}</p>
            <div className="gmail">
              <div className="photo">
                <Image src={gmail} alt="" />
              </div>
              <a href={`mailto:${data.attributes?.email}`} target="_blank">
                {data.attributes?.email}
              </a>
            </div>
            <div className="linkdin">
              <div className="photo">
                <Image src={linkdin} alt="" />
              </div>
              <a href={data.attributes?.linkedin} target="_blank">
                {data.attributes?.linkedin}
              </a>
            </div>
            <div className="dob">
              <div className="photo">
                <Image src={dob} alt="" />
              </div>
              <p>DOB : {data.attributes?.dob}</p>
            </div>
            <div className="id">
              <div className="photo">
                <Image src={ids} alt="" />
              </div>
              <p>Unique ID : {data.attributes?.uniqid}</p>
            </div>
            <div className="eq">
              <div className="photo">
                <Image src={eq} alt="" />
              </div>
              <p>
                Educational Qualification : {data.attributes?.qualification}
              </p>
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
          {data.attributes?.aos != "NIL" && (
            <p>
              Area of Specialization: <span>{data.attributes?.aos}</span>
            </p>
          )}
          {data.attributes?.coursestaught[0].children[0].text != "NIL" && (
            <p>
              Courses taught at Diploma/ Post Diploma/ Under Graduate/ Post
              Graduate/ Post Graduate Diploma Level:
              <span>{data.attributes?.coursestaught[0].children[0].text} </span>
            </p>
          )}
          {data.attributes?.paperpublished != "NIL" && (
            <p>
              No. of papers published in National/ International Journals/
              Conferences: <span>{data.attributes?.paperpublished}</span>
            </p>
          )}
          {data.attributes?.masters != "NIL" && (
            <p>
              Masters: <span>{data.attributes?.masters}</span>
            </p>
          )}

          {data.attributes?.phd[0].children[0].text != "NIL" && (
            <p>
              Ph. D.: <span>{data.attributes?.phd[0].children[0].text}</span>
            </p>
          )}
          {data.attributes?.projectcarried != "NIL" && (
            <p>
              Projects Carried Out:{" "}
              <span>{data.attributes?.projectcarried}</span>
            </p>
          )}
          {data.attributes?.patents != "NIL" && (
            <p>
              Patents: <span>{data.attributes?.patents}</span>
            </p>
          )}
          {/* {technologytransfer} */}
          {data.attributes?.technologytransfer != "NIL" && (
            <p>
              Technology Transfer:{" "}
              <span>{data.attributes?.technologytransfer}</span>
            </p>
          )}
          {data.attributes?.researchpublications[0].children[0].text !=
            "NIL" && (
            <p>
              Research Publication:{" "}
              <span>
                {data.attributes?.researchpublications[0].children[0].text}
              </span>
            </p>
          )}

          {data.attributes?.nobookspublished != "NIL" && (
            <p>
              No. of Books Published:{" "}
              <span>{data.attributes?.nobookspublished}</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
