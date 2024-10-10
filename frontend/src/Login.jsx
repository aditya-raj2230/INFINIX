import React from 'react';
import logo from './assets/logo.png'; // Ensure this path is correct
import googleLogo from './assets/search.png'; // Ensure this path is correct

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-md border border-gray-300">
        <img src={logo} alt="Logo" className="w-32 mx-auto mb-6" />
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Login</h2>
        <form>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition duration-300 mb-4"
          >
            Login
          </button>
        </form>
        <div className="flex items-center justify-between my-4">
          <hr className="w-full border-gray-300" />
          <span className="mx-2 text-gray-600">or</span>
          <hr className="w-full border-gray-300" />
        </div>
        <button
          className="w-full bg-white border border-gray-300 text-purple-600 px-6 py-3 rounded-full flex items-center justify-center hover:bg-gray-100 transition duration-300 mb-4"
          onClick={() => {/* Handle Google OAuth here */}}
        >
          <img src={googleLogo} alt="Google Logo" className="w-5 h-5 mr-2" />
          Login with Google
        </button>
        <p className="mt-4 text-center text-gray-600">
          Don't have an account? <a href="/register" className="text-purple-600 hover:underline">Register here</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
