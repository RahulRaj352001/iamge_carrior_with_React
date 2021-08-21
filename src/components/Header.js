import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import firebase from "../config/Firebase";
import appContext from "../store/AppContext";
export default function Header() {
  const history = useHistory();
  const [isLoggedIn, user] = useContext(appContext);
  function handleClick() {
    firebase
      .auth()
      .signOut()
      .then((res) => {
        history.replace("/login");
      })
      .catch((e) => {
        console.log(e.response.data);
      });
  }
  return (
    <nav className=" border flex justify-between bg-gray-500 text-yellow-300">
      <ul className="flex  justify-between m-2 ">
        <li className="p-2 left-2 font-medium">
          <NavLink
            to="/"
            exact={true}
            activeClassName="underline text-blue-300"
          >
            Home
          </NavLink>
        </li>
        <li className="p-2 left-2 font-medium">
          <NavLink
            to="/gallery"
            exact
            activeClassName="underline text-blue-300"
          >
            Gallery
          </NavLink>
        </li>
        <li className="p-2 left-2 font-medium">
          <NavLink
            to="/tensorflow"
            exact
            activeClassName="underline text-blue-300"
          >
            Tensorflow
          </NavLink>
        </li>
      </ul>
      <ul className=" flex  justify-between m-2">
        <li className="p-2 left-2 font-medium">
          {isLoggedIn ? (
            <button onClick={handleClick}> logout</button>
          ) : (
            <NavLink
              to="/login"
              exact
              activeClassName="underline text-blue-300"
            >
              Login
            </NavLink>
          )}
          </li>
        <li className="p-2 left-2 font-medium">
          {!isLoggedIn && (
            
            <NavLink
              to="/signup"
              exact
              activeClassName="underline text-blue-300"
            >
              Signup
            </NavLink>
          )}
        </li>
      </ul>
    </nav>
  );
}
