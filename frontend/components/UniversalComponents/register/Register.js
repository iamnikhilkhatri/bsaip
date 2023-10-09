import React from "react";
import Image from "next/image";
import bg from "../../../Assets/svg/cta.svg";
import "./index.scss";
// import { useRouter } from "next/router";
import Link from "next/link";
export const Register = () => {
  // const router = useRouter();
  const style = { color: "black", textDecoration: "none" };
  return (
    <div className="skeleton">
      <div className="register ">
        <div className="register-text ">
          <p className="yellow">
            Register
            <span className="white"> to study in Next Academic Year 2022.</span>
          </p>
          <div className="btn">
            <button>
              <Link style={style} href="/register">
                REGISTER
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
