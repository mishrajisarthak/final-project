import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Toaster } from 'react-hot-toast'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { ImageProvider } from './context/ImageContext.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ImageProvider>
        <Toaster position="top-center" />
        <App />
      </ImageProvider>
    </BrowserRouter>
  </StrictMode>,
)