import React, { useState } from "react";
import data from "./data";
import Question from "./Question";
import "./style.css";
function App() {
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <din className="container">
        <h2>Questions and Answers About Login</h2>
        <div className="info">
          {questions.map((question) => {
            return <Question key={question.id} {...question} />;
          })}
        </div>
      </din>
    </main>
  );
}

export default App;
