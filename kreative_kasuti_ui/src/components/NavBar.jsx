import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function NavBar() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  return (
    <nav className="w-full max-w-screen-xl mx-auto p-4 flex justify-between items-center text-primary-text-color mt-8">
      {/* LOGO */}
      <Link
        to="/"
        className={`text-primary-text-color text-3xl font-bold ${
          activeLink === "/" && "border-b-2 border-primary-button"
        }`}
      >
        <span style={{ color: "#FFFF00" }}>Kreative</span>{" "}
        <span className="text-primary-text-color">Kasuti</span>
      </Link>

      {/* PAGES */}
      <div className="text-xl font-bold flex gap-4">
        <Link
          to="/"
          className={`text-primary-text-color ${
            activeLink === "/" && "border-b-2 border-primary-button"
          }`}
        >
          HOME
        </Link>
        <Link
          to="/gallery"
          className={`text-primary-text-color ${
            activeLink === "/gallery" && "border-b-2 border-primary-button"
          }`}
        >
          GALLERY
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
      </div>
    </nav>
  );
}

export default NavBar;
