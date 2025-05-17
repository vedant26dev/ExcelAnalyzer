import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import ExcelUpload from "../components/ExcelUpload";
import ExcelChart from "../components/ExcelChart";
import axios from 'axios';

const UserDashboard = () => {
  const [excelData, setExcelData] = useState([]);
  const [fileHistory, setFileHistory] = useState([]);
  const userId = "logged-in-user-id"; // Replace with the actual logged-in user ID

  useEffect(() => {
    // Fetch file history from backend
    const fetchHistory = async () => {
      try {
        const response = await axios.get(`/api/history?userId=${userId}`);
        setFileHistory(response.data);
      } catch (error) {
        console.error("Error fetching file history:", error);
      }
    };
    fetchHistory();
  }, [userId]);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-grow p-6">
        {/* Project Name Header */}
        <h1 className="text-4xl font-bold text-center my-6">ExcelAnalyzer</h1>

        {/* Excel Upload */}
        <ExcelUpload onDataParsed={setExcelData} />

        {/* File History Section */}
        <div className="my-6">
          <h2 className="text-2xl font-bold">File History</h2>
          <ul className="space-y-4">
            {fileHistory.map((file) => (
              <li key={file._id} className="flex justify-between items-center">
                <span>{file.filename}</span>
                <span>{new Date(file.uploadedAt).toLocaleString()}</span>
                <button
                  onClick={() => handleDelete(file._id)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Chart rendering */}
        {excelData.length > 0 && <ExcelChart data={excelData} />}
      </div>
    </div>
  );
};

export default UserDashboard;
