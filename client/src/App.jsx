import React, { useState, useEffect } from 'react'
import '../public/styles.css'

import Heading from './components/Heading'
import InputArea from './components/InputArea'
import TodoList from './components/TodoList'

export default function App() {
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    async function getItems() {
      const response = await fetch("http://localhost:3000/item")
      const data = await response.json()
      console.log(data.items)
      setItemList(() => {
        return data.items
      })
    }
    getItems();
  }, []);

  const addItem = async (newItemName) => {
    const data = await fetch("http://localhost:3000/item", {
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

  return (
    <>
      <Heading />
      <InputArea onAdd={addItem}/>
      <TodoList todos={itemList}/>
    </>
  )
}