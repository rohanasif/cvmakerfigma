import React from "react";
import Pagination from "../components/Pagination";
import MainNavBar from "../components/MainNavBar";

const StepTwo = () => {
  return (
    <div className="w-full px-[60px] py-[41px]">
      <MainNavBar />
      <div className="flex flex-col items-center">
        <h1>Step 2: Contact Information</h1>
        <p>How can we get in touch with you about the job of your dreams</p>
        <Pagination pageNumber={2} />
      </div>
    </div>
  );
};

export default StepTwo;
