import React from "react";

import "./Button.css";

export const Button = ({ buttonType, buttonText, onClickHandler, primary, action }) => {
  return (
    <div className="Button">
      <button
        type={buttonType ? buttonType : "button"}
        onClick={(e) => onClickHandler && console.log("button clicked")}
        className={primary ? "primary" : (action ? 'action' : 'secondary')}
      > 
        {/* <button type={buttonType ? buttonType : "button"} onClick={(e) => onClickHandler && onClickHandler(e)} className={primary ? 'primary' : 'secondary'}> */}

        {buttonText}
      </button>
    </div>
  );
};
