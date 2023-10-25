import { BrowserRouter } from "react-router-dom"
import './App.css'
import Home from "./pages/Home"
import About from "./pages/About"

function App() {

  return (
    <BrowserRouter>
      <Home />
      <About/>
    </BrowserRouter>
  )
}

export default App
