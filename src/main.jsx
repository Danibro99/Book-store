import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'
import ShareContext from './contextAPI/ShareContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId='419800415160-ubod3vtitemqhfnpb0jduo7iiero3mdi.apps.googleusercontent.com'>
      <BrowserRouter>
        <ShareContext>
          <App />
        </ShareContext>
      </BrowserRouter>
    </GoogleOAuthProvider>
  </StrictMode>,
)
