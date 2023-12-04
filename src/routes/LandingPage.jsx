import React, { useEffect } from "react";
import LandingNavbar from "../components/LandingNavbar";
import LandingHeader from "../components/LandingHeader";
import { useDispatch } from "react-redux";
import { getLoggedUser } from "../actions";
import { useNavigate } from "react-router-dom";
const LandingPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const fetchLogged = async () => {
      const loggedInUser = await dispatch(getLoggedUser());
      if (loggedInUser?.isLoggedin) {
        navigate("/1");
      }
    };
    fetchLogged();
  }, [dispatch, navigate]);
  return (
    <div className="w-full h-screen px-[60px] py-[41px]">
      <LandingNavbar />
      <LandingHeader />
    </div>
  );
};
export default LandingPage;
