import React, { useState, useEffect } from 'react'
import '../../public/styles.css'
import '../../public/todo-styles.css'

import Heading from '../components/todo/Heading'
import InputArea from '../components/todo/InputArea'
import TodoList from '../components/todo/TodoList'

export default function Todo() {
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    async function getItems() {
      const response = await fetch("http://localhost:3000/items")
      const data = await response.json()
      setItemList(() => {
        return data.items
      })
    }
    getItems();
  }, []);

  const addItem = async (newItemName) => {
    const data = await fetch("http://localhost:3000/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ itemText: newItemName })
    })
    const content = await data.json();
    
    setItemList((prevList) => {
      return [...prevList, content]
    })
  }

  const deleteItem = async (id) => {
    await fetch(`http://localhost:3000/items/${id}`, {
      method: "Delete"
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