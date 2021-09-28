import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState("default user");

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((user) => {
        const { login } = user;
        setUser(login);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsError(true);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>Error...</h2>;
  }
  return (
    <div>
      <h1>{user}</h1>
    </div>
  );
};

export default MultipleReturns;
