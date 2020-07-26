import React from 'react';

import VirtualTable from '../VirtualTable';
import RecordForm from '../RecordForm';
import FilterContext from '../filterContext';

import {
  recordPerPage, rowHeight, cellData, viewportHeight,
} from '../constants.json';

import './Container.scss';

const Container = ({ rowsData }) => {
  const pagesCount = Math.ceil(rowsData.length / recordPerPage);

  const [page, setPage] = React.useState(1);
  const [rowsChunk, setRowChunk] = React.useState(rowsData.slice(0, recordPerPage));
  const [activeFilter, setActiveFilter] = React.useState(
    {
      activeCellId: '',
      increase: true,
    },
  );

  const changePage = (direction) => {
    let newIndex = page + direction;
    if (newIndex > pagesCount) {
      newIndex = pagesCount || 1;
    } else if (newIndex <= 0) {
      newIndex = 1;
    }
    setPage(newIndex);
    setRowChunk(rowsData.slice(newIndex - 1, newIndex - 1 + recordPerPage));
  };

  const modalRecordForm = React.createRef();
  const showRecordForm = () => {
    modalRecordForm.current.classList.remove('hidden');
  };
  const hideRecordForm = () => {
    modalRecordForm.current.classList.add('hidden');
  };

  const createNewRecord = (data) => {
    modalRecordForm.current.classList.add('hidden');
    console.log(data);
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
        cellData={cellData}
      />
        <div className="control_panel">
          <label htmlFor="page_input" className="control_panel_label">Change Page</label>
          <button className="control_panel_button" onClick={() => { changePage(-1); }}>{'<<'}</button>
          <input id="page_input" type="number" className="control_panel_page_input" value={page} readOnly/>
          <button className="control_panel_button" onClick={() => { changePage(1); }}>{'>>'}</button>

          <button className="control_panel_add_record" onClick={showRecordForm}>Add Record</button>

          <div className="modal_form hidden" ref={modalRecordForm}>
            <div className="modal_form_container">
              <div className="close" onClick={hideRecordForm}></div>
              <p className="modal_form_title">Create New Record</p>
              <RecordForm callback={createNewRecord} />
            </div>
          </div>
        </div>
      </div>
    </FilterContext.Provider>
  );
};

export default Container;
