import React, {useEffect, useState} from 'react';
import loadcss from './Loader.module.css';
import { IconContext } from "react-icons";
import { FaRedditAlien } from "react-icons/fa";
import { BeatLoader } from "react-spinners";

function Loader() {
  const [loading, setloading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setloading(false)
    }, 2800);
  }, [])
  const CSSProperties = {
    // position: "absolute",
    // top: "40%",
    marginTop: '20px',
    marginRight: '10px',
    // border: '1px solid black'
    
  };
  return (
      <div className={loadcss.load}>
      <div>
       
        
          <IconContext.Provider value={{ className: "reddit-icon red" }}>
              <FaRedditAlien />
          </IconContext.Provider>
        {loading ? <BeatLoader
          size={15}
          color={"white"}

          cssOverride={CSSProperties}
        /> : null}
          </div>
    </div>
  )
}

export default Loader
