import React from "react";
import { Button } from "./Button";

import "./ItemCardSimpleContent.css";

export const ItemCardSimpleContent = ({ items }) => {
  return (
    <div className="ItemCardSimpleContent">
      <ul>
        {items.map((item, i) => {

          return (
            <li className="simple-item" key={i}>
              <p className="title">{item.title}</p>

              <div className="value">
                {item.value}

                {item.button_text && (
                  <Button
                    buttonType={"button"}
                    buttonText={items.button_text}
                    onClickHandler={true}
                    primary={items.button_type}
                  />
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
