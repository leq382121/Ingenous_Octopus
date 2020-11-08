import React from "react";

import { ItemCard } from "../../Partials/ItemCard/ItemCard";
import { ItemCardContent } from "../../Partials/ItemCard/ItemCardContent";

import {
  CONTENT_PROJECT_PARAMETERS,
  CONTENT_SIMULATION,
  CONTENT_CALCULATIONS,
} from "../../../const";

import "./Main.css";

export const Main = ({ title }) => {
  const MAIN_VALUES = [
    CONTENT_PROJECT_PARAMETERS,
    CONTENT_SIMULATION,
    CONTENT_CALCULATIONS,
  ];

  return (
    <div className="Main widget max-width-wrapper">
      <h1>{title}</h1>

      {MAIN_VALUES.map((CARD_ITEM, i) => {
        return (
          <ItemCard
            category={CARD_ITEM.category}
            title={CARD_ITEM.title}
            buttonText={CARD_ITEM.button_text}
            onClickHandler={true}
            key={i}
          >
            <ItemCardContent
              tableHeaders={CARD_ITEM.table_col && CARD_ITEM.table_col}
              items={CARD_ITEM.items}
            />
          </ItemCard>
        );
      })}
    </div>
  );
};
