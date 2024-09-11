import { Outlet, useNavigate } from "react-router-dom";
import Header from "../../components/user/Header"
import { useSelector } from "react-redux";
import { useEffect } from "react";

export default function UserLayout() {
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    if (!auth.isLoggedIn) {
      navigate("/login");
      
    }
  },
  [auth.isLoggedIn]
  );

  return (
    <>
      <Header />
      <div className="">
        <Outlet />
      </div>
    </>
  );
}
