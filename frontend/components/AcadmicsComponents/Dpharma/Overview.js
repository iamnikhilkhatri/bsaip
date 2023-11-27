import React from "react";
import Image from "next/image";
import "./overview.scss";
import img1 from "../../../Assets/svg/dpharmamap.svg";
import img2 from "../../../Assets/svg/dowl.svg";
import "./index.scss";
export const Doverview = () => {
  return (
    <div className="doverview">
      <div className="heading">
        <h1>Course Overview</h1>
      </div>
      <div className="photo skeleton">
        <Image src={img1} alt="" />
      </div>

      <div className="timeline-box">
        <div class="timeline">
          <div class="outer">
            <div className="year">
              <h4>1 YEAR</h4>
            </div>
            <div class="card">
              <div class="info">
                <h3 class="title">Pharmaceutical Microbiology</h3>
                {/* <p>Health Education and Community Pharmacy</p> */}
              </div>
            </div>
            <div class="card">
              <div class="info">
                <h3 class="title">Biochemistry and Clinical Pathology</h3>
                {/* <p>Biochemistry and Clinical Pathology</p> */}
              </div>
            </div>
            <div class="card">
              <div class="info">
                <h3 class="title">Pharmacognosy</h3>
                {/* <p>Pharmacognosy</p> */}
              </div>
            </div>
            <div class="card">
              <div class="info">
                <h3 class="title"> Pharmaceutics-I</h3>
                {/* <p>Pharmaceutics-I</p> */}
              </div>
            </div>

            <div class="card">
              <div class="info">
                <h3 class="title">Pharmaceutical Chemistry-I</h3>
                {/* <p>Pharmaceutical Chemistry-I</p> */}
              </div>
            </div>
            <div class="card">
              <div class="info">
                <h3 class="title"> Human Anatomy and Physiology</h3>
                {/* <p>Human Anatomy and Physiology</p> */}
              </div>
            </div>
          </div>
        </div>

        <div class="timeline">
          <div class="outer">
            <div className="year">
              <h4>2 YEAR</h4>
            </div>
            <div class="card">
              <div class="info">
                <h3 class="title2"> Pharmacology and Toxicology</h3>
                {/* <p>Pharmacology and Toxicology</p> */}
              </div>
            </div>
            <div class="card">
              <div class="info">
                <h3 class="title2">Pharmaceutical Chemistry-II</h3>
                {/* <p>Pharmaceutical Chemistry-II</p> */}
              </div>
            </div>
            <div class="card">
              <div class="info">
                <h3 class="title2">Pharmaceutics-II</h3>
                {/* <p>Pharmaceutics-II</p> */}
              </div>
            </div>
            <div class="card">
              <div class="info">
                <h3 class="title2"> Pharmaceutical Jurisprudence</h3>
                {/* <p>Pharmaceutical Jurisprudence</p> */}
              </div>
            </div>

            <div class="card">
              <div class="info">
                <h3 class="title2"> Drug Store and Business Management</h3>
                {/* <p>Drug Store and Business Management</p> */}
              </div>
            </div>
            <div class="card">
              <div class="info">
                <h3 class="title2"> Hospital and Clinical Pharmacy</h3>
                {/* <p>Hospital and Clinical Pharmacy</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="owlphoto">
        <Image src={img2} alt="" />
      </div>
    </div>
  );
};
