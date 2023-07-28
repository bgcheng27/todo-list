import React from "react";

export default function ListItem({ text, onDelete }) {

  const handleDelete = (event) => {
    event.preventDefault()
    onDelete()
  }

  return (
    <li className="list-group-item">
      <div className="d-flex">
        <label className="flex-grow-1">
          <input type="checkbox" />
          <span className="mx-3 fs-4">{text}</span>
        </label>
        <button className="btn btn-md btn-outline-danger" onClick={handleDelete}>Delete</button>
      </div>
    </li>
  );
}
