import React from "react";
import Pagination from "../components/Pagination";
import MainNavBar from "../components/MainNavBar";

const StepFour = () => {
  return (
    <div className="w-full px-[60px] py-[41px]">
      <MainNavBar />
      <div className="flex flex-col items-center">
        <h1>Step 4: Complete your Profile</h1>
        <p>
          You are just few steps away from you professional CV. How would you
          like to start?
        </p>
        <Pagination pageNumber={3} />
      </div>
    </div>
  );
};

export default StepFour;
