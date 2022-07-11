import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  console.log(count)
  console.log(setCount)
  return (
    <div className="App">
      <div>{["a","b","c"].map((e)=>{return e})}</div>
    </div>
  )
}

export default App
