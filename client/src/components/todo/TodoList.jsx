import React from "react";
import ListItem from "./ListItem";

export default function TodoList({ todos, onDelete }) {
  return (
    <div>
      <ul className="list-group">
        {todos.length === 0 && <li className="list-group-item fs-5">No items yet...</li>}
        {todos.map((todo) => {
          return (
            <ListItem
              key={todo._id}
              text={todo.text}
              onDelete={() => {
                onDelete(todo._id);
              }}
            />
          );
        })}
      </ul>
    </div>
  );
}
