import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import LOG from './log'
import './index.css'
import Login from "./pages/Login/Login"
const p = {name:"杨",age:12}
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* //解构赋值 语法 */}
    <LOG {...p}></LOG> 
    <LOG name = {"林"} age={14}></LOG>
    <LOG  name = {"张"} age={15}></LOG>
    <Login/>
    <App />

  </React.StrictMode>
)
