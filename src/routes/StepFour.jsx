import React from "react";
import Pagination from "../components/Pagination";
import MainNavBar from "../components/MainNavBar";
import { useNavigate } from "react-router-dom";

const StepFour = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full px-[60px] py-[41px]">
      <MainNavBar />
      <div className="flex flex-col items-center">
        <h1>Step 4: Complete your Profile</h1>
        <p>
          You are just few steps away from you professional CV. How would you
          like to start?
        </p>
        <Pagination pageNumber={4} />
      </div>
      <div>
        <p>I already have a CV/Resume</p>
        <button>Upload File</button>
      </div>
      <div>
        <p>Create profile from scratch</p>
        <button onClick={() => navigate("/review")}>Continue</button>
      </div>
    </div>
  );
};

export default StepFour;
