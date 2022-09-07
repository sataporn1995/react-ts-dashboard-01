import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "sweetalert2/dist/sweetalert2.min.css";
import "./scss/App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Login, Overview, Dashboard, AGV, Alarm, Report, LoadingPage } from "./pages";

const App:React.FC = () =>  {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/agv" element={<AGV />} />
          <Route path="/alarm" element={<Alarm />} />
          <Route path="/report" element={<Report />} />
          <Route path="/loading" element={<LoadingPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
