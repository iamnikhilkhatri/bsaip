import { TopArea } from "../../../components/UniversalComponents/toparea/TopArea";
import { Esuring } from "../../../components/AdmissionComp0nents/Esuring/Esuring";
import { WhyBsaip } from "../../../components/AdmissionComp0nents/WhyBsaip/WhyBsaip";
import { Language } from "../../../components/UniversalComponents/languageAndContact/Language";
import React from "react";
import { Register } from "../../../components/UniversalComponents/register/Register";
import { Footer } from "../../../components/UniversalComponents/footer/Footer";
import { Admission2023 } from "../../../components/AdmissionComp0nents/Admission2023/Admission2023";
import { Map } from "../../../components/ContactComponents/Map/Map";
import { Contact } from "../../../components/ContactComponents/Contact/Contact";

const page = () => {
  return (
    <div>
      <Language />
      <TopArea pagename="Admissions" moredet="Home   /   Admissions" />
      <Admission2023 />
      <WhyBsaip />
      <Esuring />
      <Register />
      <Footer />
      <Map />
      <Contact />
    </div>
  );
};
export default page;
