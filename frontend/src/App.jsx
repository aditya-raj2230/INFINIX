import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Hero from "./components/Hero";
import FeatureSection from "./components/FeatureSection";
import AboutSection from "./components/AboutSection";
import TestimonialSection from "./components/TestimonialSection";
import ContactSection from "./components/ContactSection";
import Home from "./Home";
import Book from "./Book";
import Rooms from './components/Rooms';
import Contact from './components/Contact';
import About from './components/About';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const appRef = useRef(null);

  useEffect(() => {
    const sections = document.querySelectorAll(".section");

    sections.forEach((section, index) => {
      // Add animation with dramatic effects
      gsap.fromTo(
        section,
        {
          opacity: 0,
          scale: 0.8, // Shrink the section initially
          rotate: index % 2 === 0 ? -10 : 10, // Alternate rotation for variety
          y: 100, // Move it down initially
        },
        {
          opacity: 1,
          scale: 1, // Bring back to normal size
          rotate: 0, // Reset rotation
          y: 0, // Reset position
          duration: 1.5, // Make the animation slightly slower for dramatic effect
          ease: "power3.out", // Smooth easing
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "top 20%",
            scrub: true, // Smoothly animates based on scroll position
            toggleActions: "play reverse play reverse", // Replays on scroll up and down
          },
        }
      );

      // Optional: Stagger animation for children inside each section
      const children = section.querySelectorAll(".child");
      if (children.length) {
        gsap.fromTo(
          children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2, // Delay between each child animation
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              end: "top 20%",
              scrub: true,
            },
          }
        );
      }
    });
  }, []);

  return (
    <div ref={appRef}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="section">
                  <Hero />
                </div>
                <div className="section">
                  <FeatureSection>
                    <div className="child">Feature 1</div>
                    <div className="child">Feature 2</div>
                    <div className="child">Feature 3</div>
                  </FeatureSection>
                </div>
                <div className="section">
                  <AboutSection />
                </div>
                <div className="section">
                  <TestimonialSection />
                </div>
                <div className="section">
                  <ContactSection />
                </div>
              </>
            }
          />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/book" element={<Book />} />
          <Route path="/pricing" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
