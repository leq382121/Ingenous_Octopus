import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import { Header } from './Header/Header';
import { SideMenu } from './SideMenu/SideMenu'
import { DashboardRouter } from './DashboardRouter';

import './Dashboard.css';

export const Dashboard = (props) => {
  const [sideMenuActive, setSideMenuActive] = useState(false);

  return (
    <div className='Dashboard'>
      <Header
        initiateLogOut={props.initiateLogOut}
        setSideMenuActive={(boolean) => setSideMenuActive(boolean)}
        sideMenuActive={sideMenuActive}
      />

      <div className='Dashboard_page'>
        <SideMenu
          sideMenuActive={sideMenuActive}
          setSideMenuActive={(boolean) => setSideMenuActive(boolean)}
        />

        <div className='Dashboard_content'>
          <Route
            name='DashboardRouter'
            path='/dashboard/:sectionType'
            render={(props) => {
              return (
                <DashboardRouter
                  {...props}
                  key={props.match.params.type || 'empty'}
                />
              );
            }}
          />
        </div>

        {/* TODO: Move modal here */}
      </div>
    </div>
  );
};
