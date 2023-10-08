import React from "react";
import { Language } from "../../../components/UniversalComponents/languageAndContact/Language";
import { TopArea } from "../../../components/UniversalComponents/toparea/TopArea";
import { Director } from "../../../components/AboutComponents/Director/Director";
import { Register } from "../../../components/UniversalComponents/register/Register";
import { Footer } from "../../../components/UniversalComponents/footer/Footer";
import { Keys } from "../../../components/AboutComponents/Director/keys/Keys";
const page = () => {
  return (
    <div>
      <Language />
      <TopArea pagename="message from director" moredet="Home / About Us" />
      <Director />
      <Keys />
      <Register />
      <Footer />
    </div>
  );
};
export default page;
