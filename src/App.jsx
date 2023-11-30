import React from "react";
import LandingPage from "./routes/LandingPage";
import { Routes, Route } from "react-router-dom";
import StepOne from "./routes/StepOne";
import StepTwo from "./routes/StepTwo";
import StepThree from "./routes/StepThree";
import StepFour from "./routes/StepFour";
import Review from "./routes/Review";
import AddDetails from "./routes/AddDetails";
import Resume from "./routes/Resume";

const App = () => {
  return (
    <div className="flex flex-col justify-between items-center">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/one" element={<StepOne />} />
        <Route path="/two" element={<StepTwo />} />
        <Route path="/three" element={<StepThree />} />
        <Route path="/four" element={<StepFour />} />
        <Route path="/review" element={<Review />} />
        <Route path="/add" element={<AddDetails />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </div>
  );
};

export default App;
