import { NavLink, useNavigate } from "react-router-dom"
import Swal from "sweetalert2"

export default function Sidebar() {
  const navigate = useNavigate()

  const handleLogout = () => {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Goodbye!',
      showConfirmButton: false,
      timer: 1500
    })
    localStorage.removeItem('access_token')
    navigate('/login')
  }


  return (
    <div className="drawer drawer-mobile sticky top-0">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open sidebar</label>

      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 bg-slate-200 text-base-content">
          <div className="w-full flex justify-center p-2">
            <img src={require('../assets/logo.png')} className="w-24" alt="" />

          </div>
          <li className="text-blue-700 font-bold"><NavLink className="w-48 focus:bg-blue-700" to={'/'}>
            <span className="material-symbols-outlined">
              checkroom
            </span>
            Dashboard</NavLink></li>
          <li className="text-blue-700 font-bold"><NavLink className="w-48 focus:bg-blue-700" to={'/categories'}>
            <span className="material-symbols-outlined">
              list
            </span>
            Category List</NavLink></li>
          <li className="text-blue-700 font-bold"><NavLink className="w-48 focus:bg-blue-700" to={'/register'}>
            <span className="material-symbols-outlined">
              app_registration
            </span>
            Register Admin</NavLink></li>
          <li onClick={handleLogout} className="text-blue-700 font-bold"><a className="focus:bg-blue-700">
            <span className="material-symbols-outlined">
              logout
            </span>
            Sign out</a></li>
        </ul>

      </div>
    </div>
  )
}