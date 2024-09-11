import { Link } from "react-router-dom";
import bannerBg from "../../assets/banner.jpg"
import { useSelector } from "react-redux";

export default function Home() {
  const {isLoggedIn} = useSelector(state => state.auth);
   return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:`url(${bannerBg})`,
          
      }}
    >
      <div className="hero-overlay bg-opacity-60 bg-black"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-lg">
          <h1 className="mb-6 text-5xl font-bold">Welcome to EventSphere</h1>
          <p className="mb-5 text-lg">
            Discover a world of unforgettable events with EventSphere. Whether
            you&#39;re planning your next big event or attending one, we&#39;ve got
            everything you need to make it a success.
          </p>
          <p className="mb-5 text-lg">
            Join thousands of event creators and enthusiasts. Create, explore,
            and connect — your next exciting adventure starts here!
          </p>
          <Link to={ 
            isLoggedIn ? "/auth/events" : "/events"
          } className="btn btn-primary">
            Explore Events
          </Link>
          <Link to={
            isLoggedIn ? "/auth/create-event" : "/login"
          } className="btn btn-secondary ml-4">
            Host an Event
          </Link>
        </div>
      </div>
    </div>
  );
}
