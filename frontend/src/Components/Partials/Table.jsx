import React from "react";
import { Link } from "react-router-dom";

import "./Table.css";

export const Table = ({ columns, data }) => {
  const getHeaders = () => {
    return (
      <tr>
        {columns.map((item, i) => {
          return <th key={i}>{item.title}</th>;
        })}
      </tr>
    );
  };

  const getRowData = (row) => {
    return Object.entries(columns).map(([, fieldItemValue], i) => {
      return (
        <td key={i}>
          <div className={'table-data ' + fieldItemValue.id}>
            {row[fieldItemValue.id].value ? (
              row[fieldItemValue.id].link ? (
                <Link to={row[fieldItemValue.id].link}>
                  {row[fieldItemValue.id].value}
                </Link>
              ) : (
                <p>
                  {row[fieldItemValue.id].value}{" "}
                  <span className="unit">{row[fieldItemValue.id].unit}</span>
                </p>
              )
            ) : (
              row[fieldItemValue.id]
            )}
          </div>
        </td>
      );
    });
  };

  return (
    <div className="Table">
      <table width="100%">
        <thead>{getHeaders()}</thead>

        <tbody>
          {data.map((row, i) => {
            return <tr key={i}>{getRowData(row)}</tr>;
          })}
        </tbody>
      </table>
    </div>
  );
};
