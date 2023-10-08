import { Registeration } from "@/components/ContactComponents/Registeration/Registeration";
import { Footer } from "@/components/UniversalComponents/footer/Footer";
import { Language } from "@/components/UniversalComponents/languageAndContact/Language";
import { TopArea } from "@/components/UniversalComponents/toparea/TopArea";
import React from "react";

const page = () => {
  return (
    <div>
      <Language />
      <TopArea
        pagename="Student Registration"
        moredet="Home   /   Placements"
      />
      <Registeration />
      <Footer />
    </div>
  );
};
export default page;
