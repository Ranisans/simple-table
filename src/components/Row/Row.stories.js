import React from 'react';

import Row from './index';

import '../Table.scss';

import {
  cellData,
} from '../constants.json';

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

export const Base = () => (
  <Row rowData={testRowData} cellData={cellData} />
);

export const TwoRows = () => (
  <div>
    <Row rowData={testRowData} cellData={cellData} />
    <Row rowData={testRowData} cellData={cellData} />
  </div>
);
