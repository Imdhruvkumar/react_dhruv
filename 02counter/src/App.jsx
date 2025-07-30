import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter]= useState(5)

let addValue=()=>{
      console.log('added',counter);
      // counter = counter+1;
     
      setCounter(counter+1)
       if(counter>=20){setCounter(counter-1)}
  }
  let removevalue=()=>{
   
            setCounter(counter-1)
              if(counter<=0){setCounter(counter+1)}
  }

  return (
    <>
      <h1>Dhruv kumar</h1>
      <h2>counter value : {counter}</h2>
      <button
      onClick={addValue}
      > Add {counter} </ button>
      <button
      
      onClick={removevalue}
      > remove value {counter}</ button>
    </>
  )
}

export default App
