import React, { useState } from 'react';
import badmintonImage from '../assets/badminton.jpg';
import swimmingImage from '../assets/Swimming.jpg';
import tennisImage from '../assets/tennis2.jpg';
import gymImage from '../assets/gym.jpg';

const Rooms = () => {
  const [selectedFacility, setSelectedFacility] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  const facilitiesData = [
    { id: 1, name: 'Tennis Court', price: 50, image: tennisImage },
    { id: 2, name: 'Badminton Court', price: 30, image: badmintonImage },
    { id: 3, name: 'Pool', price: 70, image: swimmingImage },
    { id: 4, name: 'Gym', price: 40, image: gymImage },
  ];

  const calculateNumberOfDays = (start, end) => {
    if (!start || !end) return 0;
    const timeDiff = end - start;
    return Math.ceil(timeDiff / (1000 * 60 * 60 * 24)) + 1;
  };

  return (
    <div className="container mx-auto px-4 flex justify-center items-center min-h-screen py-8">
      <div className="flex flex-col bg-white rounded-lg shadow-lg border border-gray-300 w-full max-w-7xl p-8">
        <h3 className="text-3xl font-extrabold text-center text-purple-700 mb-8">Available Facilities</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilitiesData.map((facility) => (
            <div key={facility.id} className="bg-white rounded-lg shadow-md border border-gray-300 overflow-hidden">
              <img src={facility.image} alt={facility.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h4 className="text-xl font-bold text-purple-700">{facility.name}</h4>
                <p className="text-gray-600">Price per day: ${facility.price}</p>
                <button
                  onClick={() => {
                    setSelectedFacility(facility);
                    const days = calculateNumberOfDays(startDate, endDate);
                    setTotalPrice(facility.price * days);
                    setIsModalOpen(true);
                  }}
                  className="mt-2 w-full bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition duration-300"
                >
                  Select this Facility
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Selected Facility */}
      {isModalOpen && selectedFacility && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-1/2 lg:w-1/3 p-6 relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
              onClick={() => setIsModalOpen(false)}
            >
              &times;
            </button>

            <h3 className="text-2xl font-bold text-gray-800">Selected Facility: {selectedFacility.name}</h3>
            <img src={selectedFacility.image} alt={selectedFacility.name} className="w-full h-40 object-cover rounded-lg my-4" />
            <p className="text-gray-600">Price per day: ${selectedFacility.price}</p>
            <p className="text-gray-800 font-semibold">Total Price: ${totalPrice}</p>

            <button
              onClick={() => {
                alert(`Booked ${selectedFacility.name} for a total price of $${totalPrice}.`);
                setIsModalOpen(false);
              }}
              className="mt-4 w-full bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition duration-300"
            >
              Book Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Rooms;
