import { BrowserRouter } from "react-router-dom"
import './App.css'
import Home from "./pages/Home"
import About from "./pages/About"
import Studies from "./pages/Studies"
import Mywork from "./pages/Mywork"
import Footer from "./pages/Footer"
import Contact from "./pages/Contact"

function App() {

  return (
    <BrowserRouter>
      <Home />
      <About />
      <Studies />
      <Mywork />
      <Contact />
      <Footer />
    </BrowserRouter>
  )
}

export default App
