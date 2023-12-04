import React, { useEffect } from "react";
import LandingNavbar from "../components/LandingNavbar";
import LandingHeader from "../components/LandingHeader";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const LandingPage = () => {
  const navigate = useNavigate();

  const users = useSelector((state) => state.main.users);
  const loggedinUser = users.find((user) => user.isLoggedin);
  console.log(loggedinUser);
  useEffect(() => {
    if (loggedinUser?.isLoggedin) {
      navigate("/1");
    }
  }, [loggedinUser?.isLoggedin, navigate]);
  return (
    <div className="w-full px-[60px] py-[41px]">
      <LandingNavbar />
      <LandingHeader />
    </div>
  );
};
export default LandingPage;
