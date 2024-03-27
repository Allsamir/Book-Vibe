import React from "react";
import { Link, useRouteError } from "react-router-dom";

interface Error {
  statusText: string;
  message: string;
}

const ErrorElement: React.FC = () => {
  const error = useRouteError() as Error;
  console.error(error);
  return (
    <div
      id="error-page"
      className="flex flex-col justify-center items-center h-screen text-black font-work"
    >
      <h1 className="text-6xl">Oops!</h1>
      <p className="py-4">Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to={`/`}>
        <button className="btn btn-outline mt-4 text-green-600">Home</button>
      </Link>
    </div>
  );
};

export default ErrorElement;
