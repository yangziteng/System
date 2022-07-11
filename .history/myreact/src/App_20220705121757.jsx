import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let result = ["a","b","c"]
  //插入js
  return (
    <div className="App" onClick={console.log(333333)}> 
      <div>{result.map((e)=>{return e})}</div>
    </div>
  )
}

export default App
