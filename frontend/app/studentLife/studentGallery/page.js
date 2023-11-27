import { StudyAt } from "../../../components/HomeComponents/studyAt/StudyAt";
import { StudentGallery } from "../../../components/SrudentlifeComponents/StudentGallary/StudentGallery";
import { Wall } from "../../../components/WallOfFame/Wall";
import React from "react";
import { TopArea } from "../../../components/UniversalComponents/toparea/TopArea";
import { Language } from "../../../components/UniversalComponents/languageAndContact/Language";
import { Register } from "../../../components/UniversalComponents/register/Register";
import { Footer } from "../../../components/UniversalComponents/footer/Footer";
const page = () => {
  return (
    <div>
      <Language />
      <TopArea />
      <StudentGallery />
      {/* <Wall /> */}
      <Register />
      <Footer />
    </div>
  );
};
export default page;
