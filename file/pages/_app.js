"use client";

import "@/styles/globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function App({ Component, pageProps }) {
  return (
    <>
      
      <Header />

     
      <Component {...pageProps} />

       <BackToTop/>
      <Footer />
    </>
  );
}
