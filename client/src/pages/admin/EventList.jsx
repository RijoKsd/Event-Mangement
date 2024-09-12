import React, { useState, useMemo } from "react";
import EventCard from "../../components/admin/EventCard";
import useEvents from "../../hooks/useEvents";

const EventList = () => {
  const { events, loading, error } = useEvents();
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");

  // Get unique categories for filter options
  const categories = useMemo(
    () => [...new Set(events.map((event) => event.category))],
    [events]
  );

  // Filter events based on search term and category filter
  const filteredEvents = useMemo(() => {
    return events.filter(
      (event) =>
        (event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          event.venue.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (categoryFilter === "" || event.category === categoryFilter)
    );
  }, [events, searchTerm, categoryFilter]);

  if (loading) return <div className="text-center">Loading events...</div>;
  if (error) return <div className="text-center text-error">{error}</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Upcoming Events</h1>

      <div className="mb-6 flex flex-col md:flex-row gap-4">
        <div className="relative w-full md:w-2/3">
          <input
            type="text"
            placeholder="Search by event name or venue"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input input-bordered w-full pr-10"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="select select-bordered w-full md:w-1/3"
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {filteredEvents.length === 0 ? (
        <div className="text-center text-gray-500 mt-8">
          No events found matching your criteria.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
          {filteredEvents.map((event) => (
            <EventCard key={event._id} event={event} />
          ))}
        </div>
      )}
    </div>
  );
};

export default EventList;
