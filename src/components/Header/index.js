import React, { useState } from "react";
import "./Header.css";
import logo from "../../assets/Images/logo.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="main-header">
      <div className="container header-flex">
        <div className="logo">
          <img src={logo} alt="Logo" />
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

         
            <li className="dropdown">
  <span className="nav-link">
    <b>Services ▾</b>
  </span>

  <ul className="dropdown-menu">
    <li>
      <Link to="/service-details">Gap Audit</Link>
    </li>

    <li>
      <Link to="/service-details">Internal Audit</Link>
    </li>

    <li>
      <Link to="/service-details">Customized Trainings</Link>
    </li>

    <li>
      <Link to="/service-details">Transition Of Standards</Link>
    </li>
     <li>
      title: "Virtual Trainings",
      <Link to="/service-details"></Link>
    </li>

    <li>
      <Link to="/service-details">Supplier Audits</Link>
    </li>
     <li>
      <Link to="/service-details">Documentation</Link>
    </li>
     <li>
      <Link to="/service-details">Certification Upgrades</Link>
    </li>
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
