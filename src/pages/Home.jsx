import mailIcon from "../assets/mail.svg"
import checkIcon from "../assets/check.svg"
import { useEffect, useState } from "react";
import './Home.css'

function MessageComp() {
  return (
    <a 
      className="mailClass" 
      href="mailto:tristandepoosingh001@gmail.com">
      <img src={mailIcon} alt="Mail" style={{marginRight: "10px"}}/>  Message!
    </a>
  );
}

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
    <div className={!mobileMode ? "verticalDiv" : "horizontalDiv"} style={{minHeight: "calc(100vh - 140px)"}}>
      <div>
        <img src="https://avatars.githubusercontent.com/u/225940894?v=4"
        style={{width: "200px", borderRadius: "50%"}}></img>
      </div>
      <div>
        <div style={{display: "flex", alignItems: "center", justifySelf: mobileMode ? "center" : "left"}}>
          <h1 id="introHead" style={{ textAlign: mobileMode ? "center" : "left" }}>Hi, <span style={{color: "#867a5c"}}>Tristan</span> here! </h1> 
          {!mobileMode && <MessageComp/>}
        </div>
        
        <p id="introPara">Aspiring Software Engineer in Trinidad. Studying by day and building by night.</p>
        {mobileMode && <MessageComp/>}
        
      </div>
    </div>
    </>
  )
}

function AboutMe() {
  return(
    <>
      <div className="verticalDiv">
        <div>
          <h1 style={{justifySelf: "center"}}>About Me</h1>
          <p>I am currently a year 2 student at the University of The West Indies where I study Computer Science. On the side, I do my own projects with a touch of Graphic Design.</p>
          <p>Here are some of the technologies I work with:</p>
          <ul>
            <li>JavaScript ES6+</li>
            <li>C++</li>
            <li>React.js</li>
          </ul>
        </div>
        <div>
          <img src="https://media.tenor.com/oJKQsEPQrYIAAAAM/spongebob-spongebob-squarepants.gif" style={{width: "200px"}}></img>
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