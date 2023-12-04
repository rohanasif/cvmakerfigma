import React from "react";
import logo from "../assets/logo.png";
import { useSelector } from "react-redux";
const MainNavBar = () => {
  const users = useSelector((state) => state.login.users);
  console.log(users);
  return (
    <div className="flex w-full justify-between">
      <img src={logo} alt="logo" />
      <div className="flex items-center gap-4">
        <img src="" alt="" />
        <p>{users?.name}</p>
      </div>
    </div>
  );
};

export default MainNavBar;
