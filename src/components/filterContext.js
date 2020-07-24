import React from 'react';

const FilterContext = React.createContext({
  activeFilter: {},
  toggleActiveFilter: () => {},
});

export default FilterContext;
