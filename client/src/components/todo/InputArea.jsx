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
    <form onSubmit={addItem}>
      <div className="input-group">
        <input className="form-control no-wrap fs-4" onChange={handleChange} placeholder="Enter a new task" name="itemText" type="text" value={inputText}/>
        <button className="btn btn-lg btn-primary" type="submit">Add</button>
      </div>
    </form>
  );
}
