import React, { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const [activeLink, setActiveLink] = useState("/");

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  return (
    <nav className="flex justify-between items-center text-white mt-8 pr-20 pl-20 ">
      {/* LOGO */}
      <Link
        to="/"
        className={`text-white text-3xl font-bold `}
        onClick={() => handleLinkClick("/")}
      >
        <span style={{ color: "#FFFF00" }}>Kreative</span> <span className="text-white">Kasuti</span>

      </Link>

      {/* PAGES */}
      <div className="text-xl font-bold flex gap-4">
        <Link
          to="/"
          className={`text-white ${
            activeLink === "/" && "border-b-2 border-yellow-500"
          }`}
          onClick={() => handleLinkClick("/")}
        >
          HOME
        </Link>
        <Link
          to="/gallery"
          className={`text-white ${
            activeLink === "/gallery" && "border-b-2 border-yellow-500"
          }`}
          onClick={() => handleLinkClick("/gallery")}
        >
          GALLERY
        </Link>
        <Link
          to="/contact"
          className={`text-white ${
            activeLink === "/contact" && "border-b-2 border-yellow-500"
          }`}
          onClick={() => handleLinkClick("/contact")}
        >
          CONTACT
        </Link>
        <Link
          to="/shop"
          className={`text-white ${
            activeLink === "/shop" && "border-b-2 border-yellow-500"
          }`}
          onClick={() => handleLinkClick("/shop")}
        >
          SHOP
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
