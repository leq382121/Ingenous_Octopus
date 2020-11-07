import React, { useState, useEffect } from "react";

import { Button } from './Button'

import "./ItemCard.css";

export const ItemCard = ({ title, onClickHandler, buttonText, children }) => {
  return (
    <div className="ItemCard">
      <div className="ItemCard_top">
        <h2>{title}</h2>

        {link && (
          <Button
            buttonText={buttonText}
            onClickHandler={onClickHandler}
          />
        )}
      </div>
      
      <div className="ItemCard_content">
        {children}
      </div>
    </div>
  );
};
