import React from 'react';
import InputBlock from './InputBlock';

const RecordForm = ({ callback }) => {
  const [id, setId] = React.useState('');
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [isFormFilled, setIsFormFilled] = React.useState(false);

  const submitHandle = (e) => {
    if (id && firstName && lastName && email && phone) {
      e.preventDefault();
      callback({
        id,
        firstName,
        lastName,
        email,
        phone,
        address: {
          streetAddress: '',
          city: '',
          state: '',
          zip: '',
        },
      });
    }
  };

  React.useEffect(() => {
    if (id && firstName && lastName && email && phone) {
      setIsFormFilled(true);
    }
  }, [id, firstName, lastName, email, phone]);

  return (
    <div className="record_form">
      <form>
        <div className="form_container">
          <InputBlock
            title="Id"
            value={id}
            callback={setId}
            inputClass="record_form_id"
            placeholder="123"
          />
          <InputBlock
            title="First Name"
            value={firstName}
            callback={setFirstName}
            inputClass="record_form_first_name"
            placeholder="First Name"
          />
          <InputBlock
            title="Last Name"
            value={lastName}
            callback={setLastName}
            inputClass="record_form_last_name"
            placeholder="Last Name"
          />
          <InputBlock
            title="Email"
            value={email}
            callback={setEmail}
            inputClass="record_form_email"
            placeholder="asdasd@inbox.com"
          />
          <InputBlock
            title="Phone"
            value={phone}
            callback={setPhone}
            inputClass="record_form_phone"
            placeholder="8-800-555-35-35"
          />
        </div>
        <button className="record_form_submit" onClick={submitHandle} disabled={!isFormFilled}>Добавить в таблицу</button>
      </form>
    </div>
  );
};

export default RecordForm;
