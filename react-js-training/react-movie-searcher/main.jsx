import { createRoot } from 'react-dom/client'
import React from 'react'
import { App } from './src/App'
import './style.css'

createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
