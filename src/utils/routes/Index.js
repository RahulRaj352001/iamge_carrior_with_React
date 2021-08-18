import React from "react";
import Gallery from "../../pages/Gallery";
import Home from "../../pages/Home";
import Login from "../../pages/Login";
import SignUp from "../../pages/SignUp";
 

export default  [
  {
    path: "/",
    exact: true,
    component: () => <Home />,
    protected:null
  },
  {
    path: "/gallery",
    exact: true,
    component: () => <Gallery />,
    protected:"auth"

  },
  {
    path: "/login",
    exact: true,
    component: () => <Login />,
    protected:"guest"

  },
  {
    path: "/signup",
    exact: true,
    component: () => <SignUp />,
    protected:"guest"

  }
]
