const EventCard = ({ event, auth = null }) => {
 const {isLoggedIn, role, token}  = auth;
  
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-48 object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{event.title}</h2>
        <p>{event.description}</p>
        <div className="mt-4">
          <p>
            <strong>Date:</strong> {event.date}
          </p>
          <p>
            <strong>Time:</strong> {event.time}
          </p>
          <p>
            <strong>Location:</strong> {event.location}
          </p>
        </div>

        {isLoggedIn &&
          role ===
            "user" ?(
              <div className="card-actions justify-end mt-4">
                {/* // delete and update */}
                <button className= "btn btn-outline btn-error"> Delete</button>
                <button className="btn btn-outline btn-primary"> update</button>
              

              </div>
            ): null}
      </div>
    </div>
  );
};


export default EventCard;