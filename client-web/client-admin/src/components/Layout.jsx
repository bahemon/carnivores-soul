import { Outlet } from "react-router";
import Sidebar from "./Sidebar";

export default function Layout() {
  return (
    <div className="flex w-full">
      <div className="w-56">
        <Sidebar />
      </div>
      <div className="w-10/12 px-10">
        <Outlet />
      </div>
    </div>
  )
}