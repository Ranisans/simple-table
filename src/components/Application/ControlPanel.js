import React from 'react';

import './ControlPanel.scss';
import { smaltDatasetUrl, bigDatasetUrl } from '../constants.json';

const ControlPanel = ({ changeDatasetUrl, applyFilter }) => {
  const [filterValue, setFilterValue] = React.useState('');

  const submitFilter = () => {
    applyFilter(filterValue);
  };

  return (
    <div className="control_panel">
      <button
        onClick={() => { changeDatasetUrl(smaltDatasetUrl); }}
        className="control_panel_button"
      >Small Dataset</button>
      <button
        onClick={() => { changeDatasetUrl(bigDatasetUrl); }}
        className="control_panel_button"
      >Big Dataset</button>
      <div className="filter_container">
        <label htmlFor="filter_field">Фильтр:</label>
        <input
          type="text"
          name="filter"
          id="filter_field"
          className="filter_container_input"
          value={filterValue}
          onChange={(e) => { setFilterValue(e.target.value); }}
          />
        <button
          className="control_panel_button"
          onClick={submitFilter}
          >Найти</button>
      </div>
    </div>
  );
};

export default ControlPanel;
