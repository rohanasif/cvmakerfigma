import React, { useState } from "react";
import Pagination from "../components/Pagination";
import MainNavBar from "../components/MainNavBar";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import step from "../actions/index";
const StepTwo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state) => state.main.users);
  const user = users.find((user) => user.isLoggedin);
  const { email, phone } = user;
  const [info, setInfo] = useState({
    email,
    phone,
    addressone: "",
    addresstwo: "",
    home: "",
    country: "",
    city: "",
    zip: "",
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
        <h1>Step 2: Contact Information</h1>
        <p>How can we get in touch with you about the job of your dreams</p>
        <Pagination pageNumber={2} />
      </div>
      <form
        onSubmit={(e) => handleStep(e)}
        className="flex flex-col gap-[20px]"
      >
        <label htmlFor="email">
          Email<span className="text-red-700">*</span>
        </label>
        <input
          type="email"
          className="input-border rounded-lg py-3 px-4"
          placeholder="Enter Email"
          id="email"
          name="email"
          required
          value={user.email}
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="phone">
          Mobile<span className="text-red-700">*</span>
        </label>
        <input
          type="text"
          className="input-border rounded-lg py-3 px-4"
          placeholder="Enter Mobile Number"
          id="phone"
          name="phone"
          required
          value={user.phone}
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="address1">
          Address Line 1<span className="text-red-700">*</span>
        </label>
        <input
          type="text"
          className="input-border rounded-lg py-3 px-4"
          placeholder="Enter address"
          id="address1"
          name="address1"
          required
          value={info.addressone}
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="address2">
          Address Line 1<span className="text-red-700">*</span>
        </label>
        <input
          type="text"
          className="input-border rounded-lg py-3 px-4"
          placeholder="Enter address"
          id="address2"
          name="address2"
          required
          value={info.addresstwo}
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="home">
          Home Contact No<span className="text-red-700">*</span>
        </label>
        <input
          type="text"
          className="input-border rounded-lg py-3 px-4"
          placeholder="Enter home contact number"
          id="home"
          name="home"
          required
          value={info.home}
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="country">
          Country<span className="text-red-700">*</span>
        </label>
        <input
          type="text"
          className="input-border rounded-lg py-3 px-4"
          placeholder="Enter address"
          id="country"
          name="country"
          required
          value={info.country}
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="city">
          City<span className="text-red-700">*</span>
        </label>
        <input
          type="text"
          className="input-border rounded-lg py-3 px-4"
          placeholder="Enter city"
          id="city"
          name="city"
          required
          value={info.city}
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="zip">
          Zip Postal Code<span className="text-red-700">*</span>
        </label>
        <input
          type="text"
          className="input-border rounded-lg py-3 px-4"
          placeholder="Enter zipcode"
          id="zip"
          name="zip"
          required
          value={info.addressone}
          onChange={(e) => handleChange(e)}
        />
        <button
          className="headerbtns rounded-[10px] py-[15px] px-[95px] text-white"
          onClick={() => navigate("/1")}
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

export default StepTwo;
