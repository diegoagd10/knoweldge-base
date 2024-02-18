import React from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import { FiltersProvider } from './context/filters'
import './assets/index.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FiltersProvider>
      <App />
    </FiltersProvider>
  </React.StrictMode>)
