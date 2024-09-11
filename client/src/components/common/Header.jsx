 import { Link, NavLink } from "react-router-dom";

const Header = () => {
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
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-blue-600 font-bold" : "text-gray-900"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/events"
                  className={({ isActive }) =>
                    isActive ? "text-blue-600 font-bold" : "text-gray-900"
                  }
                >
                  Events
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/my-events"
                  className={({ isActive }) =>
                    isActive ? "text-blue-600 font-bold" : "text-gray-900"
                  }
                >
                  My Events
                </NavLink>
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
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-yellow-300 font-bold" : "text-white"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/events"
                className={({ isActive }) =>
                  isActive ? "text-yellow-300 font-bold" : "text-white"
                }
              >
                Events
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/my-events"
                className={({ isActive }) =>
                  isActive ? "text-yellow-300 font-bold" : "text-white"
                }
              >
                My Events
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link to="/signup" className="btn btn-info">
            Signup
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
