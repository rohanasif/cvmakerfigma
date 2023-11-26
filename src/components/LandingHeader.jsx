import React from "react";
import Login from "./Login";
import SignUp from "./SignUp";

const LandingHeader = () => {
  return (
    <div className="flex h-[90vh] justify-between flex-wrap">
      <Login />
      <SignUp />
    </div>
  );
};

export default LandingHeader;
