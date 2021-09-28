import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ title, info }) => {
  const [readmore, setReadmore] = useState(true);

  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => setReadmore(!readmore)}>
          {readmore ? <AiOutlinePlus /> : <AiOutlineMinus />}
        </button>
      </header>
      <p>{readmore ? "" : info}</p>
    </article>
  );
};

export default Question;
