import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import LOG from './log'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LOG name = {"杨"}></LOG>
    <LOG name = {"林"}></LOG>
    <LOG  name = {"张"}></LOG>
    <App />

  </React.StrictMode>
)
