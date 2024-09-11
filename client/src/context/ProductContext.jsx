import { createContext, useContext, useState } from "react";
import axiosInstance from "../config/axiosInstance";
 
export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [events, setEvents] = useState([]);
  const [userEvents, setUserEvents] = useState([]);
//   const navigate = useNavigate()

  const fetchEvents = async () => {
    try {
      const response = await axiosInstance.get("/api/event/all");
      console.log(response.data);
      const result = await response.data;
      setEvents(result.events);
    } catch (error) {
      console.error("Error fetching events", error);
    }
  };

  const fetchUserEvents = async () => {
    try {
      const response = await axiosInstance.get("/api/event/user");
      console.log(response.data);
      const result = await response.data;
      console.log(result);
      setUserEvents(result.events);
    } catch (error) {
      console.error("Error fetching events", error);
    }
  };

  const deleteProduct = async (id) => {
    console.log(id, "id");
    try {
        const response = await axiosInstance.delete(`/api/event/delete/${id}`);
        console.log(response.data);
        const result = await response.data;
        console.log(result);
        setUserEvents(result.events);
        
    } catch (error) {
      console.error("Error fetching events", error);
    }
  }

  const values = {
    events,
    fetchEvents,
    fetchUserEvents,
    userEvents,
    deleteProduct,
  };

  return (
    <ProductContext.Provider value={values}>{children}</ProductContext.Provider>
  );
};

export const useProductContext = () => useContext(ProductContext);
