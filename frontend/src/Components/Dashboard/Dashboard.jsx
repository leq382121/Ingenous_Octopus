import React, { useState, useEffect } from "react";
// import { DashboardContent } from "./DashboardContent";
// import {
//   API_URL,
//   DASHBOARD_MENU,
//   GET_NOTIFICATIONS_MENU,
// } from "../../constants";
// import { OBJECT_EMPTY, GET_TOKEN } from "../../helpers";
import { Route, Link, useLocation } from "react-router-dom";

// import "./Dashboard.css";

export const Dashboard = (props) => {
  // const location = useLocation();

  // const listFields = () => {
  //   return Object.entries(DASHBOARD_MENU).map(([fieldItem, fieldItemValue]) => {
  //     if (fieldItem === "userTypeTwoMenu" && !(props.userInfo.level === 1)) {
  //       return;
  //     }

  //     return (
  //       <ul className={"Dashboard__sidebar--" + fieldItem} key={fieldItem}>
  //         {fieldItemValue.map((item, index) => {
  //           return (
  //             <li
  //               className={
  //                 "Dashboard__sidebar--" +
  //                 item.id +
  //                 " " +
  //                 ((`/dashboard/${item.id}` === location.pathname &&
  //                   " active") ||
  //                   "")
  //               }
  //               key={item.name}
  //             >
  //               <Link to={"/dashboard/" + item.id} exact="true">
  //                 {item.name}

  //                 {item.id == "documentation" &&
  //                   notifications.counter &&
  //                   notifications.counter["documentation"] > 0 && (
  //                     <div className={"notification active"}>
  //                       {notifications.counter["documentation"]}
  //                     </div>
  //                   )}

  //                 {item.id == "apilog" &&
  //                   notifications.counter &&
  //                   notifications.counter["apilog"] > 0 && (
  //                     <div className={"notification active"}>
  //                       {notifications.counter["apilog"]}
  //                     </div>
  //                   )}

  //                 {item.id == "dashboard" &&
  //                   notifications.counter &&
  //                   notifications.counter["dashboard"] > 0 && (
  //                     <div className={"notification active"}>
  //                       {notifications.counter["dashboard"]}
  //                     </div>
  //                   )}
  //               </Link>
  //             </li>
  //           );
  //         })}
  //       </ul>
  //     );
  //   });
  // };

  return (
    <div className="Dashboard">
      {/* <div className="Dashboard__sidebar">{listFields()}</div>

      <Route
        name="userDashboardSection"
        path="/dashboard/:sectionType"
        key={4}
        render={(props) => {
          return (
            <DashboardContent
              {...props}
              globalCurrency={globalCurrency}
              changeGlobalCurrency={changeGlobalCurrency}
              key={props.match.params.type || "empty"}
            />
          );
        }}
      /> */}
    </div>
  );
};
