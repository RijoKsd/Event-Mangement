import { useEffect } from "react";
import EventCard from "../../components/user/EventCart";
import { useProductContext } from "../../context/ProductContext";
const Event = () => {

  const {events, fetchEvents} = useProductContext();

  useEffect(()=> {
    fetchEvents();
  },[])
 
  

  return (
    <div className="  px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Upcoming Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center">
        {events.map((event) => (
          <EventCard key={event._id} event={event} />
        ))}
      </div>
    </div>
  );
};


export default Event;