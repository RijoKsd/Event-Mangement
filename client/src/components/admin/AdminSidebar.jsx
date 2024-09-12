import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  FaUsers,
  FaFutbol,
  FaSignOutAlt,
  FaTachometerAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { MdEventNote } from "react-icons/md";
import { useDispatch } from "react-redux";
import { logout } from "../../store/slices/authSlice";

const AdminSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/")

  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    {
      path: "/admin",
      icon: FaTachometerAlt,
      label: "Admin Dashboard",
    },
    { path: "/admin/users", icon: FaUsers, label: "View Users" },
    { path: "/admin/events", icon: MdEventNote, label: "View Events" },
  ];

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      <div className="p-4">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-xl font-bold">A</span>
            </div>
            <h1 className="text-xl font-bold text-gray-800">Admin Panel</h1>
           </div>
          <button
            className="lg:hidden p-2 rounded-md hover:bg-gray-200 "
            onClick={toggleSidebar}
          >
            <FaTimes className="w-6 h-6 text-gray-600" />
          </button>
        </div>
        <nav>
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center space-x-3 p-2 rounded-lg transition-colors ${
                    location.pathname === item.path
                      ? "bg-indigo-100 text-indigo-600"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="mt-auto p-4">
        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center space-x-2 bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 transition-colors"
        >
          <FaSignOutAlt />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );

  return (
    <>
      <button
        className="lg:hidden fixed top-4 left-4 z-20 p-2 bg-white rounded-md shadow-md"
        onClick={toggleSidebar}
      >
        <FaBars className="w-6 h-6 text-gray-600" />
      </button>

      <aside
        className={`bg-white w-64 fixed inset-y-0 left-0 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 transition-transform duration-200 ease-in-out z-30 shadow-lg`}
      >
        <SidebarContent />
      </aside>
    </>
  );
};

export default AdminSidebar;
