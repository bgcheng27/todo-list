import React from "react";

export default function ListItem({ text, onDelete }) {

  const handleDelete = (event) => {
    event.preventDefault()
    onDelete()
  }

  return (
    <li>
      <label>
        <input type="checkbox" />
        <span>{text}</span>
      </label>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}
