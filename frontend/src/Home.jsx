import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import badmintonImage from './assets/badminton.jpg';
import swimmingImage from './assets/Swimming.jpg';
import tennisImage from './assets/badminton.jpg';
import gymImage from './assets/badminton.jpg';

// Hardcoded booked dates for each facility (use ISO 8601 format: YYYY-MM-DD)
const bookedDates = {
  'Tennis Court': ['2024-10-12', '2024-10-15', '2024-10-18', '2024-11-01', '2024-11-03'],
  'Badminton Court': ['2024-10-10', '2024-10-20', '2024-11-05', '2024-11-15', '2024-11-25'],
  'Pool': ['2024-10-11', '2024-10-13', '2024-10-17', '2024-11-04', '2024-11-08'],
  'Gym': ['2024-10-14', '2024-10-19', '2024-11-02', '2024-11-12', '2024-11-22'],
};

const facilitiesData = [
  { id: 1, name: 'Tennis Court', price: 50, image: tennisImage },
  { id: 2, name: 'Badminton Court', price: 30, image: badmintonImage },
  { id: 3, name: 'Pool', price: 70, image: swimmingImage },
  { id: 4, name: 'Gym', price: 40, image: gymImage },
];

const Home = () => {
  const [selectedFacility, setSelectedFacility] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const calculateNumberOfDays = (start, end) => {
    const timeDiff = end - start;
    return Math.ceil(timeDiff / (1000 * 60 * 60 * 24)) + 1;
  };

  const handleFacilityChange = (e) => {
    const facility = facilitiesData.find(fac => fac.name === e.target.value);
    setSelectedFacility(facility);
  };

  const handleSearchClick = () => {
    if (selectedFacility && startDate && endDate) {
      const days = calculateNumberOfDays(startDate, endDate);
      setTotalPrice(selectedFacility.price * days);
      setIsModalOpen(true);
    } else {
      alert('Please select a facility, start date, and end date.');
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleBookFacility = () => {
    alert(`Booked ${selectedFacility.name} from ${startDate.toLocaleDateString()} to ${endDate.toLocaleDateString()} at a total price of $${totalPrice}.`);
    closeModal();
  };

  // Function to check if a date is booked for the selected facility
  const isDateBooked = (date) => {
    const bookedDatesForFacility = bookedDates[selectedFacility?.name] || [];
    const formattedDate = date.toISOString().split('T')[0];
    return bookedDatesForFacility.includes(formattedDate);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gradient-to-r from-gray-100 to-gray-200 p-4">
      {/* Booking Form (Left Section) */}
      <div className="flex flex-col bg-white rounded-lg shadow-lg border border-gray-300 w-full md:w-2/5 p-8 space-y-6">
        <h2 className="text-4xl font-extrabold text-center text-purple-700">Book a Facility</h2>

        <div className="mb-4">
          <label className="block text-lg font-semibold text-gray-700">Select Facility:</label>
          <select
            value={selectedFacility?.name || ''}
            onChange={handleFacilityChange}
            className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-4 focus:ring-purple-400 bg-gray-100 appearance-none"
          >
            <option value="" disabled>Select a facility</option>
            {facilitiesData.map(facility => (
              <option key={facility.id} value={facility.name}>
                {facility.name} - ${facility.price}/day
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-lg font-semibold text-gray-700">Start Date:</label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            minDate={new Date()}
            filterDate={(date) => !isDateBooked(date)}
            className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-4 focus:ring-purple-400 bg-gray-100"
          />
        </div>

        <div className="mb-4">
          <label className="block text-lg font-semibold text-gray-700">End Date:</label>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            filterDate={(date) => !isDateBooked(date)}
            className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-4 focus:ring-purple-400 bg-gray-100"
          />
        </div>

        {/* Search Button */}
        <button
          onClick={handleSearchClick}
          className="mt-4 w-full bg-gradient-to-r from-purple-500 to-blue-600 text-white text-lg font-bold px-6 py-3 rounded-full hover:from-purple-600 hover:to-blue-700 transition duration-300"
        >
          Search & Book
        </button>
      </div>

      {/* Facilities List (Right Section) */}
      <div className="flex flex-col bg-white rounded-lg shadow-lg border border-gray-300 w-full md:w-3/5 p-8 ml-0 md:ml-8 h-[600px] overflow-y-auto">
        <h3 className="text-3xl font-extrabold text-center text-purple-700">Available Facilities</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {facilitiesData.map((facility) => (
            <div key={facility.id} className="bg-white rounded-lg shadow-md border border-gray-300 overflow-hidden">
              <img src={facility.image} alt={facility.name} className="w-full h-40 object-cover" />
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
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
              onClick={closeModal}
            >
              &times;
            </button>

            <h3 className="text-2xl font-bold text-gray-800">Selected Facility: {selectedFacility.name}</h3>
            <img src={selectedFacility.image} alt={selectedFacility.name} className="w-full h-40 object-cover rounded-lg my-4" />
            <p className="text-gray-600">Price per day: ${selectedFacility.price}</p>
            <p className="text-gray-600">Booking from {startDate?.toLocaleDateString()} to {endDate?.toLocaleDateString()}</p>
            <p className="text-gray-800 font-semibold">Total Price: ${totalPrice}</p>

            {/* Book Button */}
            <button
              onClick={handleBookFacility}
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

export default Home;
