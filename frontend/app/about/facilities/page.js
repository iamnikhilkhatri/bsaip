import { Language } from "../../../components/UniversalComponents/languageAndContact/Language";
import { Facilites } from "../../../components/AboutComponents/FaciltiesAndCampus/Facilites";
import React from "react";
import { Register } from "../../../components/UniversalComponents/register/Register";
import { Footer } from "../../../components/UniversalComponents/footer/Footer";
import { TopArea } from "../../../components/UniversalComponents/toparea/TopArea";
import { CampusLife } from "../../../components/AboutComponents/CampusLife/CampusLife";

// import { Boverview } from "@/components/Acadmics/Bpharma/Overview";
// import { BdpObjectives } from "@/components/UniversalComponents/Bdobjectives/BdObjectives";
// import { Traditional } from "@/components/UniversalComponents/Opportunities/Traditional";
// import { NonTraditional } from "@/components/UniversalComponents/Opportunities/NonTraditional";

const page = () => {
  return (
    <div>
      <Language />
      <TopArea
        pagename="Campus facilities & infrastructure"
        moredet="Home   /   About"
      />
      {/* <Dpharma />
      <Boverview />
      <BdpObjectives />
      <NonTraditional />
      <Traditional />
      <Bpharma /> */}
      <CampusLife h1={"Campus Life at"} h2={"Anangpuria Institute of"} h3={"Pharmacy"} p1={" At Anangpuria Institute of Pharmacy, we understand the importance of providing our students with a vibrant and nurturing campus environment to support their academic pursuits and personal growth. Our campus, located in a serene rural-urban setting, offers state-of-the-art facilities and a multitude of opportunities for students to engage,learn, and grow."} 
      p2={"Anangpuria Institute of Pharmacy is committed to providing a campus experience that fosters personal growth, academic excellence, and the development of strong community bonds. Our vibrant campus life, state-of-the-art facilities, and supportive environment create the ideal setting for students to thrive and succeed in their pharmacy education."}/>
      <Facilites />
      <Register />
      <Footer />
    </div>
  );
};
export default page;
