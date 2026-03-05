import React from "react";
import "./Vision.css";

const Vision = () => {
  return (
    <section className="vision-section">
      <span className="vision-badge">What Drives Us</span>

      <h2>Vision & Mission</h2>
      <p className="vision-sub">
        Driving quality, compliance & business excellence
      </p>

      <div className="vision-grid">
        {/* Vision Card */}
        <div className="vision-card">
          <div className="inner-vision">
            <div className="figma-glass"></div>
            <div className="figma-curve"></div>

            <div className="vision-top">
              <div className="vision-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g clip-path="url(#clip0_20_41)">
                    <path
                      d="M2.062 12.348C1.97866 12.1235 1.97866 11.8765 2.062 11.652C2.8737 9.68385 4.25152 8.00103 6.02077 6.81689C7.79003 5.63275 9.87105 5.00061 12 5.00061C14.129 5.00061 16.21 5.63275 17.9792 6.81689C19.7485 8.00103 21.1263 9.68385 21.938 11.652C22.0213 11.8765 22.0213 12.1235 21.938 12.348C21.1263 14.3161 19.7485 15.999 17.9792 17.1831C16.21 18.3672 14.129 18.9994 12 18.9994C9.87105 18.9994 7.79003 18.3672 6.02077 17.1831C4.25152 15.999 2.8737 14.3161 2.062 12.348Z"
                      stroke="white"
                      stroke-width="2.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                      stroke="white"
                      stroke-width="2.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_20_41">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="vision-label">VISION</div>
            </div>

            <h3>
              Shaping Businesses
              <br /> Through Global Standards
            </h3>

            <p className="vision-paragraph">
              To empower organizations with robust management systems by
              delivering expert ISO consultancy that drives quality,
              consistency, and long-term business excellence.
            </p>
          </div>
        </div>

        {/* Mission Card */}
        <div className="vision-card">
          <div className="inner-vision">
            <div className="figma-glass"></div>
            <div className="figma-curve"></div>

            <div className="vision-top">
              <div className="vision-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g clip-path="url(#clip0_20_61)">
                    <path
                      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                      stroke="white"
                      stroke-width="2.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z"
                      stroke="white"
                      stroke-width="2.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
                      stroke="white"
                      stroke-width="2.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_20_61">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="vision-label">MISSION</div>
            </div>
            <div className="Vision-cards-heading">
              <h3>
                Delivering Compliance <br />
                with Confidence
              </h3>
            </div>

            <p className="vision-paragraph">
              To provide practical, cost-effective, and timely ISO solutions by
              combining expert guidance, customized training, and end-to-end
              support— helping businesses grow with confidence.
            </p>
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
