import React, { useState, useEffect } from 'react'
import '../public/styles.css'

import Heading from './components/Heading'
import InputArea from './components/InputArea'
import TodoList from './components/TodoList'

export default function App() {
  const [itemList, setItemList] = useState([{}]);

  useEffect(async () => {
    const response = await fetch("http://localhost:3000/item")
    const items = response.json()
    console.log(items);
    setItemList(items)
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