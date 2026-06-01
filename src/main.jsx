import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

import heroBanner from "./assets/hero-banner.png";

function App() {
  return (
    <div className="site">
      <section className="hero">
        <div className="heroText">
          <h1>Auta dla kierowców Uber i Bolt</h1>
          <p>
            Wynajem aut hybrydowych gotowych do pracy.
            Toyota Prius+, Corolla Hybrid i inne modele od 400 zł tygodniowo.
          </p>
        </div>

        <div className="heroImage">
          <img src={heroBanner} alt="PRO-FIT Uber Bolt" />
        </div>
      </section>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
