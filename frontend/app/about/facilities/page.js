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
      <CampusLife />
      <Facilites />
      <Register />
      <Footer />
    </div>
  );
};
export default page;
