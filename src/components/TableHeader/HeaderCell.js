import React from 'react';
import FilterContext from '../filterContext';

import './HeaderCell.scss';

const HeaderCell = ({ cellData }) => {
  const { activeFilter, toggleActiveFilter } = React.useContext(FilterContext);
  const [isFilterIncrease, setIsFilterIncrease] = React.useState(null);

  const clickHandler = () => {
    if (isFilterIncrease === null) {
      setIsFilterIncrease(true);
      toggleActiveFilter({
        activeCellId: cellData.key,
        increase: true,
      });
    } else {
      setIsFilterIncrease(!isFilterIncrease);
      toggleActiveFilter({
        activeCellId: cellData.key,
        increase: !isFilterIncrease,
      });
    }
  };

  React.useEffect(() => {
    if (activeFilter.activeCellId !== cellData.key && isFilterIncrease !== null) {
      setIsFilterIncrease(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeFilter]);

  return (
    <FilterContext.Consumer>
    {() => (
      <div className={`header_cell ${cellData.cellClass}`} onClick={clickHandler}>
        <span>{cellData.label}</span>
        <span className='arrowBlock'>
          <span className={isFilterIncrease === true ? 'active' : 'disabled'}>
            <svg viewBox="0 0 1024 1024" focusable="false" width="1em" height="1em">
              <path d="M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z" />
            </svg>
          </span>
          <span className={isFilterIncrease === false ? 'active' : 'disabled'}>
            <svg viewBox="0 0 1024 1024" focusable="false" width="1em" height="1em">
              <path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z" />
            </svg>
          </span>
        </span>
      </div>
    )}
    </FilterContext.Consumer>
  );
};

export default HeaderCell;
