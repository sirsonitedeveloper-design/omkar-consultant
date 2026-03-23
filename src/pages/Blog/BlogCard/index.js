
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
        console.log("API RESPONSE:", data);

        const blogsArray = [
          ...(data?.featured || []),
          ...(data?.normal || []),
        ];

        setBlogData(blogsArray);
      })
      .catch((err) => console.error("API Error:", err));
  }, []);

  return (
    <section className="blog-section">
      <div className="blog-grid">
        {blogData.map((item, index) => (
          <div className="iso-card" key={item.id || index}>
            
            <div className="iso-card-image">
              <img
                src={item.image || "/default.jpg"}
                alt={item.heading}
              />
              <span className="iso-tag">Blog</span>
            </div>

            <div className="iso-card-body">
              <div className="iso-meta">
                <span>{item.date}</span>
                <span>Admin</span>
              </div>

              <h3 className="iso-title">
                {item.heading}
              </h3>

              <p className="iso-description">
                {item.short}
              </p>

              <button
                className="iso-readmore"
                onClick={() => navigate(`/blog/${item.slug}`)}
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