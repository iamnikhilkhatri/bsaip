"use client";
import { TopArea } from "../../../components/UniversalComponents/toparea/TopArea";
import { Language } from "../../../components/UniversalComponents/languageAndContact/Language";
import React from "react";
import bt from "../../../Assets/svg/bt.svg";
import bn from "../../../Assets/svg/bn.svg";
import { Bpharma } from "../../../components/AcadmicsComponents/Bpharma/Bpharma";
import { BdpObjectives } from "../../../components/UniversalComponents/Bdobjectives/BdObjectives";
import { Boverview } from "../../../components/AcadmicsComponents/Bpharma/Overview";
import { Traditional } from "../../../components/UniversalComponents/Opportunities/Traditional";
import { NonTraditional } from "../../../components/UniversalComponents/Opportunities/NonTraditional";
import { Register } from "../../../components/UniversalComponents/register/Register";
import { Footer } from "../../../components/UniversalComponents/footer/Footer";
import { Benifits } from "../../../components/UniversalComponents/Benefits/Benefits";

const page = () => {
  return (
    <div>
      <Language />
      <TopArea pagename="Academics" moredet="Home   /   Bechelor Of Pharmacy" />
      <Bpharma />
      <BdpObjectives
        h1="Objectives Of"
        h2="Our B.Pharm Program Are To:"
        p1="Impart a solid understanding of the principles and practices of pharmacy, enabling students to excel in various pharmaceutical disciplines."
        p2="Develop critical thinking and problem-solving skills, empowering students to make informed decisions in their professional lives."
        p3="Foster a culture of lifelong learning, encouraging students to stay updated with the latest advancements in the field."
        p4="Cultivate strong ethical values and a sense of social responsibility among students, preparing them to contribute positively to society."
        dp="By offering a blend of theoretical knowledge and practical training, our B.Pharm program ensures that students are well-equipped to excel in the dynamic world of pharmacy."
      />
      <Boverview />
      <Benifits />
      <Traditional
        srct={bt}
        p1={
          "In this field, you can contribute to the discovery and development of new drugs, formulations, or therapeutic approaches."
        }
        p1s={"Pharmaceutical Research and Development (R&D):"}
        p2={
          "Clinical research involves conducting trials to evaluate the safety and efficacy of pharmaceutical products before they reach the market."
        }
        p2s={"Clinical Research:"}
        p3={
          "Regulatory affairs professionals play a crucial role in ensuring that pharmaceutical products comply with applicable regulations and standards. "
        }
        p3s={"Pharmaceutical Regulatory Affairs:"}
      />
      <NonTraditional
        src={bn}
        p1s={"Regulatory Writing:"}
        p1={
          "Involves creating documents for regulatory submissions to health authorities, ensuring compliance with regulatory standards."
        }
        p2s={"Medical Science Liaison (MSL):"}
        p2={
          "Acts as a liaison between pharmaceutical companies and healthcare professionals, providing scientific and clinical information about products."
        }
        p3s={"Healthcare IT and Informatics:"}
        p3={
          "Involves leveraging technology to improve healthcare processes, such as working with electronic health records or health data analysis."
        }
      />
      <Register />
      <Footer />
    </div>
  );
};
export default page;
