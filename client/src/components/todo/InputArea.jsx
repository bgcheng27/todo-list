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
    <div>
      <input onChange={handleChange} name="itemText" type="text" value={inputText}/>
      <button onClick={addItem}>Add</button>
    </div>
  );
}
