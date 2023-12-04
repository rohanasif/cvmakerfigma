import React, { useState } from "react";
import Pagination from "../components/Pagination";
import MainNavBar from "../components/MainNavBar";
import { useSelector, useDispatch } from "react-redux";
import { step } from "../actions";
import { useNavigate } from "react-router-dom";

const StepOne = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state) => state.main.users);
  const user = users.find((user) => user.isLoggedin);
  const [fname, lname] = user.name.split(" ");
  const [info, setInfo] = useState({
    fname,
    lname,
    dob: "",
    degree: "",
    gender: "",
  });
  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  const handleStep = (e) => {
    e.preventDefault();
    dispatch(step(info));
    navigate("/2");
  };
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
      <form
        onSubmit={(e) => handleStep(e)}
        className="flex flex-col gap-[20px]"
      >
        <label htmlFor="fname">
          First Name<span className="text-red-700">*</span>
        </label>
        <input
          type="text"
          className="input-border rounded-lg py-3 px-4"
          placeholder="Enter First Name"
          id="fname"
          name="fname"
          required
          value={info.fname}
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="lname">
          Last Name<span className="text-red-700">*</span>
        </label>
        <input
          type="text"
          className="input-border rounded-lg py-3 px-4"
          placeholder="Enter Last Name"
          id="lname"
          name="lname"
          required
          value={info.lname}
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="dob">
          Date of Birth<span className="text-red-700">*</span>
        </label>
        <input
          type="date"
          className="input-border rounded-lg py-3 px-4"
          placeholder="Enter date of birth"
          id="dob"
          name="dob"
          required
          value={info.dob}
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="degree">
          Degree level<span className="text-red-700">*</span>
        </label>
        <input
          type="text"
          className="input-border rounded-lg py-3 px-4"
          placeholder="Select degree level"
          id="degree"
          name="degree"
          required
          value={info.degree}
          onChange={(e) => handleChange(e)}
        />
        <p>
          Gender<span className="text-red-700">*</span>
        </p>
        <div>
          <input
            type="radio"
            name="gender"
            id="male"
            required
            value="male"
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor="male">Male</label>
        </div>
        <div>
          <input
            type="radio"
            name="gender"
            id="female"
            required
            value="female"
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor="female">Female</label>
        </div>
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

export default StepOne;
