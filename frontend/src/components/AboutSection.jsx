import React from 'react';
import heroImage from '../assets/logo.png'; // Placeholder image
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section className="relative bg-gray-50 py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Profile Image */}
        <motion.div
          className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden shadow-lg mb-8 md:mb-0 md:mr-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          <img 
            src={heroImage} 
            alt="Owner/Shareholder Profile" 
            className="w-full h-full object-cover border-2 border-gray-700 rounded-full p-4 shadow-inner"
          />
        </motion.div>

        {/* Content Section */}
        <motion.div 
          className="text-center md:text-left"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            About INFINIX CORP
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mb-8">
            INFINIX CORP is a modern, world-class facility offering a wide range of spaces for business and leisure purposes. Whether you're looking to organize a corporate event or need a place to relax, we provide state-of-the-art amenities.
          </p>
          <a href="/learn-more" className="bg-purple-600 text-white px-8 py-3 rounded-full text-lg hover:bg-purple-700 transition duration-300">
            Learn More
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
