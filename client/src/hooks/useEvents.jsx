import { useEffect, useState } from "react";
import axiosInstance from "../config/axiosInstance";

const useEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        // Replace this with your actual API call
        const response =  await axiosInstance.get("/api/admin/events")
        const data = response.data;
        console.log(data);
        setEvents(data.events);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch events");
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return { events, loading, error };
};


export default useEvents;