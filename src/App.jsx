import { useState } from 'react'
import useCurrencyInfo from "./hooks/useCurrencyInfo"
import InputBox from './components/InputBox'
import './App.css'

export default function App() {

  const [from, setFrom] = useState("usd") //label of input box
  const [to, setTo] = useState("inr") //label of input box

  const [amount, setAmount] =useState() //amount entered in from input box
  const [convertedAmount, setConvertedAmount] = useState() //converted amount shown in to input box 

  
  const currencyInfo = useCurrencyInfo(from) //sends the from value given by user and gets the converted data in all currencies
  
  const convert = () =>{
    setConvertedAmount(amount * currencyInfo[to])//here amount is converted in "to" currency
  }

  const options = Object.keys(currencyInfo) //extracting only key values from data recevied from currencyInfo

  //function for swap button
  const swap =() =>{
    setFrom(to)
    setTo(from)
    setAmount(convertedAmount)
    setConvertedAmount(amount)
  }
  
  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('https://img.freepik.com/premium-vector/money-transfer-global-currency-stock-exchange-stock-vector-illustration_115579-1490.jpg?w=996')`,
      }}
    >
        <div className="m-2">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-8 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert();
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            onAmountChange={(amount) => setAmount(amount)}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setFrom(currency)}
                            selectCurrency={from}
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
                            label="To"
                            amount={convertedAmount}
                            // onAmountChange will we not used
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setTo(currency)}
                            selectCurrency={to}
                            
                            
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
)
}


