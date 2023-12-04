import React from "react";
import Pagination from "../components/Pagination";
import MainNavBar from "../components/MainNavBar";
const StepThree = () => {
  return (
    <div className="w-full px-[60px] py-[41px]">
      <MainNavBar />
      <div className="flex flex-col items-center">
        <h1>Step 3: Experience</h1>
        <p>
          Let&apos;s get you noticed! Work experience will increase your chances
          of landing that next job
        </p>
        <Pagination pageNumber={3} />
      </div>
    </div>
  );
};

export default StepThree;
