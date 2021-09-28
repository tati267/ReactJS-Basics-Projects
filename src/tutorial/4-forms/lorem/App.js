import React, { useState } from "react";
import data from "./data";
import "./index.css";
function App() {
  const [text, setText] = useState([]);
  const [count, setCount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    setText(data.slice(0, amount));
  };
  return (
    <div className="section-center">
      <h3>tired of boring lorem ipsum?</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amnt">Paragraph: </label>
        <input
          type="number"
          id="amnt"
          value={count}
          name="amnt"
          min="0"
          max={data.length}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type="submit" className="btn">
          generate
        </button>
      </form>
      <div className="lorem-text">
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </div>
    </div>
  );
}

export default App;
