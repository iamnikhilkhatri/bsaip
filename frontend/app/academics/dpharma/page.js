import { TopArea } from "../../../components/UniversalComponents/toparea/TopArea";
import { Language } from "../../../components/UniversalComponents/languageAndContact/Language";
import React from "react";
import dt from "../../../Assets/svg/dt.svg";
import dn from "../../../Assets/svg/dn.svg";
import { Dpharma } from "../../../components/AcadmicsComponents/Dpharma/Dpharma";
import { BdpObjectives } from "../../../components/UniversalComponents/Bdobjectives/BdObjectives";
import { Traditional } from "../../../components/UniversalComponents/Opportunities/Traditional";
import { NonTraditional } from "@/components/UniversalComponents/Opportunities/NonTraditional";
import { Doverview } from "../../../components/AcadmicsComponents/Dpharma/Overview";
import { Benifits } from "../../../components/UniversalComponents/Benefits/Benefits";
import { Register } from "../../../components/UniversalComponents/register/Register";
import { Footer } from "../../../components/UniversalComponents/footer/Footer";

const page = () => {
  return (
    <div>
      <Language />
      <TopArea pagename="Academics" moredet="Home   /   Diploma in Pharmacy" />
      <Dpharma />
      <BdpObjectives
        h1="Objectives Of"
        h2="Our D.Pharm Program Are To:"
        p1="Equip students with the necessary knowledge and skills to become competent pharmacy professionals in various healthcare settings."
        p2="Develop practical skills through hands-on training, enabling students to apply their knowledge effectively in real-world situations."
        p3="Instil a strong sense of
        professional ethics and commitment to serve society with compassion and integrity."
        p4="Prepare students for higher education and career growth opportunities in the field of pharmacy."
        dp="By offering a comprehensive curriculum that combines theoretical concepts with practical training, our D.Pharm program prepares students for rewarding careers in the pharmaceutical sector, community pharmacies, and hospital settings, enabling them to make a meaningful difference in the lives of patients."
      />
      <Doverview />
      <Benifits />
      <Traditional srct={dt} />
      <NonTraditional src={dn} />
      <Register />
      <Footer />
    </div>
  );
};
export default page;
