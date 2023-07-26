import React from "react";

export default function ListItem({ text, onDelete }) {

  const handleDelete = (event) => {
    event.preventDefault()
    onDelete()
  }

  return (
    <li className="list-group-item">
      <div className="container">
        <div className="row">
          <label className="col-10">
            <input className="form-check-input" type="checkbox" />
            <span className="mx-2" >{text}</span>
          </label>
          <button className="btn btn-sm btn-outline-danger col" onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </li>
  );
}
