import React from "react";
import Image from "next/image";
import "./index.scss";
import dn from "../../../Assets/svg/dn.svg";
export const NonTraditional = ({ src }) => {
  return (
    <div className="nontraditional">
      <div className="text">
        <div className="textarea">
          <h2>
            Non -Traditional Career
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
            industry. Lorem Ipsum has been the {`industry's`}standard dummy text
            ever since the 1500s, when an unknown printer took a
          </p>
        </div>
      </div>
      <div className="photo skeleton">
        <Image src={src} alt="" />
      </div>
    </div>
  );
};
