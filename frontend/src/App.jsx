import { useState } from "react";
import Hero from "./components/Hero";
import FeatureSection from "./components/FeatureSection";
import AboutSection from "./components/AboutSection";
import TestimonialSection from "./components/TestimonialSection";
import ContactSection from "./components/ContactSection";
import Login from "./login";
import Register from "./Register";
import Home from "./Home";
import Book from "./Book";




function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    
     {/* <Hero/>
    <FeatureSection/>
      <AboutSection />
      <TestimonialSection />
      <ContactSection />  */}
      {/* <Login/>
      <Register/> */}
     {/* <Home/> */}
     <Book/>
    </>
  );
}

export default App;
