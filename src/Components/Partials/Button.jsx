import React from 'react';

import './Button.css';

export const Button = ({ buttonType, buttonText, onClickHandler, primary, action }) => {
  return (
    <div className='Button'>
      <button
        type={buttonType ? buttonType : 'button'}
        onClick={(e) => onClickHandler && onClickHandler(e)}
        className={primary ? 'primary' : (action ? 'action' : 'secondary')}
      > 
        {buttonText}
      </button>
    </div>
  );
};
