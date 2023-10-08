import React from "react";
import Image from "next/image";
import "./index.scss";
import about from "../../../Assets/svg/traditional.svg";
export const Traditional = ({ srct }) => {
  return (
    <div className="traditional">
      <div className="text">
        <div className="textarea">
          <h2>
            Traditional Career
            <br /> opportunities
          </h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the {`industry's`} standard dummy
            text ever since the 1500s, when an unknown printer took a
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the {`industry's`} standard dummy
            text ever since the 1500s, when an unknown printer took a
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the {`industry's`} standard dummy
            text ever since the 1500s, when an unknown printer took a
          </p>
        </div>
      </div>
      <div className="photo">
        <Image src={srct} alt="" />
      </div>
    </div>
  );
};
