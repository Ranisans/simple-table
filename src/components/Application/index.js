import React from 'react';

import Spinner from '../Spinner';
import Container from '../Container';

import { smaltDatasetUrl, bigDatasetUrl } from '../constants.json';

const Application = () => {
  const [dataSetUrl, setDataSetUrl] = React.useState('');
  const [dataSet, setDataSet] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);

  React.useEffect(() => {
    if (dataSetUrl !== '') {
      fetch(dataSetUrl)
        .then((response) => response.json())
        .then((data) => {
          setDataSet(data);
          setIsLoading(true);
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

  return (
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
  );
};

export default Application;
