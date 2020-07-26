import React from 'react';

import VirtualTable from './index';
import FilterContext from '../filterContext';
import tableCellData from '../tableCellData';
import testData from './testData';

import '../Table.scss';

export default {
  title: 'Virtual Table',
  component: VirtualTable,
};

const rowHeight = 30;
const viewportHeight = 500;
const keys = ['id', 'firstName', 'lastName', 'email', 'phone'];

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
