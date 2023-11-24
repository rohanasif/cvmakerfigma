import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const LandingNavbar = () => {
  const handleCreateProfile = () => {};
  const handleCreateEmployer = () => {};
  return (
    <div className="flex px-[60px] py-[41px]  w-full justify-between">
      <img src={logo} alt="logo" />
      <div className="flex items-center w-[40vw] justify-between">
        <Link className="text-[#635EA3]" to="/">
          Option 1
        </Link>
        <Link className="text-[#635EA3]" to="/">
          Option 2
        </Link>
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
