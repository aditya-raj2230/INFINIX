import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />               {/* Home Route */}
        <Route path="/hero" element={<Hero />} />           {/* Hero Route */}
        <Route path="/login" element={<Login />} />          {/* Login Route */}
        <Route path="/register" element={<Register />} />    {/* Register Route */}
        <Route path="/book" element={<Book />} />            {/* Book Route */}
      </Routes>
        <FeatureSection /> {/* Feature Section Route */}
       <AboutSection />  {/* About Section Route */}
        <TestimonialSection /> {/* Testimonial Route */}
       <ContactSection />
    </Router>
  );
}

export default App;
