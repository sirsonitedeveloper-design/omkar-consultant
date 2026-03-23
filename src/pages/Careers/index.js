import React, { useEffect, useState } from "react";
import "./Careers.css";
import careerImg from "../../assets/Images/Career.img.png";
import careerGrow from "../../assets/Images/Grow-career-img.png";
import whywork from "../../assets/Images/Why-work-section.png";
import Footer from "../../components/Footer/index.js";

const Careers = () => {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    const fetchCareers = async () => {
      try {
        const res = await fetch(
          "https://www.sirsonite.in/sirsonite-d/omkaradmin/api/career",
          {
            method: "GET",
          }
        );

        const data = await res.json();
        console.log("CAREER API 👉", data);

        if (Array.isArray(data)) {
          setPositions(data);
        } else if (Array.isArray(data?.data)) {
          setPositions(data.data);
        } else {
          setPositions([]);
        }
      } catch (err) {
        console.log("ERROR ❌", err);
        setPositions([]);
      }
    };

    fetchCareers();
  }, []);

  return (
    <div>
      <section className="career-section">
        <div className="career-image-wrapper">
          <img src={careerImg} alt="Join our team" className="career-bg" />

          <div className="career-overlay">
            <h1 className="career-title">Join Our Team</h1>
            <p className="career-subtitle">
              Build your career with a leading ISO certification and training consultancy
            </p>
          </div>
        </div>
      </section>

      <section className="growCareer-section">
        <div className="growCareer-container">
          <div className="growCareer-left">
            <h2 className="growCareer-heading">
              Grow Your Career with Omkar Consultancy
            </h2>

            <p className="growCareer-text">
              At Omkar Consultancy, we believe our success is built on the talent and dedication of our team members.
            </p>

            <p className="growCareer-text">
              Join a team of certified professionals passionate about quality.
            </p>

            <div className="growCareer-features">
            </div>
          </div>

          <div className="growCareer-right">
            <img src={careerGrow} alt="Career Growth" />
          </div>
        </div>
      </section>

      <section className="why-section">
        <div className="why-container">
          <div className="why-left">
            <img src={whywork} alt="Why work with us" />
          </div>

          <div className="why-right">
            <h2 className="why-heading">Why Work With Us</h2>

            <p className="why-text">
              Join a thriving organization with a proven track record.
            </p>

            <div className="why-stats">
              <div className="stat-card">
                <h3>10+</h3>
                <p>Years Experience</p>
              </div>

              <div className="stat-card">
                <h3>500+</h3>
                <p>Successful Projects</p>
              </div>

              <div className="stat-card">
                <h3>50+</h3>
                <p>Team Members</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="apply-container">
        <div className="apply-section">
          <div className="apply-header">
            <h2 className="apply-title">
              Apply for a Career at Omkar Consultancy
            </h2>

            <p className="apply-subtitle">
              Choose your area of interest and submit your details.
            </p>
          </div>

          <div className="apply-wrapper">
            <div className="form-row">
              <div className="form-group">
                <label>Full Name *</label>
                <input type="text" placeholder="Enter your full name" />
              </div>

              <div className="form-group">
                <label>Email Address *</label>
                <input type="email" placeholder="your email@example.com" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Phone number *</label>
                <input type="text" placeholder="+912345678990" />
              </div>

              <div className="form-group">
                <label>Position Applying For *</label>

                <select>
                  <option>Position</option>

                  {Array.isArray(positions) &&
                    positions.map((item, i) => (
                      <option key={i}>
                        {item.title || item.position || "Position"}
                      </option>
                    ))}
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Experience Level *</label>
                <input type="text" />
              </div>

              <div className="form-group">
                <label>Upload Resume *</label>
                <div className="upload-field">
                  <input type="file" />
                  <span className="upload-text">Choose file (PDF/DOC)</span>
                </div>
              </div>
            </div>

            <div className="form-group">
              <label>Message / Notes</label>
              <textarea placeholder="Tell us about yourself..." />
            </div>

            <button className="apply-btn">Submit Application</button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;