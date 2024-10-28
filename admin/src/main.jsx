
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './pages/AuthContext.jsx'

createRoot(document.getElementById('root')).render(

  <BrowserRouter>
  <AuthProvider>

    <App />
    </AuthProvider>
 
  </BrowserRouter>
)
