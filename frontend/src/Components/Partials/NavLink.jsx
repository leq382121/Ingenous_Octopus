import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import './NavLink.css';

export const NavLink = ({id, title, notifications, setSideMenuActive}) => {
  const location = useLocation();
  const linkMatch = `/dashboard/${id}` === location.pathname;

  return (
    <li className={'nav-item' + (linkMatch ? ' active' : '')}>
      <Link className='flex-center' to={'/dashboard/' + id} exact='true' onClick={() => setSideMenuActive(false)}>
        {title}
        {notifications && <span className='notifications'>{notifications}</span>}
      </Link>
    </li>
  );
};
