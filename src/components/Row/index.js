import React from 'react';

const Row = ({ rowData, cellData }) => (
  <div className="table_row">
    { cellData.map((singleKey) => (
        <div
          className={`table_cell ${singleKey.cellClass}`}
          key={singleKey.cellClass}
        >{rowData[singleKey.key]}
        </div>
    ))
    }
  </div>
);

export default Row;
