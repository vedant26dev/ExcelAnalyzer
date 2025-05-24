// frontend/src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import UserDashboard from "./pages/UserDashboard";
import DashboardHome from "./pages/DashboardHome";
import ThreeDChartPage from "./pages/ThreeDChartPage";
import ChartsPage from "./pages/ChartsPage"; // Import the new ChartsPage

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<UserDashboard />}>
          <Route index element={<DashboardHome />} />
          <Route path="3dchart" element={<ThreeDChartPage />} />
           <Route path="charts" element={<ChartsPage />} /> {/* Add the new route */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
