import React from 'react';

import Row from './index';

import '../Table.scss';

import tableCellData from '../tableCellData';

export default {
  title: 'Row',
  component: Row,
};

const testRowData = {
  id: 348,
  firstName: 'Dung',
  lastName: 'Mccarley',
  email: 'RWieber@et.org',
  phone: '(755)790-2498',
  address: {
    streetAddress: '581 Lacus Ct', city: 'Litchfield Park', state: 'GA', zip: '68566',
  },
  description: 'egestas at massa quis tincidunt sed pulvinar vestibulum donec nec curabitur suspendisse lacus quis amet amet magna hendrerit eget etiam sollicitudin nec ipsum lorem nunc consequat molestie sit sapien pretium malesuada lacus',
};

const keys = ['id', 'firstName', 'lastName', 'email', 'phone'];

export const Base = () => (
  <Row rowData={testRowData} keys={keys} classList={tableCellData} />
);

export const TwoRows = () => (
  <div>
    <Row rowData={testRowData} keys={keys} classList={tableCellData} />
    <Row rowData={testRowData} keys={keys} classList={tableCellData} />
  </div>
);
