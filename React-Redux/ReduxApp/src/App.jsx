import { useState } from 'react'
import './App.css'
import AddTodo from './ToDoApp/Components/AddTodo'
import Todos from './ToDoApp/Components/Todos'
import Counter from "./CounterApp/Counter"

function App() {
  return (
    <>
      <div>
        {/* <AddTodo />
        <Todos /> */}

        <Counter />
      </div>

    </>
  )
}

export default App
