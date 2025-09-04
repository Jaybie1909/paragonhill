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

export default function Home() {
  return (
    <>
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
