import React, { useState } from 'react'

export default function InputArea({ onAdd }) {
  const [inputText, setInputText] = useState("");

  const handleChange = (event) => {
    setInputText(event.target.value)
  }

  const addItem = (event) => {
    event.preventDefault();

    if (inputText === "") return;

    onAdd(inputText);
    setInputText("");
  }
  
  return (
    <div className="input-group">
      <input className="form-control" onChange={handleChange} name="itemText" type="text" value={inputText}/>
      <span><button className="btn btn-primary" onClick={addItem}>Add</button></span>
    </div>
  );
}
