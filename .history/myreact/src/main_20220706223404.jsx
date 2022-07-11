import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LOG props = {"杨"}></LOG>
    <LOG props = {"林"}></LOG>
    <LOG  props = {"张"}></LOG>
    <App />

  </React.StrictMode>
)
