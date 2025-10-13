import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import assets from '../assets/assets'

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      {/* Navbar main content */}
      <div className="flex justify-between items-center px-4 py-3 md:py-4 md:px-10">
        {/* Logo */}
        <div className='cursor-pointer' onClick={() => navigate('/')}>
          <img src={assets.logo} alt="Logo" style={{ height: '65px' }} />
        </div>

        {/* Hamburger for mobile */}
        <button
          className="md:hidden text-3xl text-[#4E2976] focus:outline-none cursor-pointer"
          onClick={() => setSidebarOpen(true)}
          aria-label="Open sidebar"
        >
          &#9776;
        </button>

        <ul className="hidden md:flex gap-10 font-semibold items-center cursor-pointer">
          <li onClick={() => navigate('/')}>Home</li>
          <li onClick={() => navigate('/about')}>About Us</li>
          <li onClick={() => navigate('/curriculam')}>Curriculam</li>
          <li onClick={() => navigate('/gallery')}>Gallery</li>
          <li onClick={() => navigate('/contact')}>Contact</li>
        </ul>

        <div className="hidden md:block">
          <button className="bg-[#4E2976] text-white px-4 py-2 rounded cursor-pointer hover:bg-[#A34599]" onClick={() => navigate('/contact')}>
            Contact
          </button>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 md:hidden`}
      >
        <button
          className="absolute top-4 right-4 text-2xl text-[#4E2976]"
          onClick={() => setSidebarOpen(false)}
          aria-label="Close sidebar"
        >
          &times;
        </button>
        <nav className="flex flex-col mt-16 gap-6 px-8 font-semibold text-[#4E2976]">
          <Link to="/" onClick={() => setSidebarOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setSidebarOpen(false)}>About Us</Link>
          <Link to="/curriculam" onClick={() => setSidebarOpen(false)}>Curriculam</Link>
          <Link to="/gallery" onClick={() => setSidebarOpen(false)}>Gallery</Link>
          <Link to="/contact" onClick={() => setSidebarOpen(false)}>Contact</Link>
        </nav>
      </div>

      {/* Overlay with blur */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-opacity-30 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </nav>
  )
}

export default Navbar