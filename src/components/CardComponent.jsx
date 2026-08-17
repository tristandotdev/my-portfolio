import './Cards.css'
import gitIcon from "../assets/github.svg";
import youtubeIcon from "../assets/external-link.svg";
import { useState } from 'react';
import { useEffect } from 'react';

function CardComponent({ name , gitUrl , desc , imageUrl , tech , youtubeUrl }) {
  
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
          <div>
            <a 
            target="_blank" 
            href={gitUrl}>
            <img 
              style={{width: "36px", marginRight: "10px"}} 
              src={gitIcon}
              alt="GitHub Link" />
          </a>
          {youtubeUrl && <a 
            target="_blank" 
            href={youtubeUrl}>
            <img 
              style={{width: "36px"}} 
              src={youtubeIcon}
              alt="YouTube Link" />
          </a>}
          </div>
        </div>
        {imageUrl && <img style={{width: "100%"}} src={imageUrl}></img>}
        <p style={{marginBottom: "32px"}}>{desc}</p>
        <p
          style={{
            fontSize: "12px",
            fontStyle: "italic",
            color: "#2d3a1f6e"
          }}
        >{tech}</p>
      </div>
    </>
  )
  
}

export default CardComponent;