import CardComponent from "../components/CardComponent"
function Projects() {
  return (
    <>
    <div className="horizontalDiv" id="Projects">
      <h1 style={{marginBottom: "50px"}}>Projects</h1>
      <div className="verticalDiv" style={{maxWidth: "80%"}}>
        <CardComponent
          name="Schedule Scraper"
          gitUrl="https://github.com/tristandotdev/Scheduler"
          desc="Uses PDF.js to extract course data from the UWI timetables website"
          imageUrl=""
        />
        <CardComponent/>
      </div>
    </div>
    </>
  )
}

export default Projects