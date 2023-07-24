import React from "react";

export default function ListItem({ text }) {
  return (
    <li>
      <label>
        <input type="checkbox" />
        <span>{text}</span>
      </label>
      <button>Delete</button>
    </li>
  );
}
