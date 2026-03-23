// // import React from "react";
// // import "./BlogCard.css";
// // import { useNavigate } from "react-router-dom";

// // import Blog1 from "../../../assets/Images/Blog-img_1.png";
// // import Blog2 from "../../../assets/Images/Blog-img2.png";
// // import Blog3 from "../../../assets/Images/Blog-img-3.png";
// // import Blog4 from "../../../assets/Images/Blog-img-4.png";
// // import Blog5 from "../../../assets/Images/Blog-img-5.png";

// // const BlogCards = () => {
// //   const navigate = useNavigate();

// //   const blogData = [
// //     {
// //       id: 1,
// //       image: Blog1,
// //       tag: "Compliance",
// //       date: "Jan 20, 2026",
// //       author: "Environmental Expert",
// //       title: "Environmental Compliance: A Complete Guide to ISO 14001",
// //       description:
// //         "Learn about environmental regulations and how ISO 14001 helps ensure compliance while reducing environmental impact.",
// //     },
// //     {
// //       id: 2,
// //       image: Blog2,
// //       tag: "Training",
// //       date: "Jan 15, 2026",
// //       author: "Safety Consultant",
// //       title: "5 Essential Workplace Safety Tips for 2026",
// //       description:
// //         "Practical tips to improve workplace safety and reduce accidents in your organization using ISO 45001 principles.",
// //     },
// //     {
// //       id: 3,
// //       image: Blog3,
// //       tag: "ISO",
// //       date: "Jan 10, 2026",
// //       author: "Certification Expert",
// //       title: "Step-by-Step Guide to ISO Certification Process",
// //       description:
// //         "A comprehensive guide to understanding the ISO certification journey from gap analysis to final audit.",
// //     },
// //     {
// //       id: 4,
// //       image: Blog4,
// //       tag: "Training",
// //       date: "Jan 5, 2026",
// //       author: "Lead Auditor",
// //       title: "Internal Audit Best Practices for ISO Standards",
// //       description:
// //         "Master the art of conducting effective internal audits with these proven techniques and strategies.",
// //     },
// //     {
// //       id: 5,
// //       image: Blog5,
// //       tag: "Updates",
// //       date: "Jan 1, 2026",
// //       author: "Quality Manager",
// //       title: "Quality Management Trends in 2026",
// //       description:
// //         "Explore the latest trends shaping quality management and how they impact ISO 9001 implementation.",
// //     },
// //   ];

// //   return (
// //     <section className="blog-section">
// //       <div className="blog-grid">
// //         {blogData.map((item) => (
// //           <div className="iso-card" key={item.id}>
// //             <div className="iso-card-image">
// //               <img src={item.image} alt={item.title} />
// //               <span className="iso-tag">{item.tag}</span>
// //             </div>

// //             <div className="iso-card-body">
// //               <div className="iso-meta">
// //                 <span>{item.date}</span>
// //                 <span>{item.author}</span>
// //               </div>

// //               <h3 className="iso-title">{item.title}</h3>

// //               <p className="iso-description">{item.description}</p>

// //               <button
// //                 className="iso-readmore"
// //                 onClick={() => navigate("/blog/1")}
// //               >
// //                 Learn More
// //               </button>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </section>
// //   );
// // };

// // export default BlogCards;

// import React, { useEffect, useState } from "react";
// import "./BlogCard.css";
// import { useNavigate } from "react-router-dom";

// const BlogCards = () => {
//   const navigate = useNavigate();
//   const [blogData, setBlogData] = useState([]);

//   useEffect(() => {
//     fetch("https://www.sirsonite.in/sirsonite-d/omkaradmin/api/blogs")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log("API RESPONSE:", data);

//         const blogsArray =
//           data?.data || 
//           data || 
//           [];

//         setBlogData(Array.isArray(blogsArray) ? blogsArray : []);
//       })
//       .catch((err) => console.error("API Error:", err));
//   }, []);

//   return (
//     <section className="blog-section">
//       <div className="blog-grid">
//         {blogData.map((item, index) => (
//           <div className="iso-card" key={item.id || index}>
            
