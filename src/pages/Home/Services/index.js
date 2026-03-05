import React from "react";
import searchIcon from "../../../assets/Images/search-icon.svg";
import fileIcon from "../../../assets/Images/file-icon.svg";
import training from "../../../assets/Images/Trainini-card-icon.svg";
import groupIcon from "../../../assets/Images/group-icon.svg";
import "./Services.css";

const ServicesSection = () => {
  const cards = [
    {
      icon: searchIcon,
      title: "Gap Audit",
      desc: "Identify compliance gaps and improvement areas in your management systems",
      class: "service-card teal-card",
    },
    {
      icon: fileIcon,
      title: "Internal Audit",
      desc: "Identify compliance gaps and improvement areas in your management systems",
      class: "service-card1 white-card",
    },
    {
      icon: training,
      title: "Customized Trainings",
      desc: "Tailored training programs designed for your team's specific needs.",
      class: "service-card teal-card",
    },
    {
      icon: groupIcon,
      title: "Transition Of Standards",
      desc: "Seamless migration to updated ISO standards with expert guidance.",
      class: "service-card1 white-card",
    },
  ];

  return (
    <section className="services-section">
      <div className="section-header">
        <h2>Our Services</h2>
        <p>
          Comprehensive ISO consulting and training solutions tailored to your
          business needs
        </p>
      </div>

      <div className="slider-wrapper">
        <div className="services-slider">
          <div className="services-track">
            {[...cards, ...cards].map((card, i) => (
              <div key={i} className="service-item">
                <div className={card.class}>
                  <div className="icon-box">
                    <img src={card.icon} alt={card.title} />
                  </div>

                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
