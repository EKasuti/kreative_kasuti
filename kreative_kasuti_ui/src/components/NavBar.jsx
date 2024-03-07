import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { BsList } from "react-icons/bs";
import { IoIosClose } from "react-icons/io";

function NavBar() {
  const location = useLocation(); // Gets the current location
  const [activeLink, setActiveLink] = useState(location.pathname); // State variable that keeps track of active link
  const [showNav, setShowNav] = useState(false); // State variable to toggle visibility of navigation links on small screens

  useEffect(() => {
    setActiveLink(location.pathname); // Updates active link when location changes
    setShowNav(false); // Close the navigation menu when location changes
    setShowListIcon(true); // Show the list icon when location changes
  }, [location.pathname]);

  // Function to toggle visibility of navigation links on small screens
  const toggleNav = () => {
    setShowNav(!showNav);
    setShowListIcon(false);
  };

  const [showListIcon, setShowListIcon] = useState(true);

  return (
    <nav className="w-full max-w-screen-xl mx-auto p-4 flex justify-between items-start text-primary-text-color sm:mt-2">
      {/* LOGO */}
      <Link
        to="/"
        className={`text-primary-text-color text-2xl sm:text-3xl font-bold ${
          activeLink === "/" && "border-b-2 border-primary-button"
        }`}
      >
        <span style={{ color: "#FFFF00" }}>Kreative</span>{" "}
        <span className="text-primary-text-color">Kasuti</span>
      </Link>

      {/* Navigation Links */}
      <div
        className={`text-sm sm:text-xl flex flex-col sm:flex-row border p-2 items-start sm:border-hidden font-bold gap-4 ${
          showNav ? "block" : "hidden"
        } sm:flex`}
      >
        <Link
          to="/"
          className={`text-primary-text-color ${
            activeLink === "/" && "border-b-2 border-primary-button"
          }`}
        >
          HOME
        </Link>
        <Link
          to="/portfolio"
          className={`text-primary-text-color ${
            activeLink === "/portfolio" && "border-b-2 border-primary-button"
          }`}
        >
          PORTFOLIO
        </Link>
        <Link
          to="/contact"
          className={`text-primary-text-color ${
            activeLink === "/contact" && "border-b-2 border-primary-button"
          }`}
        >
          CONTACT
        </Link>
        <Link
          to="/shop"
          className={`text-primary-text-color ${
            activeLink === "/shop" && "border-b-2 border-primary-button"
          }`}
        >
          SHOP
        </Link>

        <div className="sm:hidden absolute top-15 right-5">
          <IoIosClose
            onClick={() => {
              toggleNav();
              setShowListIcon(true);
            }}
          />
        </div>
      </div>

      {/* List icon for smaller screens */}
      {showListIcon && (
        <div className="sm:hidden" onClick={toggleNav}>
          <BsList />
        </div>
      )}
    </nav>
  );
}

export default NavBar;
