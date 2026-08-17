import Home from "./pages/Home"
import Projects from "./pages/Projects"
import githubIcon from "./assets/github.svg"
import mailIcon from "./assets/mail.svg"
import linkedinIcon from "./assets/linkedin.svg"
import menuIcon from "./assets/menu.svg";
import { useState } from "react"
import { useEffect } from "react"

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

function HamburgerBar({ setIsOpen }) {
  function handleClick() {
    setIsOpen(prev => !prev);
  }
  
  return(
    <div className="hamburgerMenu">
      <ul style={{listStyle: "none"}}>
        <li onClick={handleClick} className="hamList"><a href="#Home">Home</a></li>
        <li onClick={handleClick} className="hamList"><a href="#About">About</a></li>
        <li onClick={handleClick} className="hamList"><a href="#Projects">Projects</a></li>
      </ul>
    </div>
  )
}

function SideBar({isOpen, setIsOpen}) {
  function handleClick() {
    setIsOpen(prev => !prev);
  }

  return(
  <nav style={{paddingLeft: "25px", paddingRight: "25px"}} className={isOpen ? "nav-open" : ""}>
    <div style={{display: "flex"}}>
      <a onClick={handleClick}><img src={menuIcon}></img></a>
    </div>
    <div style={{gap: "35px", display: "flex"}}>
        <a target="_blank" href="https://www.linkedin.com/in/tristan-depoosingh-8003b5379/"><img src={linkedinIcon}/></a>
        <a target="_blank" href="mailto:tristandepoosingh001@gmail.com"><img src={mailIcon}/></a>
        <a target="_blank" href="https://github.com/tristandotdev"><img src={githubIcon}/></a>
    </div>
    {isOpen && <HamburgerBar setIsOpen={setIsOpen}/>}
  </nav>
  )
}

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileMode, setMobileMode] = useState(window.innerWidth < 768);
  
    useEffect(() => {
      const handleResize = () => {
        setMobileMode(window.innerWidth < 768);
      };
  
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

  return (
    <>
      {!mobileMode ? <NavBar/> : <SideBar isOpen={isOpen} setIsOpen={setIsOpen}/>}
      <Home/>
      <Projects/>
    </>
  )
}

export default App