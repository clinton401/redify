import React, { useEffect, useState } from "react";
import ContentCss from "./Content.module.css";
import { BeatLoader } from "react-spinners";
import {
  faArrowUp,
  faArrowDown,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { faComments } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Subreddits from "../Subreddits/Subreddits";

function Content({ data, setSearchParams, loading, setloading, searchParams }) {
  const [clickedIndexes, setClickedIndexes] = useState([]);
  const [likesCounts, setLikesCounts] = useState([]);
  const [dts, setDts] = useState();

  useEffect(() => {
    setTimeout(() => {
      setloading(false);
      setDts(data)
    }, 3000);
  }, [data, setloading]);
  console.log(dts);
  const clickHandler = (index) => {
    if (clickedIndexes.includes(index)) {
      setClickedIndexes(clickedIndexes.filter((item) => item !== index));
    } else {
      setClickedIndexes([...clickedIndexes, index]);
    }
  };

  const toggleLikeCount = (index, currentCount) => {
    if (clickedIndexes.includes(index)) {
      return likesCounts[index];
    }
    return currentCount;
  };

  const CSSProperties = {
    // position: "absolute",
    // top: "40%",
    marginTop: '50px'
  };

  return (
    <div className={ContentCss.content}>
      <div className={ContentCss.uls} id='uls'>
        {loading ? (
          <BeatLoader
            size={30}
            color={"#3d5a80"}
            className={ContentCss.loader}
            cssOverride={CSSProperties}
          />
        ) : (
          data.map((p, index) => (
            <ul key={index}>
              <div className={ContentCss.views}>
                <div>
                  <FontAwesomeIcon icon={faArrowUp}  />
                  <p>{p.data.upvote_ratio}K</p>
                  <FontAwesomeIcon icon={faArrowDown}  />
                </div>
                <h4>{p.data.title}</h4>
              </div>
              <img src={p.data.url} alt="" />
              <div className={ContentCss.bimage}>
                {/* <div className={ContentCss.emptydiv}></div> */}
                <div>
                  <FontAwesomeIcon
                    icon={faHeart}
                    className={`Heart ${
                      clickedIndexes.includes(index) ? "active" : ""
                    }`}
                    onClick={() => {
                      clickHandler(index);
                      setLikesCounts([
                        ...likesCounts.slice(0, index),
                        p.data.ups + (clickedIndexes.includes(index) ? 0 : 1),
                        ...likesCounts.slice(index + 1),
                      ]);
                    }}
                    id='heart'
                  />
                  {toggleLikeCount(index, p.data.ups)}
                </div>
                <div>
                  <FontAwesomeIcon
                    icon={faComments}
                    className={ContentCss.Comment}
                  />
                  {p.data.num_comments}
                </div>
              </div>
            </ul>
          ))
        )}
      </div>
      <div className={ContentCss.sub}>
        <Subreddits setSearchParams={setSearchParams} setloading={setloading} searchParams={searchParams} />
      </div>
      <style>
        {`
          .Heart {
            font-size: 20px;
            padding-right: 5px;
            color: #3d5a80;
            cursor: pointer;
            transition: color 0.3s;
          }
          .Heart.active {
            color: red;
          }
        `}
      </style>
    </div>
  );
}

export default Content;
