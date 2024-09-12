import { format } from "date-fns";

const EventCard = ({ event }) => {
  return (
    <div className="card w-full max-w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-48 object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{event.title}</h2>
        <p className="text-sm text-gray-600">
          Hosted by: {event.user.name}
        </p>
        <p className="mt-2">{event.description}</p>
        <div className="flex justify-between mt-4">
          <div>
            <p className="text-sm">
              <strong>Date:</strong> {format(new Date(event.date), "PP")}
            </p>
            <p className="text-sm">
              <strong>Time:</strong> {event.time}
            </p>
          </div>
          <div>
            <p className="text-sm">
              <strong>Venue:</strong> {event.venue}
            </p>
            <p className="text-sm">
              <strong>Price:</strong> ${event.price}
            </p>
          </div>
        </div>
        <div className="card-actions justify-end mt-4">
          <div className="badge badge-outline"> {event.category}</div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
