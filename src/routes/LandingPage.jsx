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
      await dispatch(getLoggedUser());
    };
    const loggedIn = fetchLogged();
    if (loggedIn) {
      navigate("/one");
    }
  }, [dispatch]);
  return (
    <div className="w-full h-screen px-[60px] py-[41px]">
      <LandingNavbar />
      <LandingHeader />
    </div>
  );
};
export default LandingPage;
