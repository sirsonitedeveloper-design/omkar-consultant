import React, { useEffect, useState } from "react";
import "./WhoWe.css";

const WhoWe = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      "https://www.sirsonite.in/sirsonite-d/omkaradmin/api/who-we-are",
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((resData) => {
        console.log("WHO API 👉", resData);

        setData(resData?.data?.[0] || null);
      })
      .catch((err) => console.log("ERROR ❌", err));
  }, []);

  return (
    <section className="who-section">
      <div className="who-container">
        <div className="inner-section">
          <h2 className="who-title">Who We Are</h2>
          <div className="who-underline"></div>

          <p
            className="who-text"
            dangerouslySetInnerHTML={{
              __html: data?.description_1 || "Loading...",
            }}
          />

          <p
            className="who-text second"
            dangerouslySetInnerHTML={{
              __html: data?.description_2 || "",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default WhoWe;