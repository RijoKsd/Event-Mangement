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
import Dashboard from "./pages/admin/Dashboard.jsx";
import UpdateEventForm from "./components/admin/UpdateEventForm.jsx";
import UserManagement from "./pages/admin/UserManagement.jsx";
 
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
            {path: 'event/:eventId', element: <UpdateEventForm />},
               
            {path: "create-event", element: <CreateEvent />},
            
        ]
    },{
        path: "/admin",
        element: <AdminLayout />,
        children: [
            {path: "", element: <Dashboard />},
            {path: "users", element: <UserManagement />},
            { path: "events", element: <h1> events</h1>},
          
        ]
    }

     
])

export default router