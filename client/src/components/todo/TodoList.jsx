import React from "react";
import ListItem from "./ListItem";

export default function TodoList({ todos, onDelete }) {
  return (
    <div>
      <ul className="list-group">
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
