import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="w-full">
      <div className="flex justify-between mx-5">
        <div>
        </div>

        <div className="m-4">
          <a href="">
            <img src="https://www.carnivoressoul.com/wp-content/uploads/2020/05/carni1.png" className="w-16" alt="" />
          </a>
        </div>

        <div className="flex items-center justify-end">
          <ul className="flex justify-center items-center gap-3">
            <li className="flex justify-center">
              <span className="material-symbols-outlined">
                search
              </span>
            </li>
            <li className="flex justify-center">
              <span className="material-symbols-outlined">
                person
              </span>
            </li>
            <li className="flex justify-center gap-3">
              <span>
                RP:0
              </span>
              <span className="material-symbols-outlined">
                shopping_cart
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <ul className="flex gap-10 justify-center items-center">
          <NavLink to={'/'}><li className="text-blue-900 font-bold">HOME</li></NavLink>
          <li className="text-blue-900 font-bold">SHOP</li>
          <li className="text-blue-900 font-bold">ABOUT US</li>
          <li className="text-blue-900 font-bold">PICTURE OF US</li>
          <li className="text-blue-900 font-bold">BLOG</li>
          <li className="text-blue-900 font-bold">HOW TO</li>
        </ul>
      </div>
    </div>
  )
}