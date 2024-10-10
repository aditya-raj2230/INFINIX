import { useState } from "react";
import Hero from "./components/Hero";
import FeatureSection from "./components/FeatureSection";
import AboutSection from "./components/AboutSection";
import TestimonialSection from "./components/TestimonialSection";
import ContactSection from "./components/ContactSection";




function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Hero/>
    <FeatureSection/>
      <AboutSection />
      <TestimonialSection />
      <ContactSection />
     
    </>
  );
}

export default App;
