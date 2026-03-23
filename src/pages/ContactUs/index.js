import React, { useState } from "react";
import "./ContactUs.css";
import supportImg from "../../assets/Images/Contact_us-isoCerticicate.jpg";
import Footer from "../../components/Footer";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        "https://www.sirsonite.in/sirsonite-d/omkaradmin/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      console.log("Success:", data);
      alert("Message sent successfully ✅");

      
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <section className="contact-banner">
        <div className="contact-inner">
          <h2>Contact Us</h2>
          <p>Get in touch with our ISO certification experts</p>
        </div>
      </section>

      <section className="iso-journey">
        <div className="container iso-flex">
          <div className="iso-content">
            <h2>Let's Start Your ISO Certification Journey</h2>
            <p className="iso-text">
              Whether you're looking for ISO certification, training programs,
              or consulting services, our team is ready to help.
            </p>
          </div>

          <div className="iso-image">
            <img src={supportImg} alt="Support team" />
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-wrapper">
          <div className="contact-form-card">
            <h2 className="contact-title">Send Us a Message</h2>

            <form className="contact-form" onSubmit={handleSubmit}>
              <label>Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <label>Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <label>Phone *</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />

              <label>Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              />

              <label>Message *</label>
              <textarea
                rows="4"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>

              <button type="submit" className="send-btn" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          <div className="contact-right">
            <div className="map-card">
              <iframe
                src="https://www.google.com/maps?q=394/4%20Radha%20Apartment%20Sai%20Section%20Ambernath%20East%20421501&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                title="Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactUs;