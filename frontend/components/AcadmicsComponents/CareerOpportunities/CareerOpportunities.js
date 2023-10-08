import React from "react";
import Image from "next/image";
import "./index.scss";
import carr from "../../../Assets/svg/careeropport.svg";
export const CareerOpportunities = () => {
  return (
    <div className="career">
      <div className="content-box">
        <div className="photo">
          <Image src={carr} alt="" />
        </div>
        <div className="text">
          <div className="wrapper">
            <div className="heading">
              <h1>
                Career <br />
                opportunities
              </h1>
              <p>
                D.Pharm graduates from Anangpuria Institute of Pharmacy have
                access to a diverse array of career opportunities in the
                pharmaceutical sector. Some of the most popular career paths for
                D.Pharm graduates include:
              </p>
            </div>

            <div className="points">
              <div className="point">
                <li>
                  <span className="dot">•</span>
                  <span className="title">Community Pharmacist :</span>
                  Work in retail pharmacies, providing medication and healthcare
                  advice to customers, and ensuring that medications are
                  dispensed safely and accurately.
                </li>
              </div>

              <div className="point">
                <li>
                  <span className="dot">•</span>
                  <span className="title">Hospital Pharmacist :</span>
                  Work in hospital settings, assisting in medication management,
                  providing drug information to healthcare professionals, and
                  participating in patient care.
                </li>
              </div>

              <div className="point">
                <li>
                  <span className="dot">•</span>
                  <span className="title">
                    Pharmaceutical Sales Representative :
                  </span>
                  Promote and sell pharmaceutical products to healthcare
                  providers, utilizing in-depth knowledge of medications and
                  their applications.
                </li>
              </div>

              <div className="point">
                <li>
                  <span className="dot">•</span>
                  <span className="title">Quality Control Analyst :</span>
                  Ensure the safety and quality of pharmaceutical products by
                  conducting tests, analyzing results, and maintaining
                  compliance with industry standards.
                </li>
              </div>

              <div className="point">
                <li>
                  <span className="dot">•</span>
                  <span className="title">
                    Drug Regulatory Affairs Associate :
                  </span>
                  Work with pharmaceutical companies to ensure compliance with
                  drug regulations, manage documentation, and liaise with
                  regulatory authorities.
                </li>
              </div>

              <div className="point">
                <li>
                  <span className="dot">•</span>
                  <span className="title"> Pharmacy Technician :</span>
                  Assist pharmacists in dispensing medications, managing
                  inventory, and providing customer service in various
                  healthcare settings.
                </li>
              </div>
            </div>
            <div className="subdetails">
              <p>
                The D.Pharm program at Anangpuria Institute of Pharmacy not only
                equips students with the knowledge and skills necessary to excel
                in the field of pharmacy but also offers them a wide range of
                exciting and rewarding career opportunities to choose from.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
