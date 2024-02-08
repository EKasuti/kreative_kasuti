import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function NavBar() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  return (
    <nav className="w-full max-w-screen-xl mx-auto p-4 flex justify-between items-center text-white mt-8">
      {/* LOGO */}
      <Link
        to="/"
        className={`text-white text-3xl font-bold ${
          activeLink === "/" && "border-b-2 border-yellow-500"
        }`}
      >
        <span style={{ color: "#FFFF00" }}>Kreative</span>{" "}
        <span className="text-white">Kasuti</span>
      </Link>

      {/* PAGES */}
      <div className="text-xl font-bold flex gap-4">
        <Link
          to="/"
          className={`text-white ${
            activeLink === "/" && "border-b-2 border-yellow-500"
          }`}
        >
          HOME
        </Link>
        <Link
          to="/gallery"
          className={`text-white ${
            activeLink === "/gallery" && "border-b-2 border-yellow-500"
          }`}
        >
          GALLERY
        </Link>
        <Link
          to="/contact"
          className={`text-white ${
            activeLink === "/contact" && "border-b-2 border-yellow-500"
          }`}
        >
          CONTACT
        </Link>
        <Link
          to="/shop"
          className={`text-white ${
            activeLink === "/shop" && "border-b-2 border-yellow-500"
          }`}
        >
          SHOP
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
