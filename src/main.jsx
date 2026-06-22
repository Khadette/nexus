import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// Keep the splash screen visible for at least 1.2s so it's actually
// seen, even though this app's mock data renders almost instantly.
const MIN_VISIBLE_MS = 1200
const initialLoader = document.getElementById('initial-loader')

if (initialLoader) {
  setTimeout(() => {
    initialLoader.classList.add('is-hidden')
    initialLoader.addEventListener('transitionend', () => initialLoader.remove())
  }, MIN_VISIBLE_MS)
}