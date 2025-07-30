import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
   <div className="w-full h-screen duration-200" 
   style={{backgroundColor:color}}
   >
    <div className="fixed flex flex-wrap 
    justify-center bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center bg-white px-3 py-2 shadow-lg rounded-full gap-3">
        <button onClick={()=>setColor("red")}className="px-4 py-1 rounded-full text-white"
        style={{backgroundColor:"red"}}>red</button>
          <button onClick={()=>setColor("green")} className="px-4 py-1 rounded-full text-white"
        style={{backgroundColor:"green"}}>green</button>
          <button onClick={()=>setColor("blue")} className="px-4 py-1 rounded-full text-white"
        style={{backgroundColor:"blue"}}>blue</button>
      </div>
    </div>
   </div>
  )
}

export default App
