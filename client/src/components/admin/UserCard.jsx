import React, { useState } from "react";
import {
  UserCircle,
  Mail,
  AlertTriangle,
  CheckCircle,
  Trash2,
} from "lucide-react";
import axiosInstance from "../../config/axiosInstance";

const UserCard = ({ user, onStatusChange }) => {
  const [status, setStatus] = useState(user.status);

  const handleStatusChange = async (userId) => {
    try {
      let newStatus;
      let endpoint;

      if (status === "active") {
        newStatus = "suspended";
        endpoint = `/api/admin/user/suspend/${userId}`;
      } else if (status === "suspended") {
        newStatus = "active";
        endpoint = `/api/admin/user/activate/${userId}`;
      } else {
     
        return;
      }

      await axiosInstance.post(endpoint);
      setStatus(newStatus);
      onStatusChange(userId, newStatus);
    } catch (error) {
      console.error("Error changing status:", error);
    }
  };

  const handleRemove = async (userId) => {
    try {
      await axiosInstance.post(`/api/admin/user/remove/${userId}`);
      setStatus("removed");
      onStatusChange(userId, "removed");
    } catch (error) {
      console.error("Error removing user:", error);
    }
  };

  if (status === "removed") {
    return null; 
  }

  return (
    <div className="card w-full max-w-96 bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300 m-4">
      <div className="card-body">
        <div className="flex items-center mb-4">
          <UserCircle className="w-12 h-12 text-primary mr-4" />
          <div>
            <h2 className="card-title text-lg font-semibold">{user.name}</h2>
            <div className="flex items-center text-sm text-gray-600">
              <Mail className="w-4 h-4 mr-1" />
              <span>{user.email}</span>
            </div>
          </div>
        </div>
        <div className="flex items-center mb-4">
          <div
            className={`badge ${
              status === "active" ? "badge-success" : "badge-warning"
            } gap-2`}
          >
            {status === "active" ? (
              <CheckCircle className="w-4 h-4" />
            ) : (
              <AlertTriangle className="w-4 h-4" />
            )}
            {status === "active" ? "Active" : "Suspended"}
          </div>
        </div>
        <div className="card-actions justify-end">
          <button
            className={`btn btn-sm ${
              status === "active" ? "btn-warning" : "btn-success"
            }`}
            onClick={() => handleStatusChange(user._id)}
          >
            {status === "active" ? "Suspend" : "Activate"}
          </button>
          <button
            className="btn btn-sm btn-error"
            onClick={() => handleRemove(user._id)}
          >
            <Trash2 className="w-4 h-4 mr-1" />
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
