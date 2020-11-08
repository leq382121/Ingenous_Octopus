import React from "react";
import { Link } from "react-router-dom";

import "./Table.css";

export const Table = ({ columns, data }) => {
  return (
    <div className="Table">
      <table width="100%">
        <thead>
          <tr>
            {columns.map((item, i) => {
              return <th key={i}>{item.title}</th>;
            })}
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>The table body</td>
            <td>with two columns</td>
            <td>with two columns</td>
            <td>with two columns</td>
            <td>with two columns</td>
          </tr>
          <tr>
            <td>The table body</td>
            <td>with two columns</td>
            <td>with two columns</td>
            <td>with two columns</td>
            <td>with two columns</td>
          </tr>
          <tr>
            <td>The table body</td>
            <td>with two columns</td>
            <td>with two columns</td>
            <td>with two columns</td>
            <td>with two columns</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
