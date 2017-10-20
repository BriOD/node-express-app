import React from 'react';

export default ({ input, label, placeholder, meta: { error, touched } }) => {
  return (
    <div>
      <label>{label}</label>
      <input
        className="tourneyForm"
        {...input}
        placeholder={placeholder}
        style={{ marginBottom: '5px' }}
      />
      <div className="error">{touched && error}</div>
    </div>
  );
};
