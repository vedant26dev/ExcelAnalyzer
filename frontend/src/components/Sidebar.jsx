// frontend/src/components/Sidebar.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem("username") || "User";

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    // Changed background to white and adjusted text color for contrast
    <div className="fixed top-0 left-0 w-64 h-full bg-white shadow-md p-4 flex flex-col justify-between text-gray-800 border-r border-gray-200">
      <div>
        {/* Styled username text with deep blue */}
        <h2 className="text-xl font-bold text-blue-800 mb-6">Hi, {username} 👋</h2>
        <ul className="space-y-4">
          {/* Styled navigation links with subtle colors and blue hover */}
          <li onClick={() => navigate('/dashboard')} className="text-gray-700 hover:text-blue-700 cursor-pointer transition duration-150 ease-in-out">Dashboard</li>
          <li onClick={() => navigate('/dashboard/3dchart')} className="text-gray-700 hover:text-blue-700 cursor-pointer transition duration-150 ease-in-out">
            3D Chart
          </li>
          <li className="text-gray-700 hover:text-blue-700 cursor-pointer transition duration-150 ease-in-out">Profile</li>
          <li className="text-gray-700 hover:text-blue-700 cursor-pointer transition duration-150 ease-in-out">History</li>
        </ul>
      </div>
      <button
        onClick={handleLogout}
        className="bg-red-600 text-white px-4 py-2 mt-6 rounded-md hover:bg-red-700 transition duration-300 ease-in-out font-semibold" // Styled Logout button
      >
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
