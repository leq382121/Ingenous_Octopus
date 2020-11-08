import React from "react";

import { ItemCard } from "../../Partials/ItemCard";
import { ItemCardSimpleContent } from "../../Partials/ItemCardSimpleContent";
import { Table } from "../../Partials/Table";

import { CONTENT_PROJECT_PARAMETERS, CONTENT_SIMULATION, CONTENT_CALCULATIONS } from "../../../const";

import "./Main.css";

export const Main = ({ title }) => {
  return (
    <div className="Main widget max-width-wrapper">
      <h1>{title}</h1>

      {/* TODO: Create a map for epeatables when all cases will be covered. */}

      <ItemCard
        category={CONTENT_PROJECT_PARAMETERS.category}
        title={CONTENT_PROJECT_PARAMETERS.title}
        buttonText={CONTENT_PROJECT_PARAMETERS.button_text}
        onClickHandler={true}
      >

        <ItemCardSimpleContent items={CONTENT_PROJECT_PARAMETERS.items} />
      </ItemCard>

      <ItemCard
        category={CONTENT_SIMULATION.category}
        title={CONTENT_SIMULATION.title}
        buttonText={CONTENT_SIMULATION.button_text}
        onClickHandler={true}
      >

        <ItemCardSimpleContent 
          items={CONTENT_SIMULATION.items} 

        />
      </ItemCard>

      <ItemCard
        category={CONTENT_SIMULATION.category}
        title={CONTENT_SIMULATION.title}
        buttonText={CONTENT_SIMULATION.button_text}
        onClickHandler={true}
      >

        <ItemCardSimpleContent 
          tableHeaders={CONTENT_CALCULATIONS.table_col}
          items={CONTENT_SIMULATION.items} 
        />
        
      </ItemCard>
    </div>
  );
};
