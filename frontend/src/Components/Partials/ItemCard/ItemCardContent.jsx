import React from "react";
import { Button } from "../Button";
import { Table } from "../Table";

import "./ItemCardContent.css";

export const ItemCardContent = ({ items, tableHeaders }) => {
  return (
    <div className="ItemCardContent">
      {tableHeaders ? (
        <Table 
          columns={tableHeaders}
          data={items}
        />
      ) : (
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
                      buttonText={item.button_text}
                      onClickHandler={true}
                      action={true}
                    />
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
