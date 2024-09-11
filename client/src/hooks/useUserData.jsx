import { useEffect, useState } from "react";
import axiosInstance from "../config/axiosInstance";

const useUserData = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

    const fetchUsers = async () => {
      try {
        const response = await axiosInstance.get("/api/admin/users");

        setUsers(response.data);
        setLoading(false);
      } catch (err) {
        console.log("Error fetching users:", err);
        setError(err.message);
        setLoading(false);
      }
    };
  

  return { users, loading, error, fetchUsers };
};


export default useUserData;