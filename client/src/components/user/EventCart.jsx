import { useProductContext } from "../../context/ProductContext";
import {format} from "date-fns"

const EventCard = ({ event, auth  }) => {
  const isLoggedIn = auth?.isLoggedIn;
  const role = auth?.role;
  const { deleteProduct } = useProductContext();
 
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
            <strong>Date:</strong> { format(new Date(event.date), "dd/MM/yyyy")}
          </p>
          <p>
            <strong>Time:</strong> {event.time}
          </p>
          <p>
            <strong>Location:</strong> {event.venue}
          </p>
        </div>

        {isLoggedIn &&
          role ===
            "user" ?(
              <div className="card-actions justify-end mt-4">
                {/* // delete and update */}
                <button className= "btn btn-outline btn-error" 
                onClick={() => deleteProduct(event._id)}
                > Delete</button>
                <button className="btn btn-outline btn-primary"> update</button>
              

              </div>
            ): null}
      </div>
    </div>
  );
};


export default EventCard;