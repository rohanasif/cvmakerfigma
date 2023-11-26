import React from "react";
import fb from "../assets/facebook 3.png";
import gg from "../assets/search 1.png";

const SignUp = () => {
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
        onSubmit={() => handleSignup()}
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
          required
        />
        <label htmlFor="email">
          Email<span className="text-red-700">*</span>
        </label>
        <input
          type="email"
          className="input-border rounded-lg py-3 px-4"
          placeholder="Enter email"
          id="email"
          required
        />
        <label htmlFor="phone">
          Phone no<span className="text-red-700">*</span>
        </label>
        <input
          type="email"
          className="input-border rounded-lg py-3 px-4"
          placeholder="Enter phone no"
          id="phone"
          required
        />
        <label htmlFor="password">
          Password<span className="text-red-700">*</span>
        </label>
        <input
          type="password"
          className="input-border rounded-lg py-3 px-4"
          placeholder="Enter password"
          id="password"
          required
        />
        <button
          className="headerbtns rounded-[10px] py-[15px] px-[95px] text-white"
          type="submit"
        >
          Register Now
        </button>
      </form>
      <div className="flex width-full items-center justify-center">
        <div className="signupdivs h-0 w-[80%]"></div>
        <span className="px-[15px] w-full text-xs">or sign up with</span>
        <div className="signupdivs h-0 w-[80%]"></div>
      </div>
    </div>
  );
};

export default SignUp;
