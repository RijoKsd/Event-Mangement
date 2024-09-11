import { createBrowserRouter } from "react-router-dom";
import CommonLayout from "./Layout/common";
import Home from "./components/common/Home.jsx";
import Login from "./components/common/Login.jsx";
import Register from "./components/common/Register.jsx";

const router = createBrowserRouter([
    { 
        path: "/",
        element: <CommonLayout />,
        children: [
            { path: "", element: <Home /> },
            {path:'login', element:<Login />},
            {path:'signup', element:<Register />},
            { path: "events", element: <h1>Events</h1> },
            { path: "my-events", element: <h1>My Events</h1> },
        ]
    }
     
])

export default router