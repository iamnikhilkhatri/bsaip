import { TopArea } from "../../../components/UniversalComponents/toparea/TopArea";
import { Language } from "../../../components/UniversalComponents/languageAndContact/Language";
import React from "react";
import { CareerOpportunities } from "../../../components/AcadmicsComponents/CareerOpportunities/CareerOpportunities";
import { Difference } from "../../../components/AcadmicsComponents/Difference/Difference";
import { Egility } from "../../../components/AcadmicsComponents/Egility/Egility";
import { Register } from "../../../components/UniversalComponents/register/Register";
import { Footer } from "../../../components/UniversalComponents/footer/Footer";

const page = () => {
  return (
    <div>
      <Language />
      <TopArea
        pagename="Common Information for
all programs"
        moredet="Home / Academics"
      />
      <CareerOpportunities />
      <Difference />
      <Egility />
      <Register />
      <Footer />
    </div>
  );
};
export default page;
