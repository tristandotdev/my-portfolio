import CardComponent from "../components/CardComponent"
function Projects() {
  return (
    <>
    <div className="horizontalDiv" id="Projects">
      <h1 style={{marginBottom: "50px"}}>Projects</h1>
      <div className="verticalDiv" style={{maxWidth: "80%"}}>
        <CardComponent
          name="John"
          gitUrl="fioeansduoifhsf"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, nisi deleniti suscipit ab sed omnis sit blanditiis consequuntur accusamus dignissimos amet, harum error qui quisquam voluptatem at officia quo impedit."
        />
        <CardComponent/>
      </div>
    </div>
    </>
  )
}

export default Projects