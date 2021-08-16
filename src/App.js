import React from "react";
import "./css/style.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Routes from "./utils/Routes";
import Header from "./components/Header";

export default function App(props) {
  return (
    <Router>
       <Header/>
      <Switch>
        {Routes.map((route,index) => (
          <Route key={index} path={route.path} exact={route.exact}>
            {route.component}
          </Route>
        ))}
      </Switch>
    </Router>
  );
}
