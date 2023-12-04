import React from "react";
import Pagination from "../components/Pagination";
import MainNavBar from "../components/MainNavBar";

const StepOne = () => {
  return (
    <div className="w-full px-[60px] py-[41px]">
      <MainNavBar />
      <div className="flex flex-col items-center">
        <h1>Step 1: Basic Information</h1>
        <p>
          Let&apos;s get to know you, please fill out some basic information
          about yourself.
        </p>
        <Pagination pageNumber={1} />
      </div>
    </div>
  );
};

export default StepOne;
