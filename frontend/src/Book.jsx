import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import swimmingImage from './assets/Swimming.jpg';

// Hardcoded booked dates for the Pool (for demonstration purposes)
const bookedDates = ['2024-10-11', '2024-10-13', '2024-10-17', '2024-11-04', '2024-11-08'];

const Book = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState('');

  // Hardcoded facility details for the "Swimming" facility
  const facility = {
    name: 'Pool',
    price: 70,
    image: swimmingImage,
  };

  const calculateNumberOfDays = (start, end) => {
    const timeDiff = end - start;
    return Math.ceil(timeDiff / (1000 * 60 * 60 * 24)) + 1;
  };

  const handleSearchClick = () => {
    if (startDate && endDate) {
      const days = calculateNumberOfDays(startDate, endDate);
      setTotalPrice(facility.price * days);
    } else {
      alert('Please select a start date and an end date.');
    }
  };

  const handlePaymentSubmit = () => {
    if (paymentMethod) {
      alert(`Booked ${facility.name} from ${startDate.toLocaleDateString()} to ${endDate.toLocaleDateString()} at a total price of $${totalPrice} using ${paymentMethod}.`);
    } else {
      alert('Please select a payment method.');
    }
  };

  const isDateBooked = (date) => {
    const formattedDate = date.toISOString().split('T')[0];
    return bookedDates.includes(formattedDate);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-100 to-gray-200 p-4">
      <div className="flex flex-col bg-white rounded-lg shadow-lg border border-gray-300 w-full md:w-2/5 p-8 space-y-6">
        <h2 className="text-4xl font-extrabold text-center text-purple-700">Book {facility.name}</h2>
        <img src={facility.image} alt={facility.name} className="w-full h-40 object-cover rounded-lg" />

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
          Calculate Price
        </button>

        {totalPrice > 0 && (
          <>
            <p className="text-xl font-bold text-purple-700">Total Price: ${totalPrice}</p>

            <div className="mt-4">
              <label className="block text-lg font-semibold text-gray-700">Select Payment Method:</label>
              <select
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-4 focus:ring-purple-400 bg-gray-100"
              >
                <option value="" disabled>Select Payment Method</option>
                <option value="UPI">UPI</option>
                <option value="Card">Card</option>
              </select>
            </div>

            <button
              onClick={handlePaymentSubmit}
              className="mt-4 w-full bg-gradient-to-r from-purple-500 to-blue-600 text-white text-lg font-bold px-6 py-3 rounded-full hover:from-purple-600 hover:to-blue-700 transition duration-300"
            >
              Pay & Book
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Book;
