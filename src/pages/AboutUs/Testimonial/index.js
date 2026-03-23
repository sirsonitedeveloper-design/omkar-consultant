import React, { useState, useEffect } from "react";
import "./Testimonial.css";

export default function Testimonials() {
  const [testimonialsData, setTestimonialsData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleCards = 3;

  useEffect(() => {
    fetch("https://www.sirsonite.in/sirsonite-d/omkaradmin/api/testimonials")
      .then((res) => res.json())
      .then((data) => {
        if (data.status) {
          setTestimonialsData(data.data);
        }
      })
      .catch((err) => console.error("API Error:", err));
  }, []);

  const nextSlide = () => {
    if (currentIndex < testimonialsData.length - visibleCards) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section className="testimonial-section">
      <div className="testimonial-container">
        <div className="testimonial-header">
          <h2>Client Testimonials</h2>
          <p>Hear what our clients say about our services</p>
        </div>

        <div className="carousel-wrapper">
          <button className="arrow left" onClick={prevSlide}>
            ‹
          </button>

          <div className="testimonial-slider">
            <div
              className="testimonial-grid"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
              }}
            >
              {testimonialsData.map((item, index) => (
                <div className="testimonial-card" key={item.id}>
                  
                  <div className="stars">
                    {"★".repeat(item.rating)}
                    {"☆".repeat(5 - item.rating)}
                  </div>

                  <p
                    className="testimonial-text"
                    dangerouslySetInnerHTML={{ __html: item.quote }}
                  ></p>

                  <div className="testimonial-user">
                    
                    <div className="avatar">
                      {item.avatar || item.name.charAt(0)}
                    </div>

                    <div>
                      <h4>{item.name}</h4>
                      <span>
                        {item.role}, {item.company}
                      </span>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>

          <button className="arrow right" onClick={nextSlide}>
            ›
          </button>
        </div>
      </div>
    </section>
  );
}