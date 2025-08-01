import { useState } from 'react'
import {inputBox} from './Components'
import './App.css'
import useCurrencyinfo from './hooks/useCurrencyinfo'
function App() {
  const [amount, setAmount]=useCurrencyinfo(0)
  const [from, setFrome]=useState('usd')
  const [to, setTo]=useState("inr")
  const [convertedamoun, setConvertedamount]=useState(0)

  const currencyInfo = useCurrencyinfo(from)

  const object =Object.keys(currencyInfo)
  const swap=()=>{
    setFrome(to)
    setTo(from)
    setConvertedamount(amount)
    setAmount(convertedamoun)
  }
  const convert = ()=>{
    setConvertedamount(amount * currencyInfo[to])
  }
 return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://www.pexels.com/photo/brunette-woman-on-a-field-during-sunset-22632047/}')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                           convert()
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOption={option}
                                onCurrencyChange={(currency)=>{setAmount(amount)}}
                                selectCurrency={from}
                                onAmountChange={(amount)=>setAmount(amount)}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}

                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                               label="to"
                                amount={convertedamoun}
                                currencyOption={option}
                                onCurrencyChange={(currency)=>setTo(currency)}
                                selectCurrency={from}
                                amountdisable
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from.toUpperCase()} to {to.toUpperCase
                            }
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App
