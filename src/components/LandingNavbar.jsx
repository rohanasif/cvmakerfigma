import React from "react";
import logo from "../assets/logo.png";

const LandingNavbar = () => {
  const handleCreateProfile = () => {};
  const handleCreateEmployer = () => {};
  return (
    <div className="flex w-full justify-between">
      <img src={logo} alt="logo" />
      <div className="flex items-center gap-4">
        <button
          className="px-[25px] py-[15px] border-2 border-[#635EA3] text-[#635EA3] rounded-[10px]"
          onClick={() => handleCreateProfile()}
        >
          Create Profile
        </button>
        <button
          className="px-[25px] py-[15px] text-white border-2 border-[#635EA3] bg-[#635EA3] rounded-[10px]"
          onClick={() => handleCreateEmployer()}
        >
          Employer
        </button>
      </div>
    </div>
  );
};

export default LandingNavbar;
