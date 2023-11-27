import { Contact } from "@/components/ContactComponents/Contact/Contact";
import { HelpForm } from "@/components/ContactComponents/Help/HelpForm";
import { Map } from "@/components/ContactComponents/Map/Map";
import { Registeration } from "@/components/ContactComponents/Registeration/Registeration";
import { Footer } from "@/components/UniversalComponents/footer/Footer";
import { Language } from "@/components/UniversalComponents/languageAndContact/Language";
import { Register } from "@/components/UniversalComponents/register/Register";
import { TopArea } from "@/components/UniversalComponents/toparea/TopArea";
import React from "react";

const page = () => {
  return (
    <div>
      <Language />
      <TopArea pagename="Contact Us" moredet="Home   /   Contact Us" />
      <Registeration />
      <Contact />
      <HelpForm />
      <Map />
      <Register />
      <Footer />
    </div>
  );
};
export default page;
