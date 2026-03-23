// // import React, { useEffect, useState } from "react";
// // import { ReactComponent as FileIcon } from "../../../assets/Images/file-icon.svg";
// // import { ReactComponent as TrainingIcon } from "../../../assets/Images/Trainini-card-icon.svg";
// // import { ReactComponent as GroupIcon } from "../../../assets/Images/group-icon.svg";
// // import "./Services.css";
// // import { Link } from "react-router-dom";

// // const ServicesSection = () => {
// //   const [apiData, setApiData] = useState([]);

// //   const staticCards = [
// //     {
// //       icon: (
// //         <svg width="44" height="37">
// //           <path fill="#0B82AD" />
// //         </svg>
// //       ),
// //       class: "service-card teal-card",
// //     },
// //     {
// //       icon: <FileIcon />,
// //       class: "service-card1 white-card",
// //     },
// //     {
// //       icon: <TrainingIcon />,
// //       class: "service-card teal-card",
// //     },
// //     {
// //       icon: <GroupIcon />,
// //       class: "service-card1 white-card",
// //     },
// //     {
// //       icon: <FileIcon />,
// //       class: "service-card teal-card",
// //     },
// //     {
// //       icon: <TrainingIcon />,
// //       class: "service-card1 white-card",
// //     },
// //     {
// //       icon: <GroupIcon />,
// //       class: "service-card teal-card",
// //     },
// //     {
// //       icon: <FileIcon />,
// //       class: "service-card1 white-card",
// //     },
// //   ];

// //   useEffect(() => {
// //     fetch("https://www.sirsonite.in/sirsonite-d/omkaradmin/api/Services/home")
// //       .then((res) => res.json())
// //       .then((data) => {
// //         console.log("API 👉", data);
// //         setApiData(data.data || []);
// //       })
// //       .catch((err) => console.log(err));
// //   }, []);

// //   return (
// //     <section className="services-section">
// //       <div className="section-header">
// //         <h2>Our Services</h2>
// //       </div>

// //       <div className="slider-wrapper">
// //         <div className="services-slider">
// //           <div className="services-track">
// //             {apiData.map((item, i) => {
// //               const staticItem = staticCards[i] || staticCards[0];

// //               return (
// //                 <Link
// //                   key={i}
// //                   to={`/service-details/${i}`}
// //                   className="service-item"
// //                 >
// //                   <div className={staticItem.class}>
                    
// //                     {/* ✅ ICON */}
// //                     <div className="icon-box">
// //                       {staticItem.icon}
// //                     </div>

// //                     {/* ✅ API DATA */}
// //                     <h3>{item.title}</h3>
// //                     <p>{item.home_content || "No description"}</p>
// //                   </div>
// //                 </Link>
// //               );
// //             })}
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default ServicesSection;
// import React, { useEffect, useState } from "react";
// import { ReactComponent as FileIcon } from "../../../assets/Images/file-icon.svg";
// import { ReactComponent as TrainingIcon } from "../../../assets/Images/Trainini-card-icon.svg";
// import { ReactComponent as GroupIcon } from "../../../assets/Images/group-icon.svg";
// import "./Services.css";
// import { Link } from "react-router-dom";

// const ServicesSection = () => {
//   const [apiData, setApiData] = useState([]);

//   const staticCards = [
//     { icon: <FileIcon />, class: "service-card teal-card" },
//     { icon: <FileIcon />, class: "service-card1 white-card" },
//     { icon: <TrainingIcon />, class: "service-card teal-card" },
//     { icon: <GroupIcon />, class: "service-card1 white-card" },
//     { icon: <FileIcon />, class: "service-card teal-card" },
//     { icon: <TrainingIcon />, class: "service-card1 white-card" },
//     { icon: <GroupIcon />, class: "service-card teal-card" },
//     { icon: <FileIcon />, class: "service-card1 white-card" },
//   ];

//   useEffect(() => {
//     fetch("https://www.sirsonite.in/sirsonite-d/omkaradmin/api/Services/home")
//       .then((res) => res.json())
//       .then((data) => setApiData(data.data || []))
//       .catch(console.error);
//   }, []);

//   // 🔥 FIX: generate slug from title
//   const createSlug = (title) =>
//     title.toLowerCase().replace(/\s+/g, "-");

//   return (
//     <section className="services-section">
//       <h2>Our Services</h2>

//       <div className="services-track">
//         {apiData.map((item, i) => {
//           const staticItem = staticCards[i] || staticCards[0];

//           return (
//             <Link
//               key={i}
//               to={`/service-details/${createSlug(item.title)}`} // ✅ FIXED
//               className="service-item"
//             >
//               <div className={staticItem.class}>
//                 <div className="icon-box">{staticItem.icon}</div>
//                 <h3>{item.title}</h3>
//                 <p>{item.home_content || "No description"}</p>
//               </div>
//             </Link>
//           );
//         })}
//       </div>
//     </section>
//   );
// };

// export default ServicesSection;

import React, { useEffect, useState } from "react";
import { ReactComponent as FileIcon } from "../../../assets/Images/file-icon.svg";
import { ReactComponent as TrainingIcon } from "../../../assets/Images/Trainini-card-icon.svg";
import { ReactComponent as GroupIcon } from "../../../assets/Images/group-icon.svg";
import "./Services.css";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  const [apiData, setApiData] = useState([]);

  const staticCards = [
    { icon: <FileIcon />, class: "service-card teal-card" },
    { icon: <FileIcon />, class: "service-card1 white-card" },
    { icon: <TrainingIcon />, class: "service-card teal-card" },
    { icon: <GroupIcon />, class: "service-card1 white-card" },
    { icon: <FileIcon />, class: "service-card teal-card" },
    { icon: <TrainingIcon />, class: "service-card1 white-card" },
    { icon: <GroupIcon />, class: "service-card teal-card" },
    { icon: <FileIcon />, class: "service-card1 white-card" },
  ];

  useEffect(() => {
    fetch("https://www.sirsonite.in/sirsonite-d/omkaradmin/api/Services/home")
      .then((res) => res.json())
      .then((data) => setApiData(data.data || []))
      .catch(console.error);
  }, []);

  // ✅ slug generator
  const createSlug = (title) =>
    title?.toLowerCase().replace(/\s+/g, "-");

  return (
    <section className="services-section">
      <div className="section-header">
        <h2>Our Services</h2>
      </div>

      <div className="slider-wrapper">
        <div className="services-slider">
          <div className="services-track">
            {apiData.map((item, i) => {
              const staticItem = staticCards[i] || staticCards[0];

              return (
                <Link
                  key={i}
                  to={`/service-details/${createSlug(item.title)}`} // ✅ FIX
                  className="service-item"
                >
                  <div className={staticItem.class}>
                    <div className="icon-box">{staticItem.icon}</div>

                    <h3>{item.title}</h3>
                    <p>{item.home_content || "No description"}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;