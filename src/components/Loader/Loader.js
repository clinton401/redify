import React from 'react';
import loadcss from './Loader.module.css';
import { IconContext } from "react-icons";
import { FaRedditAlien } from "react-icons/fa";

function Loader() {
  return (
      <div className={loadcss.load}>
          <div>
          <IconContext.Provider value={{ className: "reddit-icon red" }}>
              <FaRedditAlien />
          </IconContext.Provider>
              
          </div>
    </div>
  )
}

export default Loader
