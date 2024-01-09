"use client";
import React from "react";
import Image from "next/image";
import img1 from "../../../Assets/images/blgar.png";
import img2 from "../../../Assets/images/blogf.svg";
import img3 from "../../../Assets/images/blogins.svg";
import img4 from "../../../Assets/images/blogt.svg";
import img5 from "../../../Assets/images/blogyou.svg";
import img6 from "../../../Assets/images/blog.png";
import img7 from "../../../Assets/images/blgsear.png";
import img8 from "../../../Assets/svg/news.svg";
import { Recent } from "../Recent/Recent";
import { useState } from "react";
import "./index.scss";
const Eachblog = () => {
  const a = [1, 2, 3, 4];
  const [search, setSearch] = useState(false);
  return (
    <div className="eachblog">
      <div className="eachblog-toparea">
        <div className="eachblog-right">
          {/* <div className="heading-area"></div> */}
          <div className="btm-area">
            <div className="headings">
              <p>26 April, 2023</p>
              <h2>
                International Conference on<br></br> Advancements in
                Pharmaceutical <br />
                Education and Research
              </h2>
            </div>
            <div className="img-scroller">
              <Image src={img6} alt="img" unoptimized />
            </div>
            <div className="content">
              <p>
                The B.S. Anangpuria Institute of Pharmacy, Faridabad, recently
                convened an international conference in collaboration with
                APTI-Haryana State Branch and IPA-Delhi State Branch on April
                26, 2023. The conference was primarily focused on the topic,
                “Advancements in Pharmaceutical Education & Research: Current
                Insight into Molecular Biology Techniques.” Esteemed speakers at
                the conference included Professor (Dr.) Kylie Williams, Head of
                Discipline for Pharmacy at the University of Technology, Sydney,
                Australia; Professor (Dr.) Brian Oliver, Associate Head of
                School for Research at the School of Life Sciences, University
                of Technology, Sydney, Australia; and Dr. Kamal Dua, Senior
                Lecturer in the Department of Pharmacy at the University of
                Technology, Sydney, Australia. The conference was held in both
                in-person and online modes, attracting a total of 650 delegates
                from across India.
                <br />
                <br /> This conference aimed to provide a platform for leading
                experts in the field of pharmaceutical education and research to
                share their latest research findings, as well as their insights
                on the current trends and advancements in molecular biology
                techniques. The focus of the conference was on discussing the
                latest tools and techniques used in molecular biology research
                that have the potential to revolutionize pharmaceutical
                education and research. <br />
                <br />
                The conference covered a wide range of topics, including the
                latest developments in drug discovery, personalized medicine,
                genetic engineering, and other areas related to molecular
                biology techniques. Attendees had the opportunity to learn about
                cutting-edge research and engage in discussions with some of the
                top minds in the field. <br /> <br />
                Overall, the conference aimed to promote collaboration and
                knowledge-sharing among researchers, educators, and students in
                the pharmaceutical industry and to inspire further advancements
                in the field of pharmaceutical education and research.
              </p>
            </div>
            <div className="share">
              <p>share:</p>
              <div className="icon-box">
                <Image src={img2} unoptimized alt="img" />
                <Image src={img3} unoptimized alt="img" />
                <Image src={img4} unoptimized alt="img" />
                <Image src={img5} unoptimized alt="img" />
              </div>
            </div>
          </div>
        </div>

        <div className="eachblog-left">
          <div className="search-nd-category">
            <div className="search">
              <p>search</p>
              {search && (
                <div className="input-box">
                  <input type="text" />
                  <i
                    onClick={() => {
                      setSearch(!search);
                    }}
                    class="fa-solid fa-xmark fa-bounce"
                    style={{ color: "#000000", cursor: "pointer" }}
                  ></i>
                </div>
              )}
              {!search && (
                <div
                  onClick={() => {
                    setSearch(!search);
                  }}
                >
                  <i
                    class="fa-solid fa-magnifying-glass fa-bounce"
                    style={{ color: "#000000", cursor: "pointer" }}
                  ></i>{" "}
                </div>
              )}
            </div>
            <div className="category">
              <h3>Categories</h3>
              <ul>
                <li>
                  <p>Leadership</p>
                  <Image src={img1} unoptimized></Image>
                </li>
                <li>
                  <p>Learning Pedagogy</p>
                  <Image src={img1} unoptimized></Image>
                </li>
                <li>
                  <p>Career Options</p>
                  <Image src={img1} unoptimized></Image>
                </li>
                <li>
                  <p>Placements</p>
                  <Image src={img1} unoptimized></Image>
                </li>
                <li>
                  <p>Admission</p>
                  <Image src={img1} unoptimized></Image>
                </li>
                <li>
                  <p>About Us</p>
                  <Image src={img1} unoptimized></Image>
                </li>
              </ul>
            </div>
          </div>
          <div className="news-boxs">
            <h3>RECENT POSTS</h3>
            {a.map((e, index) => {
              return (
                <div className="news-box" key={index}>
                  <div className="photo">
                    {" "}
                    <Image src={img8} alt="" />
                  </div>
                  <div className="text">
                    <div className="date">
                      <p>10 April, 2023</p>
                    </div>
                    <div className="title">
                      <p>Expert Talk by Dr. Jai Kumar Mishra</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="eachblog-btmarea">
        <Recent />
      </div>
    </div>
  );
};

export default Eachblog;
