import React from 'react';

import '../../../public/form-styles.css';

export default function({ label, inputType }) {
  return (
    <div className="form-input">
      <label>{label}</label>
      <input type={inputType} />
      <br />
    </div>
  )
}