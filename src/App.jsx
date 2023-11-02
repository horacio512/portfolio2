import { BrowserRouter } from "react-router-dom"
import './App.css'
import Home from "./pages/Home"
import About from "./pages/About"
import Studies from "./pages/Studies"

function App() {

  return (
    <BrowserRouter>
      <Home />
      <About/>
      <Studies/>
    </BrowserRouter>
  )
}

export default App
