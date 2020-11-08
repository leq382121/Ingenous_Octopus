import React from 'react';

import { TilesColumn } from './TilesColumn';

import './TilesTable.css';

export const TilesTable = ({
  children,
  data,
  handleSelectedTiles,
  handleModalOn,
}) => {
  return (
    <div className='TilesTable'>
      {children && children}

      {data && data.length ? (
        <div className='TilesTable_wrapper'>
          {data.map((column, i) => {
            return (
              <TilesColumn
                columnData={column}
                handleSelectedTiles={handleSelectedTiles}
                handleModalOn={handleModalOn}
                key={i}
              />
            );
          })}
        </div>
      ) : (
        <h5>No data to show</h5>
      )}
    </div>
  );
};
