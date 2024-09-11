import { createBrowserRouter } from "react-router-dom";
import CommonLayout from "./Layout/common";
import Home from "./components/common/Home.jsx";
import Login from "./components/common/Login.jsx";
import Register from "./components/common/Register.jsx";
import UserLayout from "./Layout/user";
 import Event from "./pages/user/Event.jsx";
import MyEvents from "./pages/user/MyEvents.jsx";
import CreateEvent from "./pages/user/CreateEvent.jsx";
import AdminLayout from "./Layout/admin";
import Dashboard from "./pages/user/admin/Dashboard.jsx";
 
const router = createBrowserRouter([
    { 
        path: "/",
        element: <CommonLayout />,
        children: [
            { path: "", element: <Home /> },
            {path:'login', element:<Login />},
            {path:'signup', element:<Register />},
            { path: "events", element: <Event />},
         
        ]
    },{
        path: "/auth",
        element:  <UserLayout /> ,
        children: [
            {path: "", element: <Home />},
            {path: "events",  element: <Event />},
            {path: "my-events", element: <MyEvents />},
            {path: "create-event", element: <CreateEvent />},
        ]
    },{
        path: "/admin",
        element: <AdminLayout />,
        children: [
            {path: "dashboard", element: <Dashboard />},
            // {path: "users", element: <Users />},
            // {path: "turfs", element: <Turfs />},
        ]
    }

     
])

export default router