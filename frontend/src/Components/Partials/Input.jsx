import React, { useEffect, useState } from "react";

import "./Input.css";

export const Input = ({
  labelText,
  inputType,
  disabled,
  error,
  selectValues,
  inputValueHandler
}) => {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    inputValueHandler && inputValueHandler(inputValue);
  }, [inputValue])

  return (
    <div className={("Input" + (disabled ? " disabled" : "") + (error ? " inputError" : "") )}>
      <label htmlFor={labelText}>{labelText}</label>

      {inputType === "select" ? (
        <select
          name={labelText}
          disabled={disabled && disabled}
          className={error && "error"}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        >
          {selectValues && selectValues.map((item, i) => {
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

      {error && <p className='Input_error error'>{error}</p>}
    </div>
  );
};
