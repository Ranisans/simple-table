import React from 'react';

const Row = ({ rowData, keys, classList }) => (
  <div className="table_row">
    { keys.map((singleKey, index) => (
        <div
          className={`table_cell ${classList[index].cellClass}`}
          key={classList[index].cellClass}
        >{rowData[singleKey]}
        </div>
    ))
    }
  </div>
);

export default Row;
