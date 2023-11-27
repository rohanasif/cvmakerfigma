import React from "react";
import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";

const LandingHeader = () => {
  return (
    <div className="flex h-[90vh] justify-between flex-wrap">
      <HeaderLeft />
      <HeaderRight />
    </div>
  );
};

export default LandingHeader;
