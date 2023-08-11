import React, { useState, useEffect } from "react";
import subCss from "./Subreddits.module.css";
import { BeatLoader } from "react-spinners";
function Subreddits({ setSearchParams, setloading, searchParams }) {
  const [clickedIndex, setClickedIndex] = useState(null);
  const [loading, setLoading] = useState('true');
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, [searchParams]);
  const handleLiClick = (index, subreddit) => {
    setSearchParams(subreddit);
    setClickedIndex(index);
    setloading(true);
  };
  const CSSProperties = {
    margin: '0 auto',
    paddingBottom: '30px'
  };

  return (
    <div className={subCss.sub}>
      <h1>Subreddits</h1>
      {loading ? <BeatLoader
            size={15}
            color={"#3d5a80"}
            
            cssOverride={CSSProperties}
          /> :
        <ul className={subCss.ul}>
          <li
            onClick={() => handleLiClick(0, "home")}
            className={`liss ${clickedIndex === 0 ? "lone" : ""}`}
          >
            Home
          </li>
          <li
            onClick={() => handleLiClick(1, "popular")}
            className={`liss ${clickedIndex === 1 ? "lone" : ""}`}
          >
            Popular
          </li>
          <li
            onClick={() => handleLiClick(2, "askreddit")}
            className={`liss ${clickedIndex === 2 ? "lone" : ""}`}
          >
            AskReddit
          </li>
          <li
            onClick={() => handleLiClick(3, "games")}
            className={`liss ${clickedIndex === 3 ? "lone" : ""}`}
          >
            Games
          </li> <li
            onClick={() => handleLiClick(4, "Memes")}
            className={`liss ${clickedIndex === 4 ? "lone" : ""}`}
          >
            Memes
          </li> <li
            onClick={() => handleLiClick(5, "food")}
            className={`liss ${clickedIndex === 5 ? "lone" : ""}`}
          >
            Food
          </li>

          {/* Other li elements */}
        </ul>}
      <style>
        {`
          .liss.lone {
            border: 8px solid red;
            background-color: #3d5a80;
            transition: .5s;
          }

         

          .liss:hover {
            border: 1px solid gray;
          }
        `}
      </style>
    </div>
  );

}

export default Subreddits;
