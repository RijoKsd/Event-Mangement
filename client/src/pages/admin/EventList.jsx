import EventCard from "../../components/admin/EventCard";
import useEvents from "../../hooks/useEvents";

const EventList = () => {
  const { events, loading, error } = useEvents();

  if (loading) return <div className="text-center">Loading events...</div>;
  if (error) return <div className="text-center text-error">{error}</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Upcoming Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
        {events.map((event) => (
          <EventCard key={event._id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default EventList;
