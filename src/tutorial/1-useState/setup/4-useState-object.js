import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    id: 0,
    name: "peter",
    age: 24,
    message: "hi people",
  });

  const changeMessage = () => {
    setPerson({ ...person, message: "hi there" });
  };
  return (
    <React.Fragment>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>

      <button className="btn" onClick={changeMessage}>
        Change message
      </button>
    </React.Fragment>
  );
};

export default UseStateObject;
