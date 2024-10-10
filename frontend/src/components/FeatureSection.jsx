import React from 'react';
import Badminton from '../assets/badminton.jpg';
import Swimming from '../assets/swimming.jpg';
import FunctionRoom from '../assets/function.jpg';
import { motion } from 'framer-motion';

const FeatureSection = () => {
  const facilities = [
    { name: 'Badminton Court', image: Badminton, link: '/badminton-court' },
    { name: 'Swimming Pool', image: Swimming, link: '/swimming-pool' },
    { name: 'Function Room', image: FunctionRoom, link: '/function-room' },
  ];

  return (
    <section id="features" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-5xl font-extrabold text-gray-800 mb-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Our Facilities
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {facilities.map((facility, index) => (
            <motion.a
              href={facility.link}
              key={facility.name}
              className="relative block rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }} // Slower initial appearance
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.4, ease: 'easeInOut' }, // Slow down hover effect
              }}
            >
              <div
                className="h-64 bg-cover bg-center"
                style={{ backgroundImage: `url(${facility.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-gray-900 bg-opacity-60 flex items-end p-6">
                  <h3 className="text-2xl font-semibold text-white">
                    {facility.name}
                  </h3>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
