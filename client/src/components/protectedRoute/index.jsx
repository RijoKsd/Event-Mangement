 import { Navigate } from "react-router-dom";

 
export default function ProtectedRoute(children, requiredRole) {
  
    let isAuthenticate = false;
    let role = null;

    const persistedUser = localStorage.getItem("persist:user");
    if (persistedUser) {
      const parsedUser = JSON.parse(persistedUser);
     
      if (parsedUser.auth) {
        const parsedAuth = JSON.parse(parsedUser.auth);
        console.log(parsedAuth, "parsedAuth")
        isAuthenticate = parsedAuth.isLoggedIn;
        role = parsedAuth.role;
         
      }
    }
 
    if (!isAuthenticate) {
        return <Navigate to= "/login" replace />
    }

    if(requiredRole && role !== requiredRole){
        return <Navigate to= "/" replace />
    }


  return  children
}
