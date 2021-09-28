import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  return (
    <>
      <section>
        <h2>Regular counter</h2>
        <h1>{value}</h1>

        <button className="btn" onClick={() => setValue(value - 1)}>
          Decrease
        </button>
        <button className="btn" onClick={() => setValue(0)}>
          Reset
        </button>
        <button className="btn" onClick={() => setValue(value + 1)}>
          Increase
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
