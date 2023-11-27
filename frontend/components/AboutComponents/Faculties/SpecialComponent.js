"use client";
import React, { use } from "react";
import { Facilites } from "../FaciltiesAndCampus/Facilites";
import { usePathname } from "next/navigation";
import { EachFaculties } from "./EachFaculties";
import { useState } from "react";
import { Faculties } from "./Faculties";
export const SpecialComponent = () => {
  const router = usePathname();
  const [id, setId] = useState("");
  console.log(router);
  return (
    <div>
      <div
        style={
          router === "/about/ourFaculties"
            ? { display: "block" }
            : { display: "none" }
        }
      >
        <Faculties id={id} setId={setId} />
      </div>

      <div
        style={
          router === "/about/ourFaculties"
            ? { display: "none" }
            : { display: "block" }
        }
      >
        <EachFaculties id={id} setId={setId} />
      </div>
    </div>
  );
};
