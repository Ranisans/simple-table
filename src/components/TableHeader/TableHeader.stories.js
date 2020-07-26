import React from 'react';

import TableHeader from './index';
import FilterContext from '../filterContext';

import {
  cellData,
} from '../constants.json';

import '../Table.scss';

export default {
  title: 'Table Header',
  component: TableHeader,
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
      <TableHeader cellData={cellData} />
    </FilterContext.Provider>
  );
};
