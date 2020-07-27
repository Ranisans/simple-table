import React from 'react';

import Spinner from '../Spinner';
import Container from '../Container';
import ErrorWindow from '../ErrorWindow';
import FilterContext from '../filterContext';
import ControlPanel from './ControlPanel';
import sorting from './sortingLogic';

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

  React.useEffect(() => {
    const updateDataset = (data) => {
      setActiveFilter(defaultFilterValue);
      setDataSet(data);
      setIsLoading(true);
    };
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

  const addRowCallback = (newRow) => {
    setIsLoading(false);
    const data = JSON.parse(JSON.stringify(dataSet));
    data.unshift(newRow);
    setDataSet(data);
    setIsLoading(true);
  };

  const applyFilter = (filterValue) => {
    console.log('applyFilter -> filterValue', filterValue);
  };

  return (
    <FilterContext.Provider
    value={{ activeFilter, toggleActiveFilter: setActiveFilter }}
    >
      <div className="application">
        <ControlPanel changeDatasetUrl={changeDatasetUrl} applyFilter={applyFilter} />
        { dataSetUrl
          ? <div>
            {isError && <ErrorWindow />}
            {!isLoading
              ? <Spinner />
              : <Container rowsData={dataSet} addRowCallback={addRowCallback} />
            }
          </div>
          : null
        }
      </div>
    </FilterContext.Provider>
  );
};

export default Application;
