import React from 'react';

import HeaderCell from './HeaderCell';

import './TableHeader.scss';

const TableHeader = ({ cellData }) => (
  <div className="table_row table_header">
    {cellData.map((singleKey) => (
      <HeaderCell
        cellData={singleKey}
        key={singleKey.key}
      />
    ))}
  </div>
);

export default TableHeader;
