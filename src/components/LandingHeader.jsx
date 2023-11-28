import React, { useState } from "react";
import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";

const LandingHeader = () => {
  const [login, setLogin] = useState(true);
  return (
    <div className="flex h-[90vh] justify-between flex-wrap">
      <HeaderLeft login={login} setLogin={setLogin} />
      <HeaderRight login={login} />
    </div>
  );
};

export default LandingHeader;
