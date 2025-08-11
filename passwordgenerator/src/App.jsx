import { useState } from 'react'
import { useCallback,useEffect,useRef } from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const[numallowed, setNumallowed]=useState(false);
  const[charallowed, setCharallowed]=useState(false);
  const[password, setPassword]=useState("  ");
  const passwordRef =useRef(null)
  const passwordGenerator = useCallback(()=>{
    let pass=""
    let str="ABCDFEGHIJKLMNOPQRSTUVWXYZabcdefghijklmnpoqrstuvwxyz"
    if (numallowed) str += "0123456789"
     if (charallowed) str += "[/\|1&%*&$)*&^"
 
     for (let i = 0; i <=length; i++) {
        let char= Math.floor( Math.random() * str.length+1)
      pass += str.charAt(char)
     }
     setPassword(pass)
      
  }, [length,numallowed,charallowed, setPassword])
  const copy=useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])
   
   
  useEffect(()=>{
    passwordGenerator()

  },[length,numallowed,charallowed])
  return (
    <>
     <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-7 my-8
      text-orange-500 bg-gray-700">
        <h1 className="text-white text-center">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 ">
          <input 
          type="text"
          value={password}
          className="outline-none w-full px-3 py-1 " 
          placeholder="password"
          readOnly
          ref={passwordRef}
          />
          <button 
          onClick={copy}
          className=" outline-none shrink-0 bg-blue-300 text-white rounded px-2">copy</button>
        </div>
        
       
        
         <div className='flex item-center gap-x-1'>
          <input 
        type="range"
        min={8}
        max={100}
        value={length}
        className="cursor-pointer"
        onChange={(e)=>{setlength(e.target.value)}}
        />
         <label >length:{length}</label>
        <input
         type="checkbox"
          defaultChecked={numallowed} 
          id="nuberinput" 
          onChange={()=>{setNumallowed((prev)=>!prev)

          }}
         
          />
          <label >Number</label>
       
       <div className='flex text-sm gap-x-2'>
        <input
         type="checkbox"
          defaultChecked={charallowed} 
          id="nuberinput" 
          onChange={()=>{setCharallowed((prev)=>!prev)

          }}
         
          />
          <label >Character</label>
       </div>
      </div>
       </div>
      
    </>
  )
}

export default App
