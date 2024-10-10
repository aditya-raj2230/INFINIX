import React from 'react';
import contactImage from '../assets/contact.jpg'; // Use contact.jpg as the new image
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; // For navigation in React

const ContactSection = () => {
  const navigate = useNavigate(); // Initialize navigate function

  const handleRentClick = () => {
    navigate('/booking/rent'); // Redirect to rent booking page
  };

  const handleLeisureClick = () => {
    navigate('/booking/leisure'); // Redirect to leisure booking page
  };

  return (
    <section id="contact" className="relative bg-cover bg-center h-96" style={{ backgroundImage: `url(${contactImage})` }}>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Rent or Leisure Section */}
      <motion.div
        className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl font-bold mb-6 text-purple-400">Choose Your Experience</h2>
        <p className="text-lg mb-8 max-w-lg">
          Explore our exclusive properties for rent. Click below to proceed!
        </p>

        {/* Buttons for Rent or Leisure */}
        <div className="flex space-x-6">
          <button
            onClick={handleRentClick}
            className="bg-purple-600 text-white px-8 py-4 rounded-full hover:bg-purple-700 transition duration-300"
          >
            Rent Property
          </button>

          
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
