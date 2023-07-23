import React from 'react'
import '../public/styles.css'

import Heading from './components/Heading'
import InputArea from './components/InputArea'
import TodoList from './components/TodoList'

export default function App() {
  return (
    <>
      <Heading />
      <InputArea />
      <TodoList />
    </>
  )
}