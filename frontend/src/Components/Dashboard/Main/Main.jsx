import React from "react";

import { ItemCard } from "../../Partials/ItemCard";
import { ItemCardSimpleContent } from "../../Partials/ItemCardSimpleContent";

import { CONTENT_PROJECT_PARAMETERS } from "../../../const";

import "./Main.css";

export const Main = ({ title }) => {
  return (
    <div className="Main widget max-width-wrapper">
      <h1>{title}</h1>

      <ItemCard
        category={CONTENT_PROJECT_PARAMETERS.category}
        title={CONTENT_PROJECT_PARAMETERS.title}
        buttonText={CONTENT_PROJECT_PARAMETERS.button_text}
        onClickHandler={true}
      >
      
        {/* {console.log(CONTENT_PROJECT_PARAMETERS)} */}

        <ItemCardSimpleContent items={CONTENT_PROJECT_PARAMETERS.items} />
      </ItemCard>
    </div>
  );
};
