import React, { useState, useEffect } from "react";
import "./Header.css";
import logo from "../../assets/Images/logo.jpg";
import { Link } from "react-router-dom";

const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [servicesData, setServicesData] = useState([]); // ✅ NEW

  const closeMenu = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  // ✅ FETCH SERVICES API
  useEffect(() => {
    fetch("https://www.sirsonite.in/sirsonite-d/omkaradmin/api/Services/home")
      .then((res) => res.json())
      .then((data) => setServicesData(data.data || []))
      .catch((err) => console.log(err));
  }, []);

  // ✅ SLUG FUNCTION
  const createSlug = (title) =>
    title?.toLowerCase().replace(/\s+/g, "-");

  return (
    <header className="main-header">

      <div className="container header-flex">

        {/* LOGO */}
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        {/* NAVBAR */}
        <nav className={`navbar ${menuOpen ? "open" : ""}`}>

          <ul className="nav-menu">

            <li>
              <Link to="/" className="nav-link" onClick={closeMenu}>
                <b>Home</b>
              </Link>
            </li>

            <li>
              <Link to="/about" className="nav-link" onClick={closeMenu}>
                <b>About Us</b>
              </Link>
            </li>

            {/* ✅ SERVICES DROPDOWN */}
            <li className={`dropdown ${servicesOpen ? "open" : ""}`}>

              <div className="services-link">

                <Link
                  to="/services"
                  className="nav-link"
                  onClick={closeMenu}
                >
                  <b>Services</b>
                </Link>

                <span
                  className="dropdown-arrow"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setServicesOpen(!servicesOpen);
                  }}
                >
                  ▾
                </span>

              </div>

              {/* ✅ DYNAMIC MENU */}
              <ul className="dropdown-menu">

                {servicesData.map((item, i) => (
                  <li key={i}>
                    <Link
                      to={`/service-details/${createSlug(item.title)}`} // ✅ FIX
                      onClick={closeMenu}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}

              </ul>

            </li>

            <li>
              <Link to="/iso" className="nav-link" onClick={closeMenu}>
                <b>ISO Standards</b>
              </Link>
            </li>

            <li>
              <Link to="/blog" className="nav-link" onClick={closeMenu}>
                <b>Blog</b>
              </Link>
            </li>

            <li>
              <Link to="/careers" className="nav-link" onClick={closeMenu}>
                <b>Careers</b>
              </Link>
            </li>

          </ul>

          <Link to="/ContactUs" className="btn-contact" onClick={closeMenu}>
            Contact Us
          </Link>

        </nav>

        {/* HAMBURGER */}
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>

    </header>
  );
};

export default Header;