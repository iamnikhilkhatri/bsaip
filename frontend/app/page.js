"use client";
import Image from "next/image";
// import "../i18n";
import styles from "./page.module.css";
import { useState } from "react";
import { Footer } from "../components/UniversalComponents/footer/Footer";
import Mycontext from "./context/Mycontext.js";
import { Header } from "../components/HomeComponents/header/Header";
import { Register } from "../components/UniversalComponents/register/Register";
import { StudyAt } from "../components/HomeComponents/studyAt/StudyAt";
import { WhyChoose } from "../components/HomeComponents/whychoose/WhyChoose";
import { LifeAt } from "../components/HomeComponents/lifeAt/LifeAt";
import { Facts } from "../components/HomeComponents/facts/Facts";
import { Explore } from "../components/HomeComponents/explore/Explore";
import { appWithTranslation, useTranslation } from "next-i18next";
// import "bootstrap/dist/css/bootstrap.min.css";
import { TopArea } from "../components/UniversalComponents/toparea/TopArea";
import { Aboutbsaip } from "../components/AboutComponents/Aboutbsaip/Aboutbsaip";
import { History } from "../components/AboutComponents/Historyandfoundation/History";
import Reviews from "../components/HomeComponents/reviews/Reviews";
import Management from "../components/AboutComponents/Management/Managemantt";
import { Language } from "../components/UniversalComponents/languageAndContact/Language";
import Vedios from "../components/HomeComponents/vedios/Vedios";
import { UseTranslation } from "next-i18next";
import { getTranslator } from "next-intl/server";
// const Home = () => {

export default function Home() {
  return (
    // <Mycontext>
    <div>
      <Language />
      <Header />
      <StudyAt />
      <Explore />
      <Facts />
      <WhyChoose />
      <LifeAt />
      <Reviews />
      <Vedios />
      <Register />
      <Footer></Footer>
    </div>
    // </Mycontext>
  );
}
