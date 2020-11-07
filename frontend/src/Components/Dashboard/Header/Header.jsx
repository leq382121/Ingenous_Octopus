import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import burger from "../../../images/burger.svg";
import home from "../../../images/home.svg";

import "./Header.css";
// import mainLogo from './../../images/main_logo.svg';
// import { USER_MENU_ITEMS } from './../../constants';
// import { GET_USER_NAME } from './../../helpers';

export const Header = ({
  initiateLogOut,
  setSideMenuActive,
  sideMenuActive,
}) => {
  const history = useHistory();
  const handleLogout = () => (initiateLogOut(), history.push("/login"));

  return (
    <div className="Header">
      <div className="Header_nav">
        <div
          className="Header_nav_toggle"
          onClick={() => setSideMenuActive(!sideMenuActive)}
        >
          <img className="burger" src={burger} />
        </div>

        <Link to={"/dashboard/main"} className="Header_nav_home flex-center">
          <img className="home" src={home} />
          <p>Back to projects</p>
        </Link>
      </div>

      <div className="Header_title">Kaunas park</div>

      <div className="Header_user">
        <p>Tester Testman</p>

        <button
          className="Header_user-circle"
          onClick={() => {
            return handleLogout();
          }}
        >
          A
        </button>
      </div>
    </div>
  );
};
