import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import SideBar from "./SideBar/SideBar"
import Footer from "./Footer/Footer"
import App from './App/App'
import TaskContextProvider from "./TaskContext"
import './App/App.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <SideBar />
      <div style={{ 
        marginLeft: '280px', // Compensa la larghezza della sidebar fissa
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <main style={{ flex: 1, padding: '20px' }}>
          <TaskContextProvider>
            <App />
          </TaskContextProvider>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  </StrictMode>,
)