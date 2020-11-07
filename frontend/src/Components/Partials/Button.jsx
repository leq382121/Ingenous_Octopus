import React from "react";

import "./Button.css";

export const Button = ({buttonText, onClickHandler, primary}) => {
  return (
    <div className="Button">
      <button type="button" onClick={() => onClickHandler()} className={primary ? 'primary' : 'secondary'}>
        {buttonText}
      </button>
    </div>
  );
};
