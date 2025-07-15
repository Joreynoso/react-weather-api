import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// --> import components
import App from './App.jsx'

// --> import context
import { WeatherProvider } from './context/WeatherContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WeatherProvider>
      <App />
    </WeatherProvider>
  </StrictMode>
)
