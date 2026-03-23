// import React from "react";
// import "./IsoCards.css";
// import { Link } from "react-router-dom";
// import Footer from "../../../components/Footer/index.js";

// const CarsData = [
//   {
//     mode: "Both",
//     duration: "4 Hr",
//     title: "ISO 9001:2015 Internal Auditor Training",
//     iso: "ISO 9001:2015",
//     price: "₹2,000 per participant",
//     fees: "Fees per participant",
//     description:
//       "Comprehensive training on conducting internal audits for ISO 9001:2015 Quality Management System.",
//   },
//   {
//     mode: "Virtual",
//     duration: "4 Hr",
//     title: "ISO 14001:2015 Awareness Training",
//     iso: "ISO 14001:2015",
//     price: "₹2,000 per participant",
//     fees: "Fees per participant",
//     description:
//       "Basic awareness training on Environmental Management System requirements and implementation.",
//   },
//   {
//     mode: "Classroom",
//     duration: "4 Hr",
//     title: "ISO 45001:2018 Lead Auditor Training",
//     iso: "ISO 45001:2018",
//     price: "₹2,000 per participant",
//     fees: "Fees per participant",
//     description:
//       "Internationally recognized lead auditor training for Occupational Health & Safety Management System.",
//   },
//   {
//     mode: "Both",
//     duration: "3 Days",
//     title: "Intergrated awrness Training on quality",
//     iso: "ISO 22000:2018",
//     price: "₹15,000 per participant",
//     fees: "Fees per participant",
//     description: "Enviorment and health & saftey IMS Training",
//   },
//   {
//     mode: "Virtual",
//     duration: "4 Hr",
//     title: "ISO 27001:2013 Implementation Training",
//     iso: "ISO 27001:2013",
//     price: "₹5,000 per participant",
//     fees: "Fees per participant",
//     description:
//       "Complete guide to implementing Information Security Management System in your organization.",
//   },
//   {
//     mode: "Classroom",
//     duration: "2 Days",
//     title: "ISO 9001:2015 Awareness Training",
//     iso: "ISO 13485:2016",
//     price: "₹12,000 per participant",
//     fees: "Fees per participant",
//     description:
//       "Awareness training on Medical Devices Quality Management System requirements.",
//   },
//   {
//     mode: "Classroom",
//     duration: "2 Days",
//     title: "ISO 9001:2015 Quality mangment system",
//     iso: "ISO 9001:2015",
//     price: "₹12,000 per participant",
//     fees: "Fees per participant",
//     description: "",
//   },
//   {
//     mode: "Classroom",
//     duration: "2 Days",
//     title: "ISO 14001:2015 Enviorment mangment system",
//     iso: "",
//     price: "₹12,000 per participant",
//     fees: "Fees per participant",
//     description: "",
//   },
//   {
//     mode: "Classroom",
//     duration: "2 Days",
//     title: "ISO 45001:2015 Enviorment mangment system ",
//     iso: "",
//     price: "₹12,000 per participant",
//     fees: "Fees per participant",
//     description: "",
//   },
// ];

// const IsoCard = () => {
//   return (
//     <>
//       <section className="isoStandards-training-section">
//         <div className="isoStandards-container">
//           <div className="isoStandards-training-grid">
//             {CarsData.map((card, index) => (
//               <div className="isoStandards-training-card" key={index}>
//                 <div className="isoStandards-card-header">
//                   <div className="isoStandards-top-tags">
//                     <span className="isoStandards-tag-pill">{card.mode}</span>
//                     <span className="isoStandards-tag-pill white">
//                       {card.duration}
//                     </span>
//                   </div>
//                   <h3>{card.title}</h3>
//                   <p className="isoStandards-iso-sub">{card.iso}</p>
//                 </div>

//                 <div className="isoStandards-card-body">
//                   <p className="isoStandards-price-label">{card.fees}</p>
//                   <h4 className="isoStandards-price">{card.price}</h4>
//                   <p className="isoStandards-description">{card.description}</p>
//                   <Link to="/IsoCertification" className="isoStandards-btn-enquire">
//                     Learn More
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <div style={{ height: "10px" }} />

     
//     </>
//   );
// };

// export default IsoCard;
import React, { useEffect, useState } from "react";
import "./IsoCards.css";
import { Link } from "react-router-dom";

const IsoCard = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch(
          "https://www.sirsonite.in/sirsonite-d/omkaradmin/api/courses"
        );
        const data = await res.json();

        if (data.status) {
          setCourses(data.data);
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchCourses();
  }, []);

  return (
    <section className="isoStandards-training-section">
      <div className="isoStandards-container">
        <div className="isoStandards-training-grid">
          
          {courses.map((card, index) => (
            <div className="isoStandards-training-card" key={index}>
              
              {/* HEADER */}
              <div className="isoStandards-card-header">
                <div className="isoStandards-top-tags">
                  <span className="isoStandards-tag-pill">
                    {card.badge}
                  </span>
                  <span className="isoStandards-tag-pill white">
                    {card.duration}
                  </span>
                </div>

                <h3>{card.title}</h3>
                <p className="isoStandards-iso-sub">
                  {card.category}
                </p>
              </div>

              {/* BODY */}
              <div className="isoStandards-card-body">
                <p className="isoStandards-price-label">
                  Fees per participant
                </p>

                <h4 className="isoStandards-price">
                  {card.fees}
                </h4>

                <p className="isoStandards-description">
                  {card.short_description || "No description available"}
                </p>

                {card.slug ? (
                  <Link
                    to={`/iso/${card.slug}`}
                    className="isoStandards-btn-enquire"
                  >
                    Learn More
                  </Link>
                ) : (
                  <button className="isoStandards-btn-enquire disabled">
                    Not Available
                  </button>
                )}
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default IsoCard;