import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import AdminSidebar from "../../components/admin/AdminSidebar";
import { useSelector } from "react-redux";

const AdminLayout = () => {
    const navigate = useNavigate();
    const auth = useSelector((state) => state.auth);
    useEffect(() => {
      if (!auth.isLoggedIn) {
        navigate("/login");
      }
    }, [auth.isLoggedIn]);
  return (
    <div className="flex h-screen">
      <AdminSidebar />
      <main className="flex-1 overflow-auto p-4 lg:ml-64 ">
        <div className="mt-12 md:mt-0 ">
          
        <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
