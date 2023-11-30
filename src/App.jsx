import React from "react";
import LandingPage from "./routes/LandingPage";
import { Routes, Route } from "react-router-dom";
import Profile from "./routes/Profile";
const App = () => {
  return (
    <div className="flex flex-col justify-between items-center">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default App;
