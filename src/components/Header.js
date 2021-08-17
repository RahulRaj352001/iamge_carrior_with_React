import React, { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import firebase from "../config/Firebase";
export default function Header() {
  const history = useHistory();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      }
    });
  }, []);
  function handleClick() {
    firebase.auth().signOut().then((res) => {
      history.replace("/login")
      setIsLoggedIn(false)
    }).catch((e) => {
      console.log(e.response.data);
    })
  }
  return (
    <nav>
      <div className=" border  bg-gray-500 text-yellow-300">
        <ul className="flex  justify-between m-2 ">
          <li className="p-2 left-2 font-medium">
            <Link to="/">Home</Link>
          </li>
          <li className="p-2 left-2 font-medium">
            <Link to="/gallery">Gallery</Link>
          </li>
          <li className="p-2 left-2 font-medium">
            {isLoggedIn ? (
              <button onClick={handleClick}> logout</button>
            ) : (
              <Link to="/login">login</Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}
