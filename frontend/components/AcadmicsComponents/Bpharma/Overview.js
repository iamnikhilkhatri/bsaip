import React from "react";
import "./overview.scss";
import img from "../../../Assets/svg/bpharmamap.svg";
import img2 from "../../../Assets/svg/bowl.svg";
import Image from "next/image";
export const Boverview = () => {
  return (
    <div className="boverview">
      <div className="heading">
        <h1>Course Overview</h1>
      </div>
      <div className="photo skeleton ">
        <Image src={img} alt="" />
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
                <p>
                  This subject covers the study of microorganisms and their role
                  in the production, processing, and preservation of drugs.{" "}
                </p>
              </div>
            </div>
            <div class="card">
              <div class="info">
                <h3 class="title">Biochemistry</h3>
                <p>
                  Biochemistry: This subject covers the biochemical basis of
                  human physiology and the role of enzymes, proteins, and
                  nucleic acids in living organisms.
                </p>
              </div>
            </div>
            <div class="card">
              <div class="info">
                <h3 class="title">Pharmacognosy</h3>
                <p>
                  This subject covers the study of medicinal plants and natural
                  products and their use in the preparation of drugs.
                </p>
              </div>
            </div>
            <div class="card">
              <div class="info">
                <h3 class="title"> Pharmaceutics-I</h3>
                <p>
                  This subject covers the fundamentals of pharmacy practice,
                  including the preparation, dispensing, and storage of drugs.
                </p>
              </div>
            </div>

            <div class="card">
              <div class="info">
                <h3 class="title">Pharmaceutical Analysis</h3>
                <p>
                  This subject focuses on the principles and techniques of drug
                  analysis, including the analysis of pharmaceuticals using
                  various analytical methods.
                </p>
              </div>
            </div>
            <div class="card">
              <div class="info">
                <h3 class="title"> Human Anatomy and Physiology</h3>
                <p>
                  This subject covers the structure and functions of the human
                  body, including the various organs and systems.
                </p>
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
                <h3 class="title2"> Pharmaceutical Organic Chemistry</h3>
                <p>
                  This subject covers the study of organic chemistry as it
                  relates to drug development and design.
                </p>
              </div>
            </div>
            <div class="card">
              <div class="info">
                <h3 class="title2">Pharmaceutical Inorganic Chemistry</h3>
                <p>
                  This subject covers the study of inorganic chemistry as it
                  relates to drug development and design.
                </p>
              </div>
            </div>
            <div class="card">
              <div class="info">
                <h3 class="title2">Physical Pharmaceutics</h3>
                <p>
                  This subject covers the principles and techniques of drug
                  formulation and delivery, including the physicochemical
                  properties of drugs and their effect on dosage form design.
                </p>
              </div>
            </div>
            <div class="card">
              <div class="info">
                <h3 class="title2"> Pharmacology</h3>
                <p>
                  This subject covers the study of drugs and their effects on
                  the body, including the mechanisms of action and adverse
                  effects of drugs.
                </p>
              </div>
            </div>

            <div class="card">
              <div class="info">
                <h3 class="title2"> Pharmacognosy and Phytochemistry</h3>
                <p>
                  This subject covers the study of plant-derived drugs and their
                  isolation, identification, and characterisation.
                </p>
              </div>
            </div>
            <div class="card">
              <div class="info">
                <h3 class="title2"> Computer Applications in Pharmacy</h3>
                <p>
                  This subject covers the use of computers and software in
                  pharmacy practice, including drug information management and
                  analysis.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="timeline">
          <div class="outer">
            <div className="year">
              <h4>3 YEAR</h4>
            </div>
            <div class="card">
              <div class="info">
                <h3 class="title3"> Clinical Research and Bio-Statistics</h3>
                <p>
                  This subject covers the principles and techniques of clinical
                  research, including the design and conduct of clinical trials
                  and the analysis of clinical data.
                </p>
              </div>
            </div>
            <div class="card">
              <div class="info">
                <h3 class="title3"> Pharmacotherapy</h3>
                <p>
                  This subject covers the principles and techniques of drug
                  therapy and the management of various diseases using drugs.
                </p>
              </div>
            </div>
            <div class="card">
              <div class="info">
                <h3 class="title3"> Pharmacology and Toxicology</h3>
                <p>
                  This subject covers the study of drugs and their effects on
                  the body, including the mechanisms of action and adverse
                  effects of drugs.
                </p>
              </div>
            </div>
            <div class="card">
              <div class="info">
                <h3 class="title3"> Pharmaceutical Engineering</h3>
                <p>
                  This subject covers the principles and techniques of drug
                  formulation and delivery, including the design and development
                  of drug delivery systems.
                </p>
              </div>
            </div>

            <div class="card">
              <div class="info">
                <h3 class="title3"> Pharmaceutical Biotechnology</h3>
                <p>
                  This subject covers the use of biotechnology in drug
                  development and design, including the production of
                  recombinant proteins and monoclonal antibodies.
                </p>
              </div>
            </div>
            <div class="card">
              <div class="info">
                <h3 class="title3"> Medicinal Chemistry</h3>
                <p>
                  This subject covers the principles and techniques of drug
                  design and development, including the synthesis and evaluation
                  of new drugs.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="timeline">
          <div class="outer">
            <div className="year">
              <h4>4 YEAR</h4>
            </div>
            <div class="card">
              <div class="info">
                <h3 class="title4"> Pharmaceutical Management</h3>
                <p>
                  This subject covers the principles and techniques of pharmacy
                  management, including inventory control, financial management,
                  and marketing.
                </p>
              </div>
            </div>

            <div class="card">
              <div class="info">
                <h3 class="title4"> Pharmaceutical Marketing</h3>
                <p>
                  This subject covers the principles and techniques of
                  pharmaceutical marketing, including market research, product
                  promotion, and distribution.
                </p>
              </div>
            </div>

            <div class="card">
              <div class="info">
                <h3 class="title4"> Regulatory Affairs</h3>
                <p>
                  This subject covers the laws and regulations governing the
                  production, marketing, and distribution of drugs, including
                  drug control laws and regulations.
                </p>
              </div>
            </div>
            <div class="card">
              <div class="info">
                <h3 class="title4"> Pharmaceutical Quality Assurance</h3>
                <p>
                  This subject covers the principles and techniques of quality
                  control and assurance in pharmaceutical production, including
                  the design and implementation of quality management systems.
                </p>
              </div>
            </div>

            <div class="card">
              <div class="info">
                <h3 class="title4"> Pharmaceutical Formulation Development</h3>
                <p>
                  This subject covers the design and development of various drug
                  dosage forms, including tablets, capsules, and parenteral
                  products.
                </p>
              </div>
            </div>
            <div class="card">
              <div class="info">
                <h3 class="title4"> Industrial Pharmacy</h3>
                <p>
                  This subject covers the principles and techniques of
                  pharmaceutical production and manufacturing, including the
                  development and scale-up of drug manufacturing processes.
                </p>
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
