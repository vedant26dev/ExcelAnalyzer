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
    <div className="fixed top-0 left-0 w-64 h-full bg-[#1f1f1f] shadow-md p-4 flex flex-col justify-between text-white">
      <div>
        <h2 className="text-xl font-bold text-teal-400 mb-6">Hi, {username} 👋</h2>
        <ul className="space-y-4">
          <li className="text-gray-300 hover:text-teal-400 cursor-pointer">Dashboard</li>
          <li onClick={() => navigate("/3dchart")}className="text-gray-300 hover:text-teal-400 cursor-pointer">
            3D Chart
           </li>

          <li className="text-gray-300 hover:text-teal-400 cursor-pointer">Profile</li>
          <li className="text-gray-300 hover:text-teal-400 cursor-pointer">History</li>
        </ul>
      </div>
      <button
        onClick={handleLogout}
        className="bg-[#c0392b] text-white px-4 py-2 mt-6 rounded hover:bg-[#e74c3c]"
      >
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
