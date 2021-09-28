import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && setPeople) {
      const person = { id: new Date(), firstName, email };
      setPeople((people) => {
        return [...people, person];
      });
      setFirstName("");
      setEmail("");
    } else {
      console.log("empty values");
    }
  };

  return (
    <React.Fragment>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="firstName">Name: </label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              name="firstName"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          <div className="form-control">
            <label htmlFor="email">Email: </label>
            <input
              type="text"
              id="email"
              value={email}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button className="btn" type="submit">
            Add person
          </button>
        </form>
        {people.map((person) => {
          const { id, firstName, email } = person;
          return (
            <div className="item" key={id}>
              <h4>{firstName}</h4>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </React.Fragment>
  );
};

export default ControlledInputs;
