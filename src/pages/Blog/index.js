// // import React from "react";

// // import "./Blog.css";
// // import BLogImg from "../../assets/Images/Blog_hero.png";
// // import BlogCard from "./BlogCard";
// // import Blog1 from "../../assets/Images/Blog1.png";
// // import Footer from "../../components/Footer/index.js";
// // import { useNavigate } from "react-router-dom";
// // const Blog = ({
// //   title = "ISO Knowledge Hub",
// //   description = "Expert insights, best practices, and latest updates on ISO certification and quality management",
// // }) => {
// //   const navigate = useNavigate();


  
// //   return (

    
// //     <div>
// //       <section className="blog-featured">
// //         <div className="blog-image">
// //           <img src={BLogImg} alt="Blog cover" />
// //           <div className="overlay"></div>
// //         </div>
// //         <div className="blog-content">
// //           <h1 className="blog-title">{title}</h1>
// //           <p className="blog-description">{description}</p>
// //         </div>
// //       </section>
// //       <section className="featured-section">
// //         <div className="section-label-wrapper">
// //           <div className="section-label">
// //             <span className="dot"></span>
// //             <span className="label-text">Featured Article</span>
// //           </div>
// //         </div>
// //         <div className="featured-card">
// //           <div className="featured-image">
// //             <span className="badge">ISO</span>
// //             <img src={Blog1} alt="ISO Article" />
// //           </div>
// //           <div className="featured-content">
// //             <div className="card1">
// //               <div className="meta">
// //                 <div className="meta-item">
// //                   <svg width="20" height="20" viewBox="0 0 64 64" fill="none">
// //                     <rect
// //                       x="12"
// //                       y="18"
// //                       width="40"
// //                       height="34"
// //                       rx="6"
// //                       stroke="#0E7490"
// //                       strokeWidth="3"
// //                     />
// //                     <line
// //                       x1="12"
// //                       y1="26"
// //                       x2="52"
// //                       y2="26"
// //                       stroke="#0E7490"
// //                       strokeWidth="3"
// //                     />
// //                     <line
// //                       x1="22"
// //                       y1="12"
// //                       x2="22"
// //                       y2="22"
// //                       stroke="#0E7490"
// //                       strokeWidth="3"
// //                       strokeLinecap="round"
// //                     />
// //                     <line
// //                       x1="42"
// //                       y1="12"
// //                       x2="42"
// //                       y2="22"
// //                       stroke="#0E7490"
// //                       strokeWidth="3"
// //                       strokeLinecap="round"
// //                     />
// //                   </svg>
// //                   <span>January 25, 2026</span>
// //                 </div>
// //                 <div className="meta-item">
// //                   <svg width="20" height="20" viewBox="0 0 64 64" fill="none">
// //                     <circle
// //                       cx="32"
// //                       cy="22"
// //                       r="8"
// //                       stroke="#0E7490"
// //                       strokeWidth="3"
// //                     />
// //                     <path
// //                       d="M16 48C16 40 22 36 32 36C42 36 48 40 48 48"
// //                       stroke="#0E7490"
// //                       strokeWidth="3"
// //                       strokeLinecap="round"
// //                     />
// //                   </svg>
// //                   <span>Omkar Consultancy Team</span>
// //                 </div>
// //               </div>
// //               <h2 className="featured-title">
// //                 10 Key Benefits of ISO 9001:2015 Certification
// //               </h2>
// //               <p className="featured-description">
// //                 Discover how ISO 9001:2015 certification can transform your
// //                 organization and boost customer satisfaction.
// //               </p>
// //               <button className="read-link" onClick={() => navigate("/blog/1")}>
// //                 Read Full Article
// //                 <span className="read-arrow">
// //                   <svg
// //                     width="18"
// //                     height="18"
// //                     viewBox="0 0 24 24"
// //                     fill="none"
// //                     stroke="#0B82AD"
// //                     strokeWidth="2"
// //                     strokeLinecap="round"
// //                     strokeLinejoin="round"
// //                   >
// //                     <path d="M5 12h14"></path>
// //                     <path d="M13 5l7 7-7 7"></path>
// //                   </svg>
// //                 </span>
// //               </button>
// //             </div>
// //           </div>
// //         </div>

