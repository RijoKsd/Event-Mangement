import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaUsers,
  FaFutbol,
  FaSignOutAlt,
  FaTachometerAlt,
} from "react-icons/fa";

const AdminSidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Implement logout logic here
    // For example: clear local storage, reset auth state, etc.
    navigate("/login"); // Redirect to login page after logout
  };

  return (
    <div className="w-64 bg-gray-100 h-full flex flex-col">
      <ul className="menu p-4 w-full flex-grow">
        <li className="mb-2">
          <Link
            to="/admin/dashboard"
            className="text-xl font-bold flex items-center"
          >
            <FaTachometerAlt className="mr-2" />
            Admin Dashboard
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/admin/users" className="text-lg flex items-center">
            <FaUsers className="mr-2" />
            View Users
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/admin/turfs" className="text-lg flex items-center">
            <FaFutbol className="mr-2" />
            View Turfs
          </Link>
        </li>
      </ul>
      <button
        onClick={handleLogout}
        className="btn btn-error text-white w-full mx-4 mb-4"
      >
        <FaSignOutAlt className="mr-2" />
        Logout
      </button>
    </div>
  );
};

export default AdminSidebar;
