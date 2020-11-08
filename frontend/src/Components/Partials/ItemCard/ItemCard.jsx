import React from "react";

import { Button } from "../Button";

import "./ItemCard.css";

export const ItemCard = ({
  category,
  title,
  subtitle,
  onClickHandler,
  buttonText,
  type,
  children,
}) => {
  const cardType = () => {
    switch (type) {
      case "side": {
        return (
          <>
            <div className="ItemCard_left">
              <h3>{subtitle && subtitle}</h3>
              <h1>{title && title}</h1>

              <div className="ItemCard_list-labels">{children && children}</div>
            </div>
            <div className="ItemCard_right">
              {/* TODO: Hardcoded buttons */}
              <Button
                buttonText={"Cancel"}
                onClickHandler={() => console.log("Pew.. pew..")}
              />

              <Button
                buttonText={"Start calculating"}
                primary={true}
                onClickHandler={() => console.log("Pew.. pew..")}
              />
            </div>
          </>
        );
      }

      default:
        return (
          <>
            <div className="ItemCard_top">
              <h2>{title && title}</h2>

              {onClickHandler && (
                <Button
                  buttonText={buttonText}
                  onClickHandler={onClickHandler}
                />
              )}
            </div>

            <div className="ItemCard_content">{children && children}</div>
          </>
        );
    }
  };

  return (
    <div className={"ItemCard " + (type ? type : "")}>
      {category && <h5>{category}</h5>}

      <div className="ItemCard_block">{cardType()}</div>
    </div>
  );
};
