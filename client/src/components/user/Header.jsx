import { useDispatch } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {logout} from "../../store/slices/authSlice" 
const Header = () => {
  const dispatch  = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout() );
    navigate("/");
  };
  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg md:px-5">
      <div className="navbar text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow-lg"
            >
              <li>
                <NavLink
                  to="/auth"
                  className={({ isActive }) =>
                    isActive ? "text-blue-600 font-bold" : "text-gray-900"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/auth/events"
                  className={({ isActive }) =>
                    isActive ? "text-blue-600 font-bold" : "text-gray-900"
                  }
                >
                  Events
                </NavLink>
              </li>
              <li>
                <details>
                  <summary className="text-gray-900">Manage Event</summary>
                  <ul className="p-2">
                    <li>
                      <NavLink
                        to="/auth/my-events"
                        className={({ isActive }) =>
                          isActive ? "text-blue-600 font-bold" : "text-gray-900"
                        }
                      >
                        My Events
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/auth/create-event"
                        className={({ isActive }) =>
                          isActive ? "text-blue-600 font-bold" : "text-gray-900"
                        }
                      >
                        Create Event
                      </NavLink>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            EventSphere
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                to="/auth"
                className={({ isActive }) =>
                  isActive ? "text-yellow-300 font-bold" : "text-white"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/auth/events"
                className={({ isActive }) =>
                  isActive ? "text-yellow-300 font-bold" : "text-white"
                }
              >
                Events
              </NavLink>
            </li>
            <li>
              <details>
                <summary className="text-white">Manage Event</summary>
                <ul className="p-2">
                  <li>
                    <NavLink
                      to="/auth/my-events"
                      className={({ isActive }) =>
                        isActive ? "text-yellow-300 font-bold" : "text-black"
                      }
                    >
                      My Events
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/auth/create-event"
                      className={({ isActive }) =>
                        isActive ? "text-yellow-300 font-bold" : "text-black"
                      }
                    >
                      Create Event
                    </NavLink>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <button onClick={handleLogout} className="btn btn-info">
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
