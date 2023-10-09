import React from "react";
import "./index.scss";
import Image from "next/image";
import history from "../../../Assets/svg/bsaiphistory.svg";
export const History = () => {
  return (
    <div className="history">
      <div className="text">
        <div className="textarea">
          <h2>
            History
            <br />
            and foundation
          </h2>
          <p>
            Established in 2003 under the B.S. Anangpuria Charitable Trust, the
            Anangpuria Institute of Pharmacy has consistently been a crucial
            part of the educational group. Over the years, we have strategically
            reduced student intake to prioritise the quality of education and
            create an exclusive learning experience for our students.
          </p>
        </div>
      </div>
      <div className="photo skeleton">
        <Image src={history} alt="" />
      </div>
    </div>
  );
};
