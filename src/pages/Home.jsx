import { useEffect, useState } from "react";
import './Home.css'
import { MessageComp } from "../components/MessageComp";
import Icon from '../assets/icon.webp'

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
        <img src={Icon}
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
      <div className="verticalDiv" id="about-details">
        <div>
          <p>
          I’m currently a second-year Computer Science student at the University of the West Indies, building a strong foundation in programming and computer science fundamentals.
          </p>
          <p>
            When I’m not coding, I spend my free time playing video games, editing, and doing calisthenics.
          </p>
        </div>  

        <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>C++</li>
          <li>HTML & CSS</li>
          <li>Firebase Authentication</li>
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