import React, { useState, useEffect } from 'react';

import warning from '../../../images/warning.svg';
import './TilesCard.css';

export const TilesCard = ({ cardData, handleCardSelect, handleCardRemove }) => {
  const [cardSelected, setCardSelected] = useState(false);

  useEffect(() => {
    (!cardSelected && cardData.checked) && setCardSelected(true);
  }, []);

  useEffect(() => {
    cardSelected 
      ? handleCardSelect(cardData)
      : handleCardRemove(cardData)
  }, [cardSelected]);

  return (
    <label
      className={'TilesCard' + (cardData.info_missing ? ' disabled' : '') + (cardSelected ? ' selected' : '')}
      cardid={cardData.id}
    >
      <div className='TilesCard_top'>
        <h4>{cardData.name && cardData.name}</h4>
        <input
          type='checkbox'
          name={cardData.id}
          checked={cardSelected}
          onChange={() =>
            !cardData.info_missing && setCardSelected(!cardSelected)
          }
        />
      </div>

      {cardData.info_missing && (
        <div className='TilesCard_bottom'>
          <img src={warning} alt='warning icon' />
          Missing details
        </div>
      )}

      {(cardData.type || cardData.description) && (
        <div className='TilesCard_bottom'>
          <span className='type'>{cardData.type}</span>
          {cardData.type && cardData.description && <span>•</span>}
          <span className='description'>{cardData.description}</span>
        </div>
      )}
    </label>
  );
};
