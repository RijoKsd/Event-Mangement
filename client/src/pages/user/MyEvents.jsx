import React, { useEffect } from "react";
import EventCard from "../../components/user/EventCart";
import { useProductContext } from "../../context/ProductContext";
import { useSelector } from "react-redux";
export default function MyEvents() {
  const auth = useSelector((state) => state.auth);
   const { fetchUserEvents, userEvents } = useProductContext();
 
  useEffect(() => {
    fetchUserEvents();
  }, []);
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">My Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {userEvents.map((event) => (
          <EventCard key={event._id} event={event} auth={auth} />
        ))}
      </div>
    </div>
  );
}
