import { useEffect, useState } from "react";
import './Home.css'
import { MessageComp } from "../components/MessageComp";

function IntroCard() {
  const [mobileMode, setMobileMode] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setMobileMode(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return(
    <>
    <div className={!mobileMode ? "verticalDiv" : "horizontalDiv"} style={{minHeight: "calc(100vh)"}} id="Home">
      <div>
        <img src="https://avatars.githubusercontent.com/u/225940894?v=4"
        style={{width: "200px", borderRadius: "50%"}}></img>
      </div>
      <div>
        <div style={{display: "flex", alignItems: "center", justifySelf: mobileMode ? "center" : "left"}}>
          <h1 id="introHead" style={{ textAlign: mobileMode ? "center" : "left" }}>Hey, <span style={{color: "#867a5c"}}>Tristan</span> here! </h1> 
          {!mobileMode && <MessageComp/>}
        </div>
        
        <p id="introPara" style={{textAlign: mobileMode ? "center" : "left"}}>Computer Science student in Trinidad. Studying by day and building by night.</p>
        {mobileMode && (<div className="verticalDiv"><MessageComp/></div>)}
        
      </div>
    </div>
    </>
  )
}

function AboutMe() {
  return(
    <>
      <div className="horizontalDiv" style={{minHeight: "100vh"}} id="About">
      <h1 style={{justifySelf: "center"}}>Who am I?</h1>
      <div className="verticalDiv">
        <p style={{maxWidth: "70%"}}>I am currently a year 2 student at the University of The West Indies where I study Computer Science. On the side, I do my own projects with a touch of Graphic Design. In my freetime I play videogames, edit, and do calisthenics!</p>
        <ul>
          <li>JavaScript ES6+</li>
          <li>React.js</li>
          <li>C++</li>
          <li>HTML/CSS</li>
        </ul>
      </div>
    </div>
    </>
  )
}

function Home() {

  return (
  <>
    <IntroCard/>
    <AboutMe/>
  </>
  )
}

export default Home