import Home from "./pages/Home"
import Projects from "./pages/Projects"

function NavBar() {
  return(
    <nav>
      <a href="#Home">Home</a>
      <a href="#About">About</a>
      <a href="#Projects">Projects</a>
      <a href="#Contact">Contact</a>
    </nav>
  )
}

function App() {
  return (
    <>
    <NavBar/>
    <Home/>
    <Projects/>
    </>
  )
}

export default App