import React from 'react';

import RecordForm from './index';

export default {
  title: 'Record Form',
  component: RecordForm,
};

export const Default = () => {
  const setData = (data) => {
    // eslint-disable-next-line no-console
    console.log(data);
  };
  return (
    <RecordForm callback={setData} />
  );
};
