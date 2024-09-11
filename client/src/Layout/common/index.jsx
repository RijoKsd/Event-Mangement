import { Outlet } from "react-router-dom";
import Header from  "../../components/common/Header.jsx"

 
export default function CommonLayout() {
  return (
    <>
    <Header />
      <div className="">
        <Outlet />
      </div>
    </>
  )
}
