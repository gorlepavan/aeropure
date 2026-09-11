import Navbar from "../../components/landing/Navbar";
import Hero from "../../components/landing/Hero";
import Statistics from "../../components/landing/Statistics";
import Features from "../../components/landing/Features";
import WhyAeroPure from "../../components/landing/WhyAeroPure";
import Workflow from "../../components/landing/Workflow";
import AQIDemo from "../../components/landing/AQIDemo";
import Footer from "../../components/landing/Footer";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Statistics />
      <Features />
      <WhyAeroPure />
      <Workflow />
      <AQIDemo />
      <Footer />
    </>
  );
}