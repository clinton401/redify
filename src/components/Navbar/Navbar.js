import React, { useRef, useState } from "react";
import NavCss from "./Navbar.module.css";
import { IconContext } from "react-icons";
import { FaRedditAlien } from "react-icons/fa";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Navbar({ searchParams, setSearchParams, setloading }) {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const searchFocus = () => {
    if (inputValue.length < 1) {
      inputRef.current.focus();
    } else {
      setSearchParams(inputValue);
      setloading(true);
    }
  };

  // useEffect(() => {
  //   const handleClick = (event) => {
  //     if (isOpen && !event.target.closest(".menu-button")) {
  //       closeMenu();
  //     }
  //   };

  //   window.addEventListener("click", handleClick);

  //   return () => {
  //     window.removeEventListener("click", handleClick);
  //   };
  // }, [isOpen]);

  return (
    <nav className={NavCss.navcontent}>
      <nav className={NavCss.head}>
        <div className={NavCss.div1}>
          <IconContext.Provider value={{ className: "reddit-icon" }}>
            <FaRedditAlien />
          </IconContext.Provider>
          <h1>Redify</h1>
        </div>
        <div className={NavCss.div2}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSearchParams(inputValue);
              setloading(true);
            }}
          >
            <input
              type="text"
              onChange={(e) => setInputValue(e.target.value)}
              ref={inputRef}
            />
          </form>
          <FontAwesomeIcon
            icon={faSearch}
            className={NavCss.search}
            onClick={searchFocus}
          />
        </div>
      </nav>
      <div className={NavCss.mobile}>
        <div className={NavCss.div1}>
          <IconContext.Provider value={{ className: "reddit-icon" }}>
            <FaRedditAlien />
          </IconContext.Provider>
          <h1>Redify</h1>
        </div>
        <div className={NavCss.me}>
          <div className={`menu-button ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
        <div className={`menu-content ${isOpen ? "open" : ""}`} >
          <div className={NavCss.undermenu}>
            <div className={NavCss.hamsearch}>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSearchParams(inputValue);
                  setloading(true);
                  
                  closeMenu()
                }}
              >
                <input
                  type="text"
                  onChange={(e) => setInputValue(e.target.value)}
                  ref={inputRef}
                />
              </form>
              <FontAwesomeIcon
                icon={faSearch}
                className={NavCss.search}
                onClick={() => {
                  searchFocus()
                  if (inputValue.length > 1) {
                    closeMenu()
                  }
                }}
              />
            </div>

          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
