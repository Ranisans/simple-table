import React from 'react';

import HeaderCell from './HeaderCell';
import FilterContext from '../filterContext';

import '../Table.scss';
import './TableHeader.scss';

import {
  cellData,
} from '../constants.json';

export default {
  title: 'Header Cell',
  component: HeaderCell,
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
      <HeaderCell cellData={cellData[0]} />
    </FilterContext.Provider>
  );
};

export const TwoCellTogether = () => {
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
      <HeaderCell cellData={cellData[0]} />
      <HeaderCell cellData={cellData[1]} />
    </FilterContext.Provider>
  );
};
