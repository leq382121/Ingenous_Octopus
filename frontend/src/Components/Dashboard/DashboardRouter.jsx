import React from "react";
import { Main } from './Main/Main';
// import { Salesreport } from './salesreport/Salesreport';
// import { Documentation } from './Documentation/Documentation';
// import { Tresholds } from './tresholds/Tresholds';
// import { DashboardPage } from './dashboardPage/DashboardPage';
// import { Integrations } from './integrations/Integrations';
// import { SalesDetalization } from './salesDetalization/SalesDetalization';

export const DashboardRouter = (props) => {
  const getContentForDashboard = () => {
    switch (props.match.params.sectionType) {
      case "main": {
        return <Main 
          title='Summary'
        />;
      }
      case "plantselectrical": {
        return <h1>Su jumis sveikinasi kazkas kita! :)</h1>;
      }
      // case "apilog": {
      //   return <EmptyWidget
      //     text="No data imported yet"
      //     ctaText="Let's start with your first integration?"
      //     buttonText='Go to integrations'
      //     buttinLink='/user/provider'
      //   />;
      // }
      // case "dashboard": {
      //   return <DashboardPage
      //     globalCurrency={props.globalCurrency}
      //   />;
      // }

      default: {
        return <h1 className='widget max-width-wrapper'> Only Lemons here. Make a lemonade! 🍋</h1>;
      }
    }
  };

  return getContentForDashboard();
};