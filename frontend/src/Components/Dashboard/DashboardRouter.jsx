import React from "react";
import { Main } from "./Main/Main";
import { PlantsElectrical } from "./PlantsElectrical/PlantsElectrical";

export const DashboardRouter = (props) => {
  const getContentForDashboard = () => {
    switch (props.match.params.sectionType) {
      case "main": {
        return <Main title="Summary" />;
      }

      case "plantselectrical": {
        return <PlantsElectrical title="Plants & electrical" />;
      }

      default: {
        return (
          <h1 className="widget max-width-wrapper">
            🍋 Only here. Make a lemonade!
          </h1>
        );
      }
    }
  };

  return getContentForDashboard();
};
