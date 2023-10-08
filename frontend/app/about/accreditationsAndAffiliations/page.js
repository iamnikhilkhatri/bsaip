import { Excellence } from "@/components/AboutComponents/Exellence/Excellence";
import { Language } from "../../../components/UniversalComponents/languageAndContact/Language";
import { TopArea } from "../../../components/UniversalComponents/toparea/TopArea";
import React from "react";
import { Register } from "../../../components/UniversalComponents/register/Register";
import { Footer } from "../../../components/UniversalComponents/footer/Footer";
import { Interesting } from "../../../components/AboutComponents/Interestingfacts/Interesting";
import { ProblemLearn } from "../../../components/AboutComponents/ProblemBasedLearining/ProblemLearn";
import { CampusLife } from "../../../components/AboutComponents/CampusLife/CampusLife";

const page = () => {
  return (
    <div>
      <Language />

      <TopArea
        pagename="Accreditations & affiliations"
        moredet="Home / About Us"
      />

      <Excellence />
      <Interesting />
      <ProblemLearn />
      <Register />
      <Footer />
    </div>
  );
};
export default page;
