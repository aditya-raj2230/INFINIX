import React from 'react';
import { motion } from 'framer-motion';
import headshot1 from '../assets/headshot1.jpg';
import headshot2 from '../assets/headshot2.jpg';
import headshot4 from '../assets/headshot3.jpg';

const TestimonialSection = () => {
  const testimonials = [
    { name: 'John Doe', image: headshot1, feedback: "Amazing facilities and great staff. Highly recommended!" },
    { name: 'Jane Smith', image: headshot2, feedback: "Fantastic experience. The support team is exceptional!" },
    { name: 'Alice Brown', image: headshot4, feedback: "Top-notch amenities and excellent services." },
  ];

  return (
    <section id="testimonials" className="relative py-16 bg-gray-100 overflow-hidden">
      {/* Abstract shapes */}
      <motion.div
        className="absolute top-0 right-0 w-32 h-32 rounded-full bg-purple-300 opacity-30"
        animate={{ y: [0, 20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-purple-600 opacity-20"
        animate={{ y: [0, -30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>

      <div className="container mx-auto text-center relative z-10">
        <motion.h2
          className="text-4xl font-bold text-black mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          What Our Clients Say
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="bg-white shadow-lg p-6 rounded-lg flex flex-col items-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <img
                src={testimonial.image}
                alt={`${testimonial.name}'s headshot`}
                className="w-20 h-20 rounded-full mb-4 object-cover shadow-md"
              />
              <p className="text-gray-600 mb-4 text-center">"{testimonial.feedback}"</p>
              <h4 className="text-xl font-semibold text-black">- {testimonial.name}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
