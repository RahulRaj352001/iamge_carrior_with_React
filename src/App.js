import React, { useEffect, useState } from "react";
import "./css/style.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import firebase from "./config/Firebase";

import Routes from "./utils/routes/Index";
import Header from "./components/Header";
import appContext from "./store/AppContext";

import AuthRoutes from "./utils/routes/AuthRoutes";
import GuestRoute from "./utils/routes/GuestRoutes";
import Loading from "./components/Loading";
import Notfound from "./pages/404";

export default function App(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setuser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
        setuser(user);
        setIsLoading(false);
        console.log(user);
      } else {
        setIsLoggedIn(false);
        setuser({});
        setIsLoading(false);
      }
    });
  }, []);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <Router>
      <appContext.Provider value={[isLoggedIn, user]}>
        <Header />
        <Switch>
          {Routes.map((route, index) => {
            if (route.protected === "guest") {
              return (
                <GuestRoute
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.component}
                />
              );
            }
            if (route.protected === "auth") {
              return (
                <AuthRoutes
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.component}
                />
              );
            }

            return (
              <Route key={index} path={route.path} exact={route.exact}>
                {route.component}
              </Route>
            );
          })}
          <Route key="*"  >
             <Notfound/>
              </Route>
        </Switch>
      </appContext.Provider>
    </Router>
  );
}
