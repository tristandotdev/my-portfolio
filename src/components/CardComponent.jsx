import './Cards.css'
import { useState } from 'react';
import { useEffect } from 'react';

function CardComponent({ name , gitUrl , desc , imageUrl }) {
  
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
      <div className="cardDiv">
        <div className='verticalDiv' style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0",
          margin: "0",
          marginBottom: "10px"
        }}>
          <h1 style={{fontSize: !mobileMode ? "42px" : "24px", margin: "0px"}}>{name}</h1>
          <a 
            target="_blank" 
            href={gitUrl}>
            <img 
              style={{width: "36px"}} 
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png" 
              alt="GitHub Link" />
          </a>
        </div>
        {imageUrl && <img style={{width: "100%"}} src={imageUrl}></img>}
        <p>{desc}</p>
      </div>
    </>
  )
  
}

export default CardComponent;