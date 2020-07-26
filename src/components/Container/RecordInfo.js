import React from 'react';

import './RecordInfo.scss';

const RecordInfo = ({ record }) => (
  <div className="record_box">
    <div>Выбран пользователь: <b>{`${record.firstName} ${record.lastName}`}</b></div>
    <div>
      <div>Описание:</div>
      <textarea className="record_box_description" value={record.description} readOnly>
      </textarea>
    </div>
    <div>Адрес проживания: <b>{record.address.streetAddress}</b></div>
    <div>Город: <b>{record.address.city}</b></div>
    <div>Провинция/штат: <b>{record.address.state}</b></div>
    <div>Индекс: <b>{record.address.zip}</b></div>
  </div>
);

export default RecordInfo;
