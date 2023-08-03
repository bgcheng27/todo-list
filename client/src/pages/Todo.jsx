import React, { useState, useEffect } from 'react'

import Heading from '../components/todo/Heading'
import InputArea from '../components/todo/InputArea'
import TodoList from '../components/todo/TodoList'

export default function Todo({ user }) {
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/items")
      .then(response => response.json())
      .then(data => {
        return data.items.filter((item) => item.userId === user._id)
      })
      .then(newItems => setItemList(newItems));
  }, []);

  const addItem = async (newItemName) => {
    const data = await fetch("http://localhost:3000/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ itemText: newItemName, userId: user._id })
    })
    const content = await data.json();
    
    setItemList((prevList) => {
      return [...prevList, content]
    })
  }

  const deleteItem = async (id) => {
    await fetch(`http://localhost:3000/items/${id}`, {
      method: "DELETE"
    })

    setItemList((prevList) => {
      return prevList.filter((item) => {
        return item._id !== id;
      })
    })
  }

  return (
    <div className="todo-list container">
      <Heading />
      <InputArea onAdd={addItem}/>
      <TodoList todos={itemList} onDelete={deleteItem}/>
    </div>
  )
}