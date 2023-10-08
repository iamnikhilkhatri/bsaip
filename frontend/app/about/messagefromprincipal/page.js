import { Principal } from "../../../components/AboutComponents/Principal/Principal";
import { Objectives } from "../../../components/AboutComponents/Principal/objectives/Objectives";
import { Language } from "../../../components/UniversalComponents/languageAndContact/Language";
import { TopArea } from "../../../components/UniversalComponents/toparea/TopArea";
import React from "react";
import { Register } from "../../../components/UniversalComponents/register/Register";
import { Footer } from "../../../components/UniversalComponents/footer/Footer";

const page = () => {
  return (
    <div>
      <Language />
      <TopArea pagename="message from principal" moredet="Home / About Us" />
      <Principal />
      <Objectives />

      <Register />
      <Footer />
    </div>
  );
};
export default page;
