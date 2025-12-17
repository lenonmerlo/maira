import "./styles/landing.css";

import About from "./components/sections/About";
import CTA from "./components/sections/CTA";
import Differentials from "./components/sections/Differentials";
import Footer from "./components/sections/Footer";
import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import LanguageSwitcher from "./components/ui/LanguageSwitcher";

export default function App() {
  return (
    <>
      <LanguageSwitcher />
      <Hero />
      <About />
      <Services />
      <Differentials />
      <CTA />
      <Footer />
    </>
  );
}