//             <div className="iso-card-image">
//               <img
//                 src={item.image || item.blog_image || "/default.jpg"}
//                 alt={item.title || item.blog_title}
//               />
//               <span className="iso-tag">
//                 {item.tag || item.category || "Blog"}
//               </span>
//             </div>

//             <div className="iso-card-body">
//               <div className="iso-meta">
//                 <span>{item.date || item.created_at}</span>
//                 <span>{item.author || item.author_name}</span>
//               </div>

//               <h3 className="iso-title">
//                 {item.title || item.blog_title}
//               </h3>

//               <p className="iso-description">
//                 {item.description || item.blog_description}
//               </p>

//               <button
//                 className="iso-readmore"
//                 onClick={() => navigate(`/blog/${item.id}`)}
//               >
//                 Learn More
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default BlogCards;

// import React from "react";
// import { useParams, Link } from "react-router-dom";
// import Blogimg from "../../assets/Images/BlockDetails.png"
// import "./BlockDetails.css";
// import Footer from "../../components/Footer/index.js"
// /* ---------------- BLOG DATA ---------------- */

// const blogs = [
// {
// id:1,
// tag:"Compliance",
// title:"Environmental Compliance: A Complete Guide",
// date:"January 20, 2026",
// author:"Environmental Team",
// image:Blogimg,

// content:[
// {
// type:"quote",
// text:"Learn about environmental regulations and how ISO 14001 can help your organization manage environmental responsibilities."
// },

// {
// type:"heading",
// text:"Introduction to Environmental Compliance"
// },

// {
// type:"paragraph",
// text:"Environmental compliance is no longer optional—it's a critical component of sustainable business practices. Organizations worldwide are recognizing the importance of minimizing their environmental impact."
// },

// {
// type:"heading",
// text:"Understanding ISO 14001"
// },

// {
// type:"paragraph",
// text:"ISO 14001 is the international standard for environmental management systems (EMS). It provides a framework for organizations to protect the environment and respond to changing environmental conditions."
// },

// {
// type:"subheading",
// text:"Key Components"
// },

// {
// type:"list",
// items:[
// "Environmental policy development",
// "Planning for environmental aspects and impacts",
// "Implementation and operation of environmental controls",
// "Checking and corrective action",
// "Management review and continuous improvement"
// ]
// },

// {
// type:"heading",
// text:"Benefits of ISO 14001"
// },

// {
// type:"paragraph",
// text:"Implementing ISO 14001 offers numerous benefits including reduced environmental impact, cost savings through efficient resource use, improved brand image, and better regulatory compliance."
// },

// {
// type:"subheading",
// text:"Regulatory Landscape"
// },

// {
// type:"paragraph",
// text:"Environmental regulations vary by region and industry. Staying compliant requires ongoing monitoring of regulatory changes and proactive adaptation of environmental management practices."
// },

// {
// type:"heading",
// text:"Implementation Steps"
// },

// {
// type:"numbered",
// items:[
// "Conduct an environmental review",
// "Identify environmental aspects and impacts",
// "Set environmental objectives and targets",
// "Develop environmental management programs",
// "Train employees on environmental responsibilities",
// "Monitor, measure, and audit environmental performance"
// ]
// },

// {
// type:"heading",
// text:"Conclusion"
// },

// {
// type:"paragraph",
// text:"Environmental compliance is a journey, not a destination. With the right guidance and commitment, your organization can achieve and maintain environmental excellence."
// }

// ]
// }
// ];

// /* ---------------- COMPONENT ---------------- */

// const BlogDetails = () => {

// const { id } = useParams();
// const blog = blogs.find((b)=>b.id===Number(id));

// if(!blog) return <h2 style={{padding:"100px"}}>Blog not found</h2>;

// return(

// <div>

// <Link to="/blog" className="bd-back">
// <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
//   <path d="M9.99935 15.8333L4.16602 9.99996L9.99935 4.16663" stroke="#0B82AD" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
//   <path d="M15.8327 10H4.16602" stroke="#0B82AD" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
// </svg> Back to All Articles
// </Link>

// {/* HERO */}

// <div className="bd-hero">

// <img src={blog.image} alt={blog.title}/>

// <div className="bd-hero-overlay">

// <span className="bd-tag">{blog.tag}</span>

// <h1 className="bd-title">{blog.title}</h1>

