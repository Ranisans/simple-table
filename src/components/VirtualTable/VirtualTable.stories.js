import React from 'react';

import VirtualTable from './index';
import FilterContext from '../filterContext';
import tableCellData from '../tableCellData';
import testData from './testData';

import '../Table.scss';

import {
  rowHeight, cellData, viewportHeight,
} from '../constants.json';

export default {
  title: 'Virtual Table',
  component: VirtualTable,
};

export const Base = () => {
  const [activeFilter, setActiveFilter] = React.useState(
    {
      activeCellId: '',
      increase: true,
    },
  );
  return (
    <FilterContext.Provider
      value={{ activeFilter, toggleActiveFilter: setActiveFilter }}
    >
      <VirtualTable
        rowsData={testData}
        rowHeight={rowHeight}
        viewportHeight={viewportHeight}
        cellData={cellData}
        classList={tableCellData}
      />
    </FilterContext.Provider>
  );
};
