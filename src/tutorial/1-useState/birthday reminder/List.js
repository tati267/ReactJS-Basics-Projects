import React from "react";
import data from "./data";
import "./index.css";

const List = () => {
  const [people, setPeople] = React.useState(data);
  return (
    <>
      <h3>{people.lenght} birthdays today</h3>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article key={id} className="person">
            <img src={image} alt={name} />
            <div>
              <h3>{name}</h3>
              <p>{age}</p>
            </div>
          </article>
        );
      })}
      <button onClick={() => setPeople([])} className="btn">
        Delete all
      </button>
    </>
  );
};

export default List;
