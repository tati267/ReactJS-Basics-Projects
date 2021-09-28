import React from "react";
import Review from "./Review";
import "./index.css";
function App() {
  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>Our reviews</h2>
          <div className="underline"></div>
        </div>
        <Review />
      </section>
    </main>
  );
}

export default App;
