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
      setItemList(() => {
        return data.items
      })
    }
    getItems();
  }, []);

  return (
    <>
      <Heading />
      <InputArea />
      <TodoList />
      <ul>
        {itemList.map((item) => {
          return (
            <li key={item._id}>{item.text}</li>
          )
        })}
      </ul>
    </>
  )
}