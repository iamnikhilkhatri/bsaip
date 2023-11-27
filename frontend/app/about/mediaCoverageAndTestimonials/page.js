import { TopArea } from "../../../components/UniversalComponents/toparea/TopArea";
import { Language } from "../../../components/UniversalComponents/languageAndContact/Language";
import React from "react";
import { Media } from "../../../components/AboutComponents/Media/Media";
import { Topstories } from "../../../components/AboutComponents/TopStories/Topstories";
import { Recent } from "../../../components/AboutComponents/Recent/Recent";
import { Footer } from "../../../components/UniversalComponents/footer/Footer";

const page = () => {
  return (
    <div>
      <Language />
      <TopArea
        pagename={"Media coverage & testimonials"}
        moredet={"Home   /   About "}
      />
      <Media />
      <Topstories />
      <Recent />
      <Footer />
    </div>
  );
};
export default page;
