import mailIcon from "../assets/mail.svg"
import './Home.css'

function IntroCard() {
  return(
    <>
    <div className="verticalDiv">
      <div>
        <img src="https://avatars.githubusercontent.com/u/225940894?v=4"
        style={{width: "200px", borderRadius: "50%"}}></img>
      </div>
      <div>
        <h1>Hi, <span style={{color: "#867a5c"}}>Tristan</span> here!</h1>
        <p>Aspiring Software Engineer in Trinidad. Studying by day and building by night.</p>
        <a 
          className="mailClass" 
          href="mailto:tristandepoosingh001@gmail.com">
          <img src={mailIcon} alt="Mail" style={{marginRight: "10px"}}/>  Message!
        </a>
      </div>
    </div>
    </>
  )
}

function AboutMe() {
  return(
    <>
      <div className="verticalDiv">
        <h1>About Me</h1>
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