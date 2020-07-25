import React from 'react';

import TableHeader from './index';
import FilterContext from '../filterContext';

import '../Table.scss';

import tableCellData from '../tableCellData';

export default {
  title: 'Table Header',
  component: TableHeader,
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
      <TableHeader headersCellData={tableCellData} />
    </FilterContext.Provider>
  );
};
