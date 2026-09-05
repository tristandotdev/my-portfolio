import CardComponent from "../components/CardComponent"
function Projects() {
  return (
    <>
    <div className="horizontalDiv" id="Projects" style={{height: "75vh"}}>
      <h1 style={{marginBottom: "50px"}}>Projects</h1>
      <div className="verticalDiv" id="project-cards">
        <CardComponent
          name="Schedule Scraper"
          gitUrl="https://github.com/tristandotdev/Scheduler"
          desc="Uses PDF.js to extract course data from the UWI timetables website."
          imageUrl=""
          tech="HTML/CSS, JavaScript, PDF.js"
        />
        <CardComponent
          name="Deadlock Builder"
          gitUrl="https://github.com/i-use-mint-btw/info1601a3"
          youtubeUrl="https://youtu.be/998j2pK5Ews"
          desc="Allows users to create their own Deadlock builds utilizing Firebase as a backend."
          imageUrl=""
          tech="HTML/CSS, JavaScript, Firebase Authentication"
        />
        <CardComponent
          name="Portfolio Site"
          gitUrl="https://github.com/tristandotdev/my-portfolio"
          desc="What you're currently on! Built from scratch using React."
          tech="HTML/CSS, React"
        />
      </div>
    </div>
    </>
  )
}

export default Projects