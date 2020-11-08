import React, { useState, useEffect } from 'react';

import plus from '../../../images/plus.svg';
import { TilesCard } from './TilesCard';
import './TilesColumn.css';

export const TilesColumn = ({ columnData, handleSelectedTiles, handleModalOn }) => {
  const [selectedColValues, setSelectedColValues] = useState([]);

  useEffect(() => {
    handleSelectedTiles(columnData.type, selectedColValues);
  }, [selectedColValues]);

  const handleCardSelect = (value) => {
    value && setSelectedColValues([...selectedColValues, value]);
  };

  const handleCardRemove = (value) => {
    let newArray = selectedColValues;
    let valueIndex = newArray.indexOf(value);

    value && newArray.length > 0 && newArray.splice(valueIndex, 1);
    setSelectedColValues([...newArray]);
  };

  return (
    <div className='TilesColumn_column'>
      <div className='top'>
        <h2>{columnData.title && columnData.title}</h2>

        {selectedColValues.length > 0 && (
          <p className='cards-selected'>
            <span>{selectedColValues.length}</span> selected
          </p>
        )}
      </div>

      {/* Add new card */}
      <div
        className='TilesColumn_new-card'
        onClick={() => handleModalOn(columnData.type.slice(0, -1))}
      >
        <img src={plus} alt='plus' />
        Add new {columnData.type.slice(0, -1)}
      </div>

      {/* Cards List here */}
      {columnData.content && columnData.content.length ? (
        <div className='TilesColumn_wrapper'>
          {columnData.content.map((card, i) => {
            return (
              <TilesCard
                cardData={card}
                key={i}
                handleCardSelect={handleCardSelect}
                handleCardRemove={handleCardRemove}
              />
            );
          })}
        </div>
      ) : (
        <h5>No cards added.</h5>
      )}
    </div>
  );
};
