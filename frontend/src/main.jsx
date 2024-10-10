import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter  } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Header from './components/Header.jsx'
import { Link } from 'react-scroll';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Header/>
    <App />
    <footer className="bg-gray-900 text-white py-8 text-center">
        <p>&copy; 2024 INFINIX CORP. All rights reserved.</p>
        <nav className="flex justify-center space-x-4">
          <Link to="features" smooth={true} className="hover:text-purple-500 cursor-pointer">
            Features
          </Link>
          <Link to="about" smooth={true} className="hover:text-purple-500 cursor-pointer">
            About
          </Link>
          <Link to="testimonials" smooth={true} className="hover:text-purple-500 cursor-pointer">
            Testimonials
          </Link>
          <Link to="contact" smooth={true} className="hover:text-purple-500 cursor-pointer">
            Contact
          </Link>
        </nav>
      </footer>
    </BrowserRouter>
  </StrictMode>,
)
