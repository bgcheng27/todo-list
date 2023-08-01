import React, { useState } from 'react';

export default function({ label, inputType, name, value, onChange}) {
  return (
    <div className="form-input">
      <label className="form-label">{label}</label>
      <input onChange={onChange} className="form-control" type={inputType} name={name} value={value}/>
      <br />
    </div>
  )
}