// <div className="bd-meta"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
//   <path d="M6 1.5V4.5" stroke="white" stroke-opacity="0.9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
//   <path d="M12 1.5V4.5" stroke="white" stroke-opacity="0.9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
//   <path d="M14.25 3H3.75C2.92157 3 2.25 3.67157 2.25 4.5V15C2.25 15.8284 2.92157 16.5 3.75 16.5H14.25C15.0784 16.5 15.75 15.8284 15.75 15V4.5C15.75 3.67157 15.0784 3 14.25 3Z" stroke="white" stroke-opacity="0.9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
//   <path d="M2.25 7.5H15.75" stroke="white" stroke-opacity="0.9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
// </svg>
// <span>{blog.date}</span>
// <span>•</span>
// <span><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
//   <path d="M14.25 15.75V14.25C14.25 13.4544 13.9339 12.6913 13.3713 12.1287C12.8087 11.5661 12.0456 11.25 11.25 11.25H6.75C5.95435 11.25 5.19129 11.5661 4.62868 12.1287C4.06607 12.6913 3.75 13.4544 3.75 14.25V15.75" stroke="white" stroke-opacity="0.9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
//   <path d="M9 8.25C10.6569 8.25 12 6.90685 12 5.25C12 3.59315 10.6569 2.25 9 2.25C7.34315 2.25 6 3.59315 6 5.25C6 6.90685 7.34315 8.25 9 8.25Z" stroke="white" stroke-opacity="0.9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
// </svg>{blog.author}</span>
// </div>

// </div>

// </div>


// {/* CONTENT */}
// <div  className="bd-page">
// <section className="bd-section">

// <div className="bd-container">

// {/* ARTICLE */}

// <div className="bd-article">

// {blog.content.map((item,index)=>{

// if(item.type==="quote"){
// return(
// <div key={index} className="bd-quote">
// {item.text}
// </div>
// );
// }

// if(item.type==="heading"){
// return <h2 key={index}>{item.text}</h2>;
// }

// if(item.type==="subheading"){
// return <h3 key={index}>{item.text}</h3>;
// }

// if(item.type==="paragraph"){
// return <p key={index}>{item.text}</p>;
// }

// if(item.type==="list"){
// return(
// <ul key={index} className="bd-list">
// {item.items.map((li,i)=>(
// <li key={i}>{li}</li>
// ))}
// </ul>
// );
// }

// if(item.type==="numbered"){
// return(
// <ol key={index} className="bd-steps">
// {item.items.map((li,i)=>(
// <li key={i}>{li}</li>
// ))}
// </ol>
// );
// }

// return null;

// })}

// </div>


// {/* SIDEBAR */}

// <aside className="bd-sidebar">

// <div className="bd-card">

// <h3>Need Expert Guidance?</h3>

// <p>
// Get personalized support from our ISO certification experts.
// </p>


// <Link to="/ContactUs" className="bd-btn">
//   Contact Us Today
// </Link>

// </div>

// </aside>

// </div>

// </section>
// </div>
// <Footer/>
// </div>

// );
// };

// export default BlogDetails;
import React, { useEffect, useState } from "react";
import "./BlogCard.css";
import { useNavigate } from "react-router-dom";

const BlogCards = () => {
  const navigate = useNavigate();
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    fetch("https://www.sirsonite.in/sirsonite-d/omkaradmin/api/blogs")
      .then((res) => res.json())
      .then((data) => {
        const blogsArray = [
          ...(data.featured || []),
          ...(data.normal || []),
        ];
        setBlogData(blogsArray);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="blog-section">
      <div className="blog-grid">
        {blogData.map((item, index) => (
          <div className="iso-card" key={item.id || index}>
            
            <div className="iso-card-image">
              <img src={item.image} alt={item.heading} />
              <span className="iso-tag">Blog</span>
            </div>

            <div className="iso-card-body">
              <div className="iso-meta">
                <span>{item.date}</span>
                <span>Omkar Consultancy Team</span>
              </div>

              <h3 className="iso-title">{item.heading}</h3>

              <p className="iso-description">{item.short}</p>

              <button
                className="iso-readmore"
                onClick={() => navigate(`/blog/${item.slug}`)} // ✅ FIX
              >
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogCards;