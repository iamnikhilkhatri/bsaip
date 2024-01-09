import React from "react";
import Image from "next/image";
import "./index.scss";
import Aos from "aos";
import img1 from "../../../Assets/svg/lifeat.png";
import img2 from "../../../Assets/svg/vne.png";
import { useRouter } from "next/navigation";
import img3 from "../../../Assets/svg/tvo.png";
import img4 from "../../../Assets/svg/thve.png";
export const LifeAt = () => {
  // /studentLife/studentGallery
  const router =useRouter()
  const redirectTo =(path)=>{
    router.push(path)
  }

  return (
    <div className="lifeat">
      <div className="left">
        <div className="top">
          <div className="internal-div">
            <p className="heading">A Campus to Fall in love with</p>
            <p className="details">
              At Anangpuria Institute of Pharmacy, our state-of-the-art
              industry-level labs set us apart from other institutions in the
              vicinity.
            </p>
            <button onClick={()=>{redirectTo("/studentLife/studentGallery")}}>LIFE AT BSAIP</button>
          </div>
        </div>
        <div className="btm">
          <div className="single ">
            <div className="img skeleton">
              <Image loading="lazy" src={img2} alt="" />
            </div>
          </div>
          <div className="double">
            <div className=" img skeleton">
              <Image loading="lazy" src={img3} alt="" />{" "}
            </div>
            <div className="img skeleton">
              <Image src={img4} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="right skeleton">
        <Image loading="lazy" src={img1} alt="" />
      </div>
    </div>
  );
};
