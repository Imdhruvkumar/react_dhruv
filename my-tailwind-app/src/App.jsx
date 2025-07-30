import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./components/Card.jsx";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <h1 className = "bg-green-400 text-black p-4 rounded-xl mb-2">dhruv kumar</h1>
    <Card username="dhruv kumar"/>
     <Card username="dhruv kumar"/>
    </>
  )
}

export default App
