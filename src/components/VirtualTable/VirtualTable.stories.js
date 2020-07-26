import React from 'react';

import VirtualTable from './index';
import FilterContext from '../filterContext';
import tableCellData from '../tableCellData';
import testData from './testData';

import '../Table.scss';

import {
  rowHeight, keys, viewportHeight,
} from '../constants.json';

export default {
  title: 'Virtual Table',
  component: VirtualTable,
};

export const Base = () => {
  const [activeFilter, setActiveFilter] = React.useState(
    {
      activeClassCell: '',
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
        keys={keys}
        classList={tableCellData}
      />
    </FilterContext.Provider>
  );
};
