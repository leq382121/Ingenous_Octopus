import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Login from "./Login";

import "./header.css";
import mainLogo from './../../images/main_logo.svg';
import { USER_MENU_ITEMS } from './../../constants';
import { GET_USER_NAME } from './../../helpers';

export const Header = (props) => {
  const history = useHistory();
  const [showMenu, setShowMenu] = useState(false);

  const handleLogout = () => {
    if (props.userLoggedIn) {
      return props.initiateLogOut(), setShowMenu(false), history.push("/login");
    }
  };

  // const catcheHeaderOutsideClick = () => {
  //   document.querySelector("body").addEventListener("click", function (event) {
  //     if (!event.target.classList.contains("Header__content__user-menu")) {
  //       setShowMenu(false);
  //     }
  //   });
  // };

  // catcheHeaderOutsideClick();

  return (
    <div className="Header">

    </div>
  );
};
