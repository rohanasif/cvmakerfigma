import React from "react";

const HeaderLeft = ({ login, setLogin }) => {
  return (
    <div className="flex flex-col w-[400px] h-full justify-center">
      <h1>
        Find Your <span>Blockchain Dev</span> Job Today
      </h1>
      <p>
        Discover the leading companies in the blockchain industry and find job
        opportunities.
      </p>
      {login && (
        <button
          className="headerbtns rounded-[10px] text-white py-[15px] px-[95px]"
          onClick={() => setLogin(false)}
        >
          Sign Up
        </button>
      )}
      {!login && (
        <button
          className="headerbtns rounded-[10px] text-white py-[15px] px-[95px]"
          onClick={() => setLogin(true)}
        >
          Login
        </button>
      )}
    </div>
  );
};

export default HeaderLeft;
