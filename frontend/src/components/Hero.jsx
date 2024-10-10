import React, { useEffect, useState } from 'react';
import heroImage from '../assets/hero.jpg'; // Local hero image
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

// Utility function to generate random positions for independent motion
const randomPosition = (max) => Math.random() * max;

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  // Generate initial random positions for each dot
  const [dotPositions, setDotPositions] = useState([
    { x: randomPosition(window.innerWidth), y: randomPosition(window.innerHeight) },
    { x: randomPosition(window.innerWidth), y: randomPosition(window.innerHeight) },
    { x: randomPosition(window.innerWidth), y: randomPosition(window.innerHeight) }
  ]);

  useEffect(() => {
    // Refresh the dot positions every time the page is loaded or resized
    const handleResize = () => {
      setDotPositions([
        { x: randomPosition(window.innerWidth), y: randomPosition(window.innerHeight) },
        { x: randomPosition(window.innerWidth), y: randomPosition(window.innerHeight) },
        { x: randomPosition(window.innerWidth), y: randomPosition(window.innerHeight) }
      ]);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="relative h-screen flex overflow-hidden" onMouseMove={handleMouseMove}>
      {/* Left section with white background and gray text */}
      <div className="flex flex-col justify-center items-start h-full w-1/2 bg-white text-left p-10 md:p-20">
        <motion.h1
          className="text-5xl md:text-6xl font-bold text-gray-800 mb-4"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          whileHover={{ scale: 1.05, transition: { duration: 0.5 } }}
        >
          Welcome to INFINIX CORP
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
          whileHover={{ scale: 1.05, transition: { duration: 0.5 } }}
        >
          Experience modern luxury and premium business spaces with cutting-edge facilities.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}
        >
          <Link
            to="features"
            smooth={true}
            className="bg-purple-600 text-white px-8 py-3 rounded-full text-lg md:text-xl font-semibold hover:bg-purple-700 transition duration-300 cursor-pointer"
          >
            Explore Our Spaces
          </Link>
        </motion.div>
      </div>

      {/* Right section with hero image */}
      <div className="relative w-1/2 h-full flex justify-center items-center">
        <motion.div
          className="h-[90%] w-[90%] bg-cover bg-center relative border-4 border-white shadow-lg rounded-lg"
          style={{ backgroundImage: `url(${heroImage})` }}
          initial={{ scale: 1 }}
          animate={{ scale: 1.05 }}
          transition={{ duration: 15, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' }}
        />
      </div>

      {/* Floating Shapes with independent movement and slower cursor response */}
      <motion.div
        className="absolute w-10 h-10 bg-purple-400 rounded-full opacity-30"
        initial={{ x: dotPositions[0].x, y: dotPositions[0].y }}
        animate={{
          x: mousePosition.x * 0.1 + randomPosition(50),
          y: mousePosition.y * 0.1 + randomPosition(50),
        }}
        transition={{ duration: 5, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' }}
      />

      <motion.div
        className="absolute w-16 h-16 bg-purple-500 rounded-full opacity-25"
        initial={{ x: dotPositions[1].x, y: dotPositions[1].y }}
        animate={{
          x: mousePosition.x * 0.05 + randomPosition(100),
          y: mousePosition.y * 0.05 + randomPosition(100),
        }}
        transition={{ duration: 7, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' }}
      />

      <motion.div
        className="absolute w-14 h-14 bg-purple-300 rounded-full opacity-20"
        initial={{ x: dotPositions[2].x, y: dotPositions[2].y }}
        animate={{
          x: mousePosition.x * 0.03 + randomPosition(150),
          y: mousePosition.y * 0.03 + randomPosition(150),
        }}
        transition={{ duration: 9, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' }}
      />
    </section>
  );
};

export default Hero;
