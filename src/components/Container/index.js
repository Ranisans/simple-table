import React from 'react';

import VirtualTable from '../VirtualTable';
import FilterContext from '../filterContext';
import tableCellData from '../tableCellData';

import {
  recordPerPage, rowHeight, keys, viewportHeight,
} from '../constants.json';

import './Container.scss';

const Container = ({ rowsData }) => {
  const pagesCount = Math.ceil(rowsData.length / recordPerPage);

  const [page, setPage] = React.useState(1);
  const [rowsChunk, setRowChunk] = React.useState(rowsData.slice(0, recordPerPage));
  const [activeFilter, setActiveFilter] = React.useState(
    {
      activeClassCell: '',
      increase: true,
    },
  );

  const changePage = (direction) => {
    let newIndex = page + direction;
    if (newIndex > pagesCount) {
      newIndex = pagesCount;
    } else if (newIndex <= 0) {
      newIndex = 1;
    }
    setPage(newIndex);
    setRowChunk(rowsData.slice(newIndex - 1, newIndex - 1 + recordPerPage));
  };

  return (
    <FilterContext.Provider
      value={{ activeFilter, toggleActiveFilter: setActiveFilter }}
    >
      <div className="table_container">
        <VirtualTable
        rowsData={rowsChunk}
        rowHeight={rowHeight}
        viewportHeight={viewportHeight}
        keys={keys}
        classList={tableCellData}
      />
        <div className="control_panel">
          <label htmlFor="page_input" className="control_panel_label">Change Page</label>
          <button className="control_panel_button" onClick={() => { changePage(-1); }}>{'<<'}</button>
          <input id="page_input" type="number" className="control_panel_page_input" value={page} readOnly/>
          <button className="control_panel_button" onClick={() => { changePage(1); }}>{'>>'}</button>
          <button className="control_panel_add_record">Add Record</button>
        </div>
      </div>
    </FilterContext.Provider>
  );
};

export default Container;
