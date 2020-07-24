import React from 'react';

import HeaderCell from './HeaderCell';

const TableHeader = ({ headersCellData }) => (
  <div className="table_row table_header">
    {headersCellData.map((cellData) => (
      <HeaderCell cellClass={cellData.cellClass} label={cellData.label} key={cellData.cellClass} />
    ))}
  </div>
);

export default TableHeader;
