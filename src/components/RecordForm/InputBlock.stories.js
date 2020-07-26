import React from 'react';

import InputBlock from './InputBlock';

import './RecordForm.scss';

const inputClass = ['record_form_first_name', 'record_form_last_name'];

export default {
  title: 'Input Block',
  component: InputBlock,
};

export const Base = () => {
  const [value, setValue] = React.useState('');
  const title = 'Test Title';
  return (
    <InputBlock
      title={title}
      value={value}
      callback={setValue}
      inputClass={inputClass[0]}
    />
  );
};

export const TwoInput = () => {
  const [value1, setValue1] = React.useState('');
  const [value2, setValue2] = React.useState('');
  const titles = ['Test Title1', 'Test Title2'];
  return (
    <div style={{ display: 'flex' }}>
      <InputBlock
      title={titles[0]}
      value={value1}
      callback={setValue1}
      inputClass={inputClass[0]}
    />
    <InputBlock
      title={titles[1]}
      value={value2}
      callback={setValue2}
      inputClass={inputClass[1]}
    />
    </div>
  );
};
