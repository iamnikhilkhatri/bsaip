import React from "react";
import Link from "next/link";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Language } from "../components/UniversalComponents/languageAndContact/Language";
import { Footer } from "../components/UniversalComponents/footer/Footer";
export default function NotFound() {
  return (
    <div>
      <Language />
      <section className="page_404">
        <div className="content-box">
          <div className="div">
            <div class="four_zero_four_bg">
              <h1 className="text-center">404</h1>
            </div>

            <div className="contant_box_404">
              <h3 className="h2">Look like you're lost</h3>

              <p>the page you are looking for not avaible!</p>

              <Link href="/" className="link_404">
                Go to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
