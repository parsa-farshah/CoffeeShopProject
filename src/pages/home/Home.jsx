import React from "react";

import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/haeder/Header";
import Services from "../../components/services/Services";
import Premium from "../../components/premium/Premium";
import AppBanner from "../../components/appBanner/AppBanner";
import AboutCoffee from "../../components/aboutCoffee/AboutCoffee";
import Footer from "../../components/footer/Footer";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <Services />
      <Premium />
      <AppBanner />
      <AboutCoffee />
      <Footer />
    </div>
  );
}
