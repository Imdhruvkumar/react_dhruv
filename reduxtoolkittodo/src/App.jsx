import { useState } from 'react'
import Todos from './components/Todos'
import './App.css'
import AddTodo from './components/AddTodo'

function App() {
  const [count, setCount] = useState(0)

  return (
    < >
    <div className='bg-grey-600'>  <h1>learn about redux toolkit</h1>
      <AddTodo/>
      <Todos/>
      </div>
    </>
  )
}

export default App
