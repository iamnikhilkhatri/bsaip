import React from "react";
import { Language } from "../../../../components/UniversalComponents/languageAndContact/Language";
import { TopArea } from "../../../../components/UniversalComponents/toparea/TopArea";
import { Footer } from "../../../../components/UniversalComponents/footer/Footer";
import { Register } from "../../../../components/UniversalComponents/register/Register";
import Eachblog from "../../../../components/AboutComponents/Eachblog/Eachblog";
const page = () => {
  return (
    <div>
      <Language />
      <TopArea />
      <Eachblog />
      <Register />
      <Footer />
    </div>
  );
};

export default page;
