import React from "react";
import "./index.scss";
import Image from "next/image";
import img from "../../../Assets/svg/map360.svg";
export const Map = () => {
  return (
    <div className="map">
      <div className="text-box">
        <div className="box">
          <div className="heading">
            <h2>
              An Address for
              <br /> Better Education!..
            </h2>
          </div>
          <div className="details">
            <p>
              B. S. Anangpuria Educational
              <br /> Institutes Alampur, Ballabgarh-
              <br />
              Sohna Major District
              <br /> Road,Faridabad-121004, Delhi-NCR,
              <br /> INDIA.
            </p>
          </div>
          <div className="campusview">
            <Image src={img} alt=""></Image>
          </div>
        </div>
      </div>
      <div className="map-box">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3512.0516695779374!2d77.18419887433224!3d28.327037997890063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d274f51b5f6bf%3A0xa2aa2b889eaf0203!2sB.%20S.%20Anangpuria%20Institute%20of%20Pharmacy!5e0!3m2!1sen!2sin!4v1696081892205!5m2!1sen!2sin"
          width="400"
          height="300"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};
