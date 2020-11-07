import React from "react";
import { Link, useLocation } from "react-router-dom";

import "./NavLink.css";

export const NavLink = ({id, title, notifications, setSideMenuActive, index}) => {
  const location = useLocation();
  const linkMatch = `/dashboard/${id}` === location.pathname;

  console.log('linkMatch', linkMatch);

  return (
    <li className={"nav-item" + (linkMatch ? " active" : "")} key={index}>
      <Link to={"/dashboard/" + id} exact="true" onClick={() => setSideMenuActive(false)}>
        {title}
        {notifications && <span className="notifications">{notifications}</span>}
      </Link>
    </li>
  );
};
