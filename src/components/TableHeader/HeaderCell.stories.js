import React from 'react';

import HeaderCell from './HeaderCell';
import FilterContext from '../filterContext';

import '../Table.scss';
import './TableHeader.scss';

export default {
  title: 'Header Cell',
  component: HeaderCell,
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
      <HeaderCell cellClass='cell_id' label='ID' />
    </FilterContext.Provider>
  );
};

export const TwoCellTogether = () => {
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
      <HeaderCell cellClass='cell_id' label='ID' />
      <HeaderCell cellClass='cell_first_name' label='First Name' />
    </FilterContext.Provider>
  );
};
