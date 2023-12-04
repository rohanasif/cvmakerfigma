import React, { useState } from "react";
import fb from "../assets/facebook 3.png";
import gg from "../assets/search 1.png";
import { useDispatch, useSelector } from "react-redux";
import { signup, login } from "../actions";
import Signup from "./Signup";
import Login from "./Login";
import { useNavigate } from "react-router-dom";
const HeaderRight = ({ loginStatus }) => {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.main.message);
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSignup = (e) => {
    e.preventDefault();
    dispatch(signup(user));
  };
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(user));
  };
  return (
    <div className="flex flex-col rounded-[10px] px-[50px] py-[30px] w-[500px] h-full signupbox">
      <div className="flex items-center justify-between">
        {!loginStatus && <h1>SIGN UP</h1>}
        {loginStatus && <h1>LOGIN</h1>}
        <div>
          <button className="rounded-l-[5px] box-border px-[10px] py-[5px] active">
            Job seeker
          </button>
          <button className="rounded-r-[5px] box-border px-[10px] py-[5px] inactive">
            Employer
          </button>
        </div>
      </div>

      {!loginStatus && (
        <Signup
          user={user}
          handleSignup={handleSignup}
          handleChange={handleChange}
        />
      )}
      {loginStatus && (
        <Login
          user={user}
          handleLogin={handleLogin}
          handleChange={handleChange}
        />
      )}

      {message && <p>{message}</p>}
      <div className="flex width-full items-center justify-center">
        <div className="signupdivs h-0 w-[80%]"></div>
        <span className="px-[15px] w-full text-xs">or sign up with</span>
        <div className="signupdivs h-0 w-[80%]"></div>
      </div>
    </div>
  );
};

export default HeaderRight;
