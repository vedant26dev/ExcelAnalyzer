// frontend/src/pages/UserDashboard.jsx
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const UserDashboard = () => {
  const [excelData, setExcelData] = useState([]);
  const [columnHeaders, setColumnHeaders] = useState([]); // New state for headers

  const handleDataParsed = (data) => {
    // This function might be less relevant if handling in DashboardHome,
    // but keep it if needed for other parts of the dashboard
    setExcelData(data);
  };

  return (
    <div className="flex min-h-screen bg-gray-100 text-gray-800">
      <Sidebar />

      <div className="flex-grow ml-64 p-6 md:p-10">
        <div className="bg-white rounded-md shadow-md p-6 mb-8 border border-gray-200">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-800">User Dashboard</h1>
        </div>

        {/* Pass excelData, setExcelData, columnHeaders, and setColumnHeaders via context */}
        <Outlet context={{ excelData, setExcelData, columnHeaders, setColumnHeaders }} />

      </div>
    </div>
  );
};

export default UserDashboard;
