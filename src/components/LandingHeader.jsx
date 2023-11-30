import React, { useState } from "react";
import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";

const LandingHeader = () => {
  const [loginStatus, setLoginStatus] = useState(true);
  return (
    <div className="flex h-[90vh] justify-between flex-wrap">
      <HeaderLeft loginStatus={loginStatus} setLoginStatus={setLoginStatus} />
      <HeaderRight loginStatus={loginStatus} />
    </div>
  );
};

export default LandingHeader;
