import React from "react";
import Pagination from "../components/Pagination";
import MainNavBar from "../components/MainNavBar";

const StepOne = () => {
  return (
    <div>
      <MainNavBar />
      <h1>Step 1: Basic Information</h1>
      <p>
        Let’s get to know you, please fill out some basic information about
        yourself.
      </p>

      <Pagination pageNumber={1} />
    </div>
  );
};

export default StepOne;
