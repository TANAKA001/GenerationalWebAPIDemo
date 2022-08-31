import React from "react";
import { Link } from "react-router-dom";
import BackButton from "../components/BackButton";

const NotFound = () => {
  return (
    <div className='not-found'>
      <h1>404: Not Found</h1>
      <BackButton />
      <Link to={"/"}>Go to Home</Link>
    </div>
  );
};

export default NotFound;
