import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <>
      {" "}
      <h3>Error</h3>
      <h3>Unfotunaltely error occured</h3>
      <h4>
        {error.status} {error.statusText}
      </h4>
    </>
  );
};

export default Error;
