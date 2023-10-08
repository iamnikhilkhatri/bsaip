import "./globals.css";
import "./index.scss";
// import { Inter } from "next/font/Google";
import Link from "next/link";
import Script from "next/script";
// const inter = Inter({ subsets: ["latin"] });
import Head from "next/head";
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <Head>
        <Link
          rel="stylesheet"
          type="text/css"
          href="//cdn.jsdelivr.net/gh/kenwheeler/slick@1.9.0/slick/slick.css"
        />
        <Link
          rel="stylesheet"
          type="text/css"
          href="//cdn.jsdelivr.net/gh/kenwheeler/slick@1.9.0/slick/slick-theme.css"
        />
      </Head>
      <Script
        type="text/javascript"
        src="//cdn.jsdelivr.net/gh/kenwheeler/slick@1.9.0/slick/slick.min.js"
      ></Script> */}
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/js/all.min.js"
        integrity="sha512-uKQ39gEGiyUJl4AI6L+ekBdGKpGw4xJ55+xyJG7YFlJokPNYegn9KwQ3P8A7aFQAUtUsAQHep+d/lrGqrbPIDQ=="
        crossOrigin="anonymous"
        referrerpolicy="no-referrer"
      ></Script>
      <body>{children}</body>
    </html>
  );
}
