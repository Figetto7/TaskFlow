import { Routes, Route } from "react-router-dom"
import AddTask from "../Modify&Tasks/AddTask/AddTask"
import Analytics from "../Analytics&Graphs/Analytics/Analytics"
import About from "../About&Info/About/About"
import Home from "../Home&LandPage/Home/Home"
import ModifyTasks from "../Modify&Tasks/ModifyTask/ModifyTasks"

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/AddTask" element={ <AddTask/> } />
        <Route path="/analytics" element={ <Analytics/> } />
        <Route path="/about" element={ <About/> } />
        <Route path="/ModifyTask" element={ <ModifyTasks/> } />
      </Routes>
    </div>
  )
}

