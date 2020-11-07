import React, { useState } from "react";

import "./Button.css";

export const Input = ({
  labelText,
  inputType,
  disabled,
  error,
  selectValues,
}) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className={("Input", disabled && "disabled")}>
      <label for={labelText}>{labelText}</label>

      {inputType === "select" ? (
        <select
          name={labelText}
          disabled={disabled && disabled}
          className={error && "error"}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        >
          {selectValues.map((item, i) => {
            return (
              <option name={item.name} value={item.value} key={i}>
                {item.name}
              </option>
            );
          })}
        </select>
      ) : (
        <input
          type={inputType ? inputType : "text"}
          name={labelText}
          disabled={disabled && disabled}
          className={error && "error"}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        ></input>
      )}

      {error && <p className={'Input_error', 'error'}>{error}</p>}
    </div>
  );
};
