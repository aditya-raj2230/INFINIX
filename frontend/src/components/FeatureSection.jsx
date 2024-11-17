import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Badminton from '../assets/badminton.jpg';
import Swimming from '../assets/swimming.jpg';
import FunctionRoom from '../assets/function.jpg';

const FeatureSection = () => {
  const sectionRef = useRef(null);
  const cursorRef = useRef(null);

  const facilities = [
    { name: 'Badminton Court', image: Badminton, link: '/badminton-court' },
    { name: 'Swimming Pool', image: Swimming, link: '/swimming-pool' },
    { name: 'Function Room', image: FunctionRoom, link: '/function-room' },
  ];

  useEffect(() => {
    const cursor = cursorRef.current;

    const onMouseMove = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: 'power2.out',
      });
    };

    const onMouseEnterSection = () => {
      gsap.to(cursor, {
        opacity: 1, // Show the ball cursor
        duration: 0.3,
      });
      document.body.style.cursor = 'none'; // Hide the default cursor
    };

    const onMouseLeaveSection = () => {
      gsap.to(cursor, {
        opacity: 0, // Hide the ball cursor
        duration: 0.3,
      });
      document.body.style.cursor = 'auto'; // Restore the default cursor
    };

    const onMouseEnterCard = (card) => {
      gsap.to(card, {
        scale: 1.1,
        duration: 0.3,
        boxShadow: '0 15px 30px rgba(0, 0, 0, 0.2)',
      });
    };

    const onMouseLeaveCard = (card) => {
      gsap.to(card, {
        scale: 1,
        duration: 0.3,
        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
      });
    };

    const section = sectionRef.current;
    const cards = section.querySelectorAll('.feature-card');

    section.addEventListener('mouseenter', onMouseEnterSection);
    section.addEventListener('mouseleave', onMouseLeaveSection);
    document.addEventListener('mousemove', onMouseMove);

    cards.forEach((card) => {
      card.addEventListener('mouseenter', () => onMouseEnterCard(card));
      card.addEventListener('mouseleave', () => onMouseLeaveCard(card));
    });

    return () => {
      section.removeEventListener('mouseenter', onMouseEnterSection);
      section.removeEventListener('mouseleave', onMouseLeaveSection);
      document.removeEventListener('mousemove', onMouseMove);
      cards.forEach((card) => {
        card.removeEventListener('mouseenter', () => onMouseEnterCard(card));
        card.removeEventListener('mouseleave', () => onMouseLeaveCard(card));
      });
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="features"
      className="py-20 bg-gray-100 relative"
    >
      {/* Custom Cursor */}
      <div
        ref={cursorRef}
        className="w-16 h-16 rounded-full bg-white shadow-lg fixed pointer-events-none z-50 opacity-0"
        style={{
          transform: 'translate(-50%, -50%)',
          mixBlendMode: 'difference',
        }}
      ></div>

      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-extrabold text-gray-800 mb-12 text-center">
          Our Facilities
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {facilities.map((facility) => (
            <a
              href={facility.link}
              key={facility.name}
              className="feature-card relative block rounded-lg overflow-hidden shadow-lg"
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
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
