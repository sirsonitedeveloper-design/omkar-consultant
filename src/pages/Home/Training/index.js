
import React, { useEffect, useState } from "react";
import "./Training.css";
import { Link } from "react-router-dom";
import ContactModal from "../../../components/ConsultationModal/index.js";

const TrainingSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [courses, setCourses] = useState([]);

  // API CALL
  useEffect(() => {
    fetch("https://sirsonite.in/sirsonite-d/omkaradmin/api/courses/latest")
      .then((res) => res.json())
      .then((data) => {
        if (data.status) {
          setCourses(data.data);
        }
      })
      .catch((err) => console.log("API Error:", err));
  }, []);

  return (
    <section className="training-section">
      <div className="container">
        <div className="section-header">
          <h2>Training Programs</h2>
          <p>
            Professional training by certified experts with practical approach
          </p>
        </div>

        <div className="training-grid">
          {courses.length === 0 ? (
            <p>Loading training programs...</p>
          ) : (
            courses.map((item, index) => (
              <div className="training-card" key={index}>
                <div className="card-header">
                  <div className="top-tags">
                    <span className="tag-pill">
                      {item.badge || "Both"}
                    </span>
                    <span className="tag-pill white">
                      {item.duration || "N/A"}
                    </span>
                  </div>

                  <h3>{item.title}</h3>
                  <p className="iso-sub">{item.category}</p>
                </div>

                <div className="card-body">
                  <p className="price-label">Fees</p>
                  <h4 className="price">
                    {item.fees || "Contact for pricing"}
                  </h4>

                  <p className="description">
                    {item.short_description ||
                      "Professional ISO training program with expert guidance."}
                  </p>

                  <button
                    onClick={() => {
                      console.log("Clicked");
                      setShowModal(true);
                    }}
                    className="btn-enquire"
                  >
                    Enquiry Now
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <div className="view-all-container">
        <Link to="/Services" className="btn-view-all">
          View All Training Programs
        </Link>
      </div>

      <ContactModal
        show={showModal}
        onClose={() => setShowModal(false)}
      />
    </section>
  );
};

export default TrainingSection;