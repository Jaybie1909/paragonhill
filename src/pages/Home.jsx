"use client";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import FacilitiesSection from "../components/FacilitiesSection";
import Plans from "../components/Plans";
import Developer from "../components/Developer";
import News from "../components/News";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import MapLocationSection from "../components/MapLocationSection";
import WhyChooseSection from "../components/WhyChooseSection";
import ConnectivitySection from "../components/ConnectivitySection";
import { Helmet } from "react-helmet-async";


export default function Home() {
  return (
    <>
      <Helmet>
        <title>Paragon Hill Batam - Hunian Premium di Batam Center</title>
        <meta name="description" content="Paragon Hill Batam menghadirkan hunian premium dengan pemandangan laut yang memukau, berlokasi strategis di Batam Center." />
        <meta name="keywords" content="Paragon Hill, Batam, properti, hunian, premium, Batam Center" />
        <link rel="canonical" href="https://jb-paragonhill.vercel.app/" />
      </Helmet>
      <Navbar />
      <Hero />
      <WhyChooseSection />
      <About />
      <ConnectivitySection />
      <MapLocationSection />
      <FacilitiesSection />
      <Plans />
      <Developer />
      <News />
      <Contact />
      <Footer />
    </>
  );
}
