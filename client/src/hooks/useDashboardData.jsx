import { useState, useEffect } from "react";
import axiosInstance from "../config/axiosInstance";

const useDashboardData = () => {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    let retryCount = 0;
    const maxRetries = 3;

    const fetchDashboardData = async () => {
      try {
        const response = await axiosInstance.get("/api/admin/dashboard");
        if (isMounted) {
          setDashboardData(response.data);
          setLoading(false);
          setError(null);
        }
      } catch (err) {
        console.error("Error fetching dashboard data:", err);
        if (
          err.response &&
          err.response.status === 401 &&
          retryCount < maxRetries
        ) {
          retryCount++;
          setTimeout(fetchDashboardData, 1000 * retryCount); 
        } else if (isMounted) {
          setError(
            "Failed to fetch dashboard data. Please try refreshing the page."
          );
          setLoading(false);
        }
      }
    };

    fetchDashboardData();

    return () => {
      isMounted = false;
    };
  }, []);

  return { dashboardData, loading, error };
};

export default useDashboardData;
