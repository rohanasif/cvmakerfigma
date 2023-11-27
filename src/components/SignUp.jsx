import React, { useState } from "react";
import fb from "../assets/facebook 3.png";
import gg from "../assets/search 1.png";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../actions";

const SignUp = () => {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.signUp.message.text);
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSignup = (e) => {
    e.preventDefault();
    dispatch(signup(user));
  };
  return (
    <div className="flex flex-col rounded-[10px] px-[50px] py-[30px] w-[500px] h-full signupbox">
      <div className="flex items-center justify-between">
        <h1>SIGN UP</h1>
        <div>
          <button className="rounded-l-[5px] box-border px-[10px] py-[5px] active">
            Job seeker
          </button>
          <button className="rounded-r-[5px] box-border px-[10px] py-[5px] inactive">
            Employer
          </button>
        </div>
      </div>
      <form
        onSubmit={(e) => handleSignup(e)}
        className="flex flex-col gap-[20px]"
      >
        <label htmlFor="name">
          Name<span className="text-red-700">*</span>
        </label>
        <input
          type="text"
          className="input-border rounded-lg py-3 px-4"
          placeholder="Enter name"
          id="name"
          name="name"
          required
          value={user.name}
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="email">
          Email<span className="text-red-700">*</span>
        </label>
        <input
          type="email"
          className="input-border rounded-lg py-3 px-4"
          placeholder="Enter email"
          id="email"
          name="email"
          required
          value={user.email}
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="phone">
          Phone no<span className="text-red-700">*</span>
        </label>
        <input
          type="text"
          className="input-border rounded-lg py-3 px-4"
          placeholder="Enter phone no"
          id="phone"
          name="phone"
          required
          value={user.phone}
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="password">
          Password<span className="text-red-700">*</span>
        </label>
        <input
          type="password"
          className="input-border rounded-lg py-3 px-4"
          placeholder="Enter password"
          id="password"
          name="password"
          required
          value={user.password}
          onChange={(e) => handleChange(e)}
        />
        <button
          className="headerbtns rounded-[10px] py-[15px] px-[95px] text-white"
          type="submit"
        >
          Register Now
        </button>
      </form>
      {message && <p>{message}</p>}
      <div className="flex width-full items-center justify-center">
        <div className="signupdivs h-0 w-[80%]"></div>
        <span className="px-[15px] w-full text-xs">or sign up with</span>
        <div className="signupdivs h-0 w-[80%]"></div>
      </div>
    </div>
  );
};

export default SignUp;
