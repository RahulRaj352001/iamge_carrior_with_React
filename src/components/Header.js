import React from 'react'
import{Link} from "react-router-dom"
export default function Header() {
    return (
        <nav>
        <div className=" border  bg-gray-500 text-yellow-300">
        <ul className="flex  justify-between m-2 ">
            <li className="p-2 left-2 font-medium" >
              <Link to="/">Home</Link>
            </li>
            <li  className="p-2 left-2 font-medium" >
              <Link to="/gallery">Gallery</Link>
            </li>
            <li className="p-2 left-2 font-medium" >
              <Link to="/login">login</Link>
            </li>
          </ul>
        </div>
        </nav>
    )
}
