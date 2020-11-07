import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import "normalize.css";

import { Login } from "./Components/Login/Login";
import { Dashboard } from "./Components/Dashboard/Dashboard";

export const App = () => {
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  const initiateLogIn = () => {
    Cookies.set("logged_in", true);
    !userLoggedIn && setUserLoggedIn(true);
  };

  const initiateLogOut = () => {
    Cookies.remove("logged_in");
    userLoggedIn && setUserLoggedIn(false);
  };

  const checkCookieForInfo = () => {
    Cookies.get("logged_in") && !userLoggedIn && setUserLoggedIn(true);
  };

  return (
    <>
      {checkCookieForInfo()}

      <Router>
        <Switch key={2}>
          <Route
            name="Dashboard"
            path="/dashboard"
            exact
            render={(props) => {
              return (
                <Redirect
                  to="/dashboard/main"
                  {...props}
                />
              );
            }}
          />

          <Route
            name="login"
            path="/login"
            exact
            render={(props) => {
              return (
                (userLoggedIn && (
                  <Redirect
                    to="/dashboard/main"
                    {...props}
                  />
                )) || <Login {...props} initiateLogIn={initiateLogIn} />
              );
            }}
          />

          <Route
            path="*"
            exact={true}
            render={(props) => {
              return (
                (userLoggedIn && (
                  <Dashboard
                    {...props}
                    initiateLogOut={initiateLogOut}
                  />
                )) || <Redirect to="/login" />
              );
            }}
          />
        </Switch>
      </Router>
    </>
  );
};
