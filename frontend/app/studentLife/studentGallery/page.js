import { StudyAt } from "@/components/HomeComponents/studyAt/StudyAt";
import { StudentGallery } from "@/components/SrudentlifeComponents/StudentGallary/StudentGallery";
import { Wall } from "@/components/WallOfFame/Wall";
import React from "react";

const page = () => {
  return (
    <div>
      <StudentGallery />
      <Wall />
    </div>
  );
};
export default page;
