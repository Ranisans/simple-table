import React from 'react';

import RecordInfo from './RecordInfo';

export default {
  title: 'Record Info',
  components: RecordInfo,
};

export const Base = () => {
  const testData = {
    id: 101,
    firstName: 'Sue',
    lastName: 'Corson',
    email: 'DWhalley@in.gov',
    phone: '(612)211-6296',
    address: {
      streetAddress: '9792 Mattis Ct',
      city: 'Waukesha',
      state: 'WI',
      zip: '22178',
    },
    description: 'et lacus magna dolor...',
  };

  return (
    <RecordInfo record={testData} />
  );
};
