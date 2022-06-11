import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import Course from "../pages/Course";
import Oops from "../pages/Oops";

export default function App() {
  return (
   <>
   <div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/course" element={<Course />} />
        <Route path="*" element={<Oops />} />
      </Routes>

    </div>
    </>
  );
}