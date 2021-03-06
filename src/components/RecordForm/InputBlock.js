import React from 'react';

import './InputBlock.scss';

const InputBlock = ({
  title, value, callback, inputClass, placeholder,
}) => (
  <div className={`input_block ${inputClass}`}>
    <label htmlFor="">{title}</label>
    <input type="text" placeholder={placeholder} value={value} onChange={(e) => { callback(e.target.value); }} required/>
  </div>
);

export default InputBlock;
