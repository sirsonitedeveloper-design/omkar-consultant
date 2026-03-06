import React, { useState } from "react";
import "./Header.css";
import logo from "../../assets/Images/logo.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  return (
    <header className="main-header">
      <div className="container header-flex">
        <div className="logo">
          <Link to="/" onClick={closeMenu}>
            <img src={logo} alt="Logo" />
          </Link>
        </div>

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

            {/* SERVICES */}
            <li className="dropdown">
              <div className="services-link">
                <Link to="/services" className="nav-link" onClick={closeMenu}>
                  <b>Services</b>
                </Link>

                <span
                  className="dropdown-arrow"
                  onClick={() => setServicesOpen(!servicesOpen)}
                >
                  ▾
                </span>
              </div>

              {servicesOpen && (
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/service-details" onClick={closeMenu}>
                      Gap Audit
                    </Link>
                  </li>

                  <li>
                    <Link to="/service-details" onClick={closeMenu}>
                      Internal Audit
                    </Link>
                  </li>

                  <li>
                    <Link to="/service-details" onClick={closeMenu}>
                      Customized Trainings
                    </Link>
                  </li>

                  <li>
                    <Link to="/service-details" onClick={closeMenu}>
                      Transition Of Standards
                    </Link>
                  </li>

                  <li>
                    <Link to="/service-details" onClick={closeMenu}>
                      Virtual Trainings
                    </Link>
                  </li>

                  <li>
                    <Link to="/service-details" onClick={closeMenu}>
                      Supplier Audits
                    </Link>
                  </li>

                  <li>
                    <Link to="/service-details" onClick={closeMenu}>
                      Documentation
                    </Link>
                  </li>

                  <li>
                    <Link to="/service-details" onClick={closeMenu}>
                      Certification Upgrades
                    </Link>
                  </li>
                </ul>
              )}
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
