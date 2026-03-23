import React, { useEffect, useState } from "react";
import "./Vision.css";

const Vision = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://www.sirsonite.in/sirsonite-d/omkaradmin/api/about-sections"
        );

        const result = await res.json();
        console.log("API 👉", result);

        if (result?.data) {
          setData(result.data);
        }
      } catch (err) {
        console.log("ERROR ❌", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // ✅ find vision & mission
  const vision = data.find((item) => item.key === "Vision");
  const mission = data.find((item) => item.key === "Mission");

  return (
    <section className="vision-section">
      <span className="vision-badge">What Drives Us</span>

      <h2>Vision & Mission</h2>
      <p className="vision-sub">
        Driving quality, compliance & business excellence
      </p>

      <div className="vision-grid">

        {/* ================= VISION CARD ================= */}
        <div className="vision-card">
          <div className="inner-vision">
            <div className="figma-glass"></div>
            <div className="figma-curve"></div>

            <div className="vision-top">
              <div className="vision-icon">
                {/* ✅ SAME ICON (UNCHANGED) */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M2.062 12.348C1.97866 12.1235 1.97866 11.8765 2.062 11.652C2.8737 9.68385 4.25152 8.00103 6.02077 6.81689C7.79003 5.63275 9.87105 5.00061 12 5.00061C14.129 5.00061 16.21 5.63275 17.9792 6.81689C19.7485 8.00103 21.1263 9.68385 21.938 11.652C22.0213 11.8765 22.0213 12.1235 21.938 12.348C21.1263 14.3161 19.7485 15.999 17.9792 17.1831C16.21 18.3672 14.129 18.9994 12 18.9994C9.87105 18.9994 7.79003 18.3672 6.02077 17.1831C4.25152 15.999 2.8737 14.3161 2.062 12.348Z"
                    stroke="white"
                    strokeWidth="2.5"
                  />
                </svg>
              </div>

              <div className="vision-label">VISION</div>
            </div>

            <h3>
              {loading ? "Loading..." : vision?.title || "No Title"}
            </h3>

            <p
              className="vision-paragraph"
              dangerouslySetInnerHTML={{
                __html:
                  loading
                    ? "Loading..."
                    : vision?.description || "No description",
              }}
            />
          </div>
        </div>

        {/* ================= MISSION CARD ================= */}
        <div className="vision-card">
          <div className="inner-vision">
            <div className="figma-glass"></div>
            <div className="figma-curve"></div>

            <div className="vision-top">
              <div className="vision-icon">
                {/* ✅ SAME ICON (UNCHANGED) */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="white"
                    strokeWidth="2.5"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="6"
                    stroke="white"
                    strokeWidth="2.5"
                  />
                </svg>
              </div>

              <div className="vision-label">MISSION</div>
            </div>

            <h3>
              {loading ? "Loading..." : mission?.title || "No Title"}
            </h3>

            <p
              className="vision-paragraph"
              dangerouslySetInnerHTML={{
                __html:
                  loading
                    ? "Loading..."
                    : mission?.description || "No description",
              }}
            />
          </div>
        </div>
      </div>

      <a href="#" className="vision-btn">
        Let’s Build Excellence Together
      </a>
    </section>
  );
};

export default Vision;