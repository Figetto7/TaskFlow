import { Routes, Route } from "react-router-dom"
import AddTask from "../AddTask/AddTask"
import Analytics from "../Analytics/Analytics"
import About from "../About/About"
import Home from "../Home/Home"

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/AddTask" element={ <AddTask/> } />
        <Route path="/analytics" element={ <Analytics/> } />
        <Route path="/about" element={ <About/> } />
      </Routes>
    </div>
  )
}

