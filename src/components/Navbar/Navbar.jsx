import './Navbar.css';
import Icon from '../../assets/icon-logo.png';
import Boy from '../../assets/boy.png';
import { Link } from 'react-router-dom'; 

import React, { useState, useEffect } from 'react';

function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setShow(false);
    } else {
      setShow(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  // New function for smooth scroll to dashboard
  const scrollToDashboard = () => {
    const element = document.getElementById("dashboard");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`navbar ${show ? "navbar--show" : "navbar--hide"} sm:w-[80%] mx-auto sticky top-3 z-10 custom-navbar`}>
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <span className="text-2xl text-white font-semibold">
            <img src={Icon} alt="icon" className="w-8" />
          </span>

          <div className="flex items-center space-x-6 text-white text-sm sm:text-base">
            {/* Changed Link to span with onClick */}
            <span
              onClick={scrollToDashboard}
              className="cursor-pointer hover:text-gray-300 transition"
            >
              Dashboard
            </span>

            <Link
              to="/myflashcards"
              className="cursor-pointer hover:text-gray-300 transition"
            >
              My FlashCards
            </Link>

            <div className="flex items-center space-x-2 pl-7">
              <span className="cursor-pointer flex items-center hover:text-gray-300 transition">
                Hey, Adithya
              </span>
              <img src={Boy} alt="Boy" className="w-10 h-10 rounded-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
