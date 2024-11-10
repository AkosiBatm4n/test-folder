import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Content from "./components/Content";
import Contact from "./components/Contact";

export default function Home() {
  return (
  <div>
    <HeroSection/>
    <Content/>
    <Contact/>
  </div>  
  );
}
