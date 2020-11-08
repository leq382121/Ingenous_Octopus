import React from "react";

import { ItemCard } from "../../Partials/ItemCard/ItemCard";
import { ItemCardContent } from "../../Partials/ItemCard/ItemCardContent";

import { CONTENT_CALCULATE_CARD } from "../../../const";

import "./PlantsElectrical.css";

export const PlantsElectrical = ({ title }) => {
  return (
    <div className="PlantsElectrical widget max-width-wrapper">
      <h1>{title}</h1>

      {/* {MAIN_VALUES.map((CARD_ITEM, i) => {
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
      })} */}

      <ItemCard
        title={CONTENT_CALCULATE_CARD.title}
        subtitle={CONTENT_CALCULATE_CARD.subtitle}
        type='side'
      >
        <ItemCardContent
          items={CONTENT_CALCULATE_CARD.items}
        />
      </ItemCard>
    </div>
  );
};
