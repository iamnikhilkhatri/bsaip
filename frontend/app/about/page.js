"use client";
import { TopArea } from "../../components/UniversalComponents/toparea/TopArea";
import { Language } from "../../components/UniversalComponents/languageAndContact/Language";
import React from "react";
import { Aboutbsaip } from "../../components/AboutComponents/Aboutbsaip/Aboutbsaip";
import { History } from "../../components/AboutComponents/Historyandfoundation/History";
import Management from "../../components/AboutComponents/Management/Managemantt";
import { Register } from "../../components/UniversalComponents/register/Register";
import { Footer } from "../../components/UniversalComponents/footer/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const page = () => {
  return (
    <div>
      <Language />
      <TopArea pagename="About" moredet="Home / About Us" />
      <Aboutbsaip />
      <History />
      <Management />
      <Register />
      <Footer />
    </div>
  );
};
export default page;
