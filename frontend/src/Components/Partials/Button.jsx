import React from "react";

import "./Button.css";

export const Button = ({buttonType, buttonText, onClickHandler, primary}) => {
  return (
    <div className="Button">
      <button type={buttonType ? buttonType : "button"} onClick={(e) => onClickHandler && onClickHandler(e)} className={primary ? 'primary' : 'secondary'}>
        {buttonText}
      </button>
    </div>
  );
};
