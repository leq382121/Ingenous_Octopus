import React from "react";

import { DASHBOARD_MENU } from "../../../const";
import { NavLink } from "../../Partials/NavLink";

import "./SideMenu.css";

export const SideMenu = ({sideMenuActive, setSideMenuActive}) => {
  const listSideMenuFields = () => {
    return DASHBOARD_MENU.map((fieldItem, i) => {
      return (
        <div className="SideMenu_menu_block" key={i}>
          {
            fieldItem.category && <p className="SideMenu_menu_title">{fieldItem.category}</p>
          }

          <ul className="SideMenu_menu_list" key={i}>
            {fieldItem.items.map((item, i) => {

              return (
                <NavLink
                  id={item.id} 
                  title={item.title}
                  notifications={item.notifications}
                  index={i}
                  setSideMenuActive={setSideMenuActive}
                />
              );
            })}
          </ul>
        </div>
      );
    });
  };

  return (
    <div className={'Dashboard_side-menu' + (sideMenuActive ? ' active' : '')} onClick={() => setSideMenuActive(false)}>
      <div className="SideMenu" onClick={(e) =>  e.stopPropagation()}>
        {listSideMenuFields()}
      </div>
    </div>
  );
};
