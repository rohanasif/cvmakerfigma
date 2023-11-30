import React from "react";

const Signup = ({ handleSignup, user, handleChange }) => {
  return (
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
  );
};

export default Signup;
