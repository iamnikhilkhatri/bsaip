import React from "react";
import "./index.scss";
import Image from "next/image";
import call from "../../../Assets/svg/ccall.svg";
import gmail from "../../../Assets/svg/cgmail.svg";
export const Contact = () => {
  return (
    <div className="contact">
      <div className="content-box">
        <div className="text">
          <h2>
            Find Dedicated
            <br /> Contact Information
          </h2>
        </div>

        <div className="email">
          <div className="photo">
            <Image src={gmail} alt=""></Image>
          </div>
          <div className="text">
            <h2 className="h2">Email Us</h2>
            <p className="p1">Send your mail for general enquiries.</p>
            <a
              href="mailto:bsaei@anangpuria.com"
              style={{ textDecoration: "none" }}
            >
              <p className="p2">bsaei@anangpuria.com</p>
            </a>
          </div>
        </div>
        <div className="call">
          <div className="photo">
            <Image src={call} alt=""></Image>
          </div>
          <div className="text">
            <h2 className="h2">Call Us</h2>
            <p className="p1">Make a call for your general enquiries.</p>
            <a href={`tel:0129-2206750-53`} style={{ textDecoration: "none" }}>
              <p className="p2">0129-2206750-53</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