// //         <div className="featured-card">
// //           <div className="featured-image">
// //             <span className="badge">ISO</span>
// //             <video className="blog-video" controls autoPlay muted loop>
// //               <source src={Blog1} type="video/mp4" />
// //               Your browser does not support the video tag.
// //             </video>
// //           </div>
// //           <div className="featured-content">
// //             <div className="card1">
// //               <div className="meta">
// //                 <div className="meta-item">
// //                   <svg width="20" height="20" viewBox="0 0 64 64" fill="none">
// //                     <rect
// //                       x="12"
// //                       y="18"
// //                       width="40"
// //                       height="34"
// //                       rx="6"
// //                       stroke="#0E7490"
// //                       strokeWidth="3"
// //                     />
// //                     <line
// //                       x1="12"
// //                       y1="26"
// //                       x2="52"
// //                       y2="26"
// //                       stroke="#0E7490"
// //                       strokeWidth="3"
// //                     />
// //                     <line
// //                       x1="22"
// //                       y1="12"
// //                       x2="22"
// //                       y2="22"
// //                       stroke="#0E7490"
// //                       strokeWidth="3"
// //                       strokeLinecap="round"
// //                     />
// //                     <line
// //                       x1="42"
// //                       y1="12"
// //                       x2="42"
// //                       y2="22"
// //                       stroke="#0E7490"
// //                       strokeWidth="3"
// //                       strokeLinecap="round"
// //                     />
// //                   </svg>
// //                   <span>January 25, 2026</span>
// //                 </div>
// //                 <div className="meta-item">
// //                   <svg width="20" height="20" viewBox="0 0 64 64" fill="none">
// //                     <circle
// //                       cx="32"
// //                       cy="22"
// //                       r="8"
// //                       stroke="#0E7490"
// //                       strokeWidth="3"
// //                     />
// //                     <path
// //                       d="M16 48C16 40 22 36 32 36C42 36 48 40 48 48"
// //                       stroke="#0E7490"
// //                       strokeWidth="3"
// //                       strokeLinecap="round"
// //                     />
// //                   </svg>
// //                   <span>Omkar Consultancy Team</span>
// //                 </div>
// //               </div>
// //               <h2 className="featured-title">
// //                 10 Key Benefits of ISO 9001:2015 Certification
// //               </h2>
// //               <p className="featured-description">
// //                 Discover how ISO 9001:2015 certification can transform your
// //                 organization and boost customer satisfaction.
// //               </p>
// //               <button className="read-link" onClick={() => navigate("/blog/1")}>
// //                 Read Full Article
// //                 <span className="read-arrow">
// //                   <svg
// //                     width="18"
// //                     height="18"
// //                     viewBox="0 0 24 24"
// //                     fill="none"
// //                     stroke="#0B82AD"
// //                     strokeWidth="2"
// //                     strokeLinecap="round"
// //                     strokeLinejoin="round"
// //                   >
// //                     <path d="M5 12h14"></path>
// //                     <path d="M13 5l7 7-7 7"></path>
// //                   </svg>
// //                 </span>
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       </section>
// //       <section>
// //         <BlogCard />
// //       </section>
// //       <Footer />
// //     </div>
// //   );
// // };

// // export default Blog;
// import React, { useEffect, useState } from "react";
// import "./Blog.css";
// import BLogImg from "../../assets/Images/Blog_hero.png";
// import BlogCard from "./BlogCard";
// import Footer from "../../components/Footer";
// import { useNavigate } from "react-router-dom";

// const Blog = () => {
//   const navigate = useNavigate();
//   const [featured, setFeatured] = useState(null);

//   useEffect(() => {
//     fetch("https://www.sirsonite.in/sirsonite-d/omkaradmin/api/blogs")
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.success && data.featured.length > 0) {
//           setFeatured(data.featured[0]);
//         }
//       })
//       .catch((err) => console.error(err));
//   }, []);

//   return (
//     <div>
//       {/* HERO */}
//       <section className="blog-featured">
//         <div className="blog-image">
//           <img src={BLogImg} alt="Blog cover" />
//           <div className="overlay"></div>
//         </div>

//         <div className="blog-content">
//           <h1 className="blog-title">ISO Knowledge Hub</h1>
//           <p className="blog-description">
//             Expert insights, best practices, and latest updates on ISO certification
//           </p>
//         </div>
//       </section>

//       {/* FEATURED */}
//       <section className="featured-section">
//         <div className="section-label-wrapper">
//           <div className="section-label">
//             <span className="dot"></span>
//             <span className="label-text">Featured Article</span>
//           </div>
//         </div>

//         {featured && (
//           <div className="featured-card">
//             <div className="featured-image">
//               <span className="badge">ISO</span>
//               <img src={featured.image} alt={featured.heading} />
//             </div>

//             <div className="featured-content">
//               <div className="card1">
//                 <div className="meta">
//                   <span>{featured.date}</span>
//                   <span>Omkar Consultancy Team</span>
//                 </div>

//                 <h2 className="featured-title">{featured.heading}</h2>
//                 <p className="featured-description">{featured.short}</p>

//                 <button
//                   className="read-link"
//                   onClick={() => navigate(`/blog/${featured.slug}`)}
//                 >
//                   Read Full Article →
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </section>

//       {/* BLOG LIST */}
//       <BlogCard />

//       <Footer />
//     </div>
//   );
// };

// export default Blog;

import React, { useEffect, useState } from "react";
import "./Blog.css";
import BLogImg from "../../assets/Images/Blog_hero.png";
import BlogCard from "./BlogCard";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";

const Blog = () => {
  const navigate = useNavigate();
  const [featured, setFeatured] = useState(null);

  useEffect(() => {
    fetch("https://www.sirsonite.in/sirsonite-d/omkaradmin/api/blogs")
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.featured.length > 0) {
          setFeatured(data.featured[0]);
        }
      })
      .catch(console.error);
  }, []);

  return (
    <div>
      <section className="blog-featured">
        <div className="blog-image">
          <img src={BLogImg} alt="Blog cover" />
          <div className="overlay"></div>
        </div>

        <div className="blog-content">
          <h1 className="blog-title">ISO Knowledge Hub</h1>
          <p className="blog-description">
            Expert insights, best practices, and latest updates
          </p>
        </div>
      </section>

      <section className="featured-section">
        <div className="section-label-wrapper">
          <div className="section-label">
            <span className="dot"></span>
            <span className="label-text">Featured Article</span>
          </div>
        </div>

        {featured && (
          <div className="featured-card">
            <div className="featured-image">
              <span className="badge">ISO</span>
              <img src={featured.image} alt={featured.heading} />
            </div>

            <div className="featured-content">
              <div className="card1">
                <div className="meta">
                  <span>{featured.date}</span>
                  <span>Omkar Consultancy Team</span>
                </div>

                <h2 className="featured-title">{featured.heading}</h2>
                <p className="featured-description">{featured.short}</p>

                <button
                  className="read-link"
                  onClick={() => navigate(`/blog/${featured.slug}`)} 
                >
                  Read Full Article →
                </button>
              </div>
            </div>
          </div>
        )}
      </section>

      <BlogCard />
      <Footer />
    </div>
  );
};

export default Blog;