import React from 'react';

import Container from './index';

import testData from '../VirtualTable/testData';

export default {
  title: 'Container',
  component: Container,
};

export const Base = () => (
  <Container rowsData={testData} />
);
