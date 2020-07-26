import React from 'react';

import Spinner from '../Spinner';
import Container from '../Container';
import FilterContext from '../filterContext';
import sorting from './sortingLogic';

import { smaltDatasetUrl, bigDatasetUrl } from '../constants.json';

const Application = () => {
  const [dataSetUrl, setDataSetUrl] = React.useState('');
  const [dataSet, setDataSet] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);

  const defaultFilterValue = {
    activeCellId: '',
    increase: true,
  };

  const [activeFilter, setActiveFilter] = React.useState(
    defaultFilterValue,
  );

  const updateDataset = (data) => {
    setActiveFilter(defaultFilterValue);
    setDataSet(data);
    setIsLoading(true);
  };

  React.useEffect(() => {
    if (dataSetUrl !== '') {
      fetch(dataSetUrl)
        .then((response) => response.json())
        .then((data) => {
          updateDataset(data);
        })
        .catch(() => {
          setIsError(true);
        });
    }
  }, [dataSetUrl]);

  const changeDatasetUrl = (url) => {
    setIsLoading(false);
    setIsError(false);
    setDataSet([]);

    // otherwise, useEffect won't work
    setDataSetUrl('');
    setTimeout(() => {
      setDataSetUrl(url);
    });
  };

  React.useEffect(() => {
    if (activeFilter.activeCellId !== '') {
      setIsLoading(false);
      const data = sorting(dataSet, activeFilter.activeCellId, activeFilter.increase);
      setDataSet(data);
      setIsLoading(true);
    }
  }, [activeFilter]);

  return (
    <FilterContext.Provider
    value={{ activeFilter, toggleActiveFilter: setActiveFilter }}
    >
      <div className="application">
        <div className="application_control_panel">
          <button onClick={() => { changeDatasetUrl(smaltDatasetUrl); }}>Small Dataset</button>
          <button onClick={() => { changeDatasetUrl(bigDatasetUrl); }}>Big Dataset</button>
        </div>
        { dataSetUrl
          ? <div>
            {isError && <div>Something Went Wrong!</div>}
            {!isLoading ? <Spinner /> : <Container rowsData={dataSet} /> }
          </div>
          : null
        }
      </div>
    </FilterContext.Provider>
  );
};

export default Application;
