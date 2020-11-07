import React from "react";

import { Button } from "./Button";

import "./ItemCard.css";

export const ItemCard = ({ category, title, onClickHandler, buttonText, children }) => {
  return (
    <div className="ItemCard">
      <h5>{category}</h5>

      <div className="ItemCard_block">
        <div className="ItemCard_top">
          <h2>{title}</h2>

          {onClickHandler && (
            <Button buttonText={buttonText} onClickHandler={onClickHandler} />
          )}
        </div>

        <div className="ItemCard_content">{children}</div>
      </div>
    </div>
  );
};
