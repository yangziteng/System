import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let result = ["a","b","c"]
  return (
    <div className="App">
      <div>{result.map((e)=>{return e})}</div>
    </div>
  )
}

export default App
