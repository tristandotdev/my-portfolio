import Home from "./pages/Home"
import Projects from "./pages/Projects"
import githubIcon from "./assets/github.svg"
import mailIcon from "./assets/mail.svg"
import linkedinIcon from "./assets/linkedin.svg"

function NavBar() {
  return(
    <nav>
      <div style={{gap: "35px", display: "flex"}}>
        <a href="#Home">Home</a>
        <a href="#About">About</a>
        <a href="#Projects">Projects</a>
      </div>
      <div style={{gap: "35px", display: "flex"}}>
        <a target="_blank" href="https://www.linkedin.com/in/tristan-depoosingh-8003b5379/"><img src={linkedinIcon}/></a>
        <a target="_blank" href="mailto:tristandepoosingh001@gmail.com"><img src={mailIcon}/></a>
        <a target="_blank" href="https://github.com/tristandotdev"><img src={githubIcon}/></a>
      </div>
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