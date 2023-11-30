import React from "react";

const Login = ({ handleChange, user, handleLogin }) => {
  return (
    <form onSubmit={(e) => handleLogin(e)}>
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
        Login now
      </button>
    </form>
  );
};

export default Login;
