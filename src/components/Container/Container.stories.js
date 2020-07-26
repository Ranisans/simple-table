import React from 'react';

import Container from './index';
import FilterContext from '../filterContext';

import testData from '../VirtualTable/testData';

export default {
  title: 'Container',
  component: Container,
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
      <Container rowsData={testData} />
    </FilterContext.Provider>
  );
};
