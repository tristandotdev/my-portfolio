import './Cards.css'

function CardComponent({ name , gitUrl , desc , imageUrl }) {
  return(
    <>
      <div className="cardDiv">
        <div className='verticalDiv' style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0",
          margin: "0"
        }}>
          <h1>{name}</h1>
          <a href={gitUrl}><img style={{width: "32px"}} src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub Link" /></a>
        </div>
        {imageUrl && <img src={imageUrl}></img>}
        <p>{desc}</p>
      </div>
    </>
  )
  
}

export default CardComponent;