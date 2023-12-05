import React, { useState } from "react";
import Pagination from "../components/Pagination";
import MainNavBar from "../components/MainNavBar";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { step } from "../actions/index";
const StepThree = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [info, setInfo] = useState({
    jobcity: "",
    experience: "",
    designation: "",
  });
  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  const handleStep = (e) => {
    e.preventDefault();
    dispatch(step(info));
    navigate("/4");
  };
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
      <form
        onSubmit={(e) => handleStep(e)}
        className="flex flex-col gap-[20px]"
      >
        <label htmlFor="jobcity">
          Job City<span className="text-red-700">*</span>
        </label>
        <input
          type="text"
          className="input-border rounded-lg py-3 px-4"
          placeholder="Enter Job City"
          id="jobcity"
          name="jobcity"
          required
          value={info.jobcity}
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="experience">Experience</label>
        <input
          type="text"
          className="input-border rounded-lg py-3 px-4"
          placeholder="Enter Experience"
          id="experience"
          name="experience"
          required
          value={info.experience}
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="designation">Expected Designation</label>
        <input
          type="text"
          className="input-border rounded-lg py-3 px-4"
          placeholder="Enter expected designation"
          id="designation"
          name="designation"
          required
          value={info.designation}
          onChange={(e) => handleChange(e)}
        />
        <button
          className="headerbtns rounded-[10px] py-[15px] px-[95px] text-white"
          onClick={() => navigate("/2")}
        >
          Previous
        </button>
        <button
          className="headerbtns rounded-[10px] py-[15px] px-[95px] text-white"
          type="submit"
        >
          Next
        </button>
      </form>
    </div>
  );
};

export default StepThree;
