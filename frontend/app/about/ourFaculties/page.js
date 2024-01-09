import { SpecialComponent } from "../../../components/AboutComponents/Faculties/SpecialComponent";
import { Faculties } from "../../../components/AboutComponents/Faculties/Faculties";
import React from "react";

import { TopArea } from "../../../components/UniversalComponents/toparea/TopArea";
import { Language } from "../../../components/UniversalComponents/languageAndContact/Language";

const page = () => {
  return (
    <div>
      <Language />
      <TopArea pagename={"Our Faculties"} />
      {/* <SpecialComponent /> */}
      <Faculties />
    </div>
  );
};
export default page;
