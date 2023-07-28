import React from 'react';

import '../../../public/form-styles.css';

export default function({ label, inputType }) {
  return (
    <div className="form-input">
      <label className="form-label">{label}</label>
      <input className="form-control" type={inputType} />
      <br />
    </div>
  )
}