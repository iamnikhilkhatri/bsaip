import { SpecialComponent } from "../../../../components/AboutComponents/Faculties/SpecialComponent";
import { EachFaculties } from "../../../../components/AboutComponents/Faculties/EachFaculties";
import React from "react";
import { Language } from "@/components/UniversalComponents/languageAndContact/Language";
import { TopArea } from "@/components/UniversalComponents/toparea/TopArea";
import { Register } from "@/components/UniversalComponents/register/Register";
import { Footer } from "@/components/UniversalComponents/footer/Footer";

const page = () => {
  return (
    <div>
      <Language />
      <TopArea />
      <SpecialComponent />
      <Register />
      <Footer />
    </div>
  );
};
export default page;
