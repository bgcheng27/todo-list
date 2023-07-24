import React from "react";
import ListItem from "./ListItem";

export default function TodoList({ todos }) {
  return (
    <div>
      <ul>
        {todos.map((todo) => {
          return <ListItem key={todo._id} text={todo.text} />
        })}
      </ul>
    </div>
  );
}
