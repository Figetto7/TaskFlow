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
      <div style={{ display: 'flex', minHeight: '100vh' }}>
        <SideBar />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <main style={{ flex: 1, padding: '20px' }}>
            <TaskContextProvider>
              <App />
            </TaskContextProvider>
          </main>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  </StrictMode>,
)