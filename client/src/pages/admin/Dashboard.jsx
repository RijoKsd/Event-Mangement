import React, { useEffect } from "react";
import CountUp from "react-countup";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import useDashboardData from "../../hooks/useDashboardData.jsx";

ChartJS.register(ArcElement, Tooltip, Legend);

const AdminDashboard = () => {
  const { dashboardData, loading, error } = useDashboardData();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center p-4">
        <p className="text-error mb-4">{error}</p>
        <button
          className="btn btn-primary"
          onClick={() => window.location.reload()}
        >
          Retry
        </button>
      </div>
    );
  }

  if (!dashboardData) {
    return null;
  }

  const {
    events,
    activeUsers,
    suspendedUsers,
    removedUsers,
    eventsByCategory,
  } = dashboardData;

  const chartData = {
    labels: Object.keys(eventsByCategory),
    datasets: [
      {
        data: Object.values(eventsByCategory),
        backgroundColor: [
          "rgba(255, 99, 132, 0.8)",
          "rgba(54, 162, 235, 0.8)",
          "rgba(255, 206, 86, 0.8)",
          "rgba(75, 192, 192, 0.8)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <DashboardCard title="Total Events" value={events} />
        <DashboardCard title="Active Users" value={activeUsers} />
        <DashboardCard title="Suspended Users" value={suspendedUsers} />
        <DashboardCard title="Removed Users" value={removedUsers} />
      </div>

      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Events by Category</h2>
          <div className="w-full max-w-md mx-auto">
            <Pie data={chartData} />
          </div>
        </div>
      </div>
    </div>
  );
};

const DashboardCard = ({ title, value }) => (
  <div className="card bg-base-100 shadow-xl">
    <div className="card-body">
      <h2 className="card-title">{title}</h2>
      <p className="text-4xl font-bold">
        <CountUp end={value} duration={2.5} />
      </p>
    </div>
  </div>
);

export default AdminDashboard;
