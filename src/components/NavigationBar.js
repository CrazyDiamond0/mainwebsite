import React from "react";
import { useState, useEffect } from "react";
import logo from "../resources/mainpicture.jpg";
import "../index.css";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function NavigationBar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const onClick = () => {
    setVisible(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      // find current scroll position
      const currentScrollPos = window.pageYOffset;

      // set state based on location info (explained in more detail below)
      if (currentScrollPos === 0) {
        setVisible(true);
      } else {
        setVisible(false);
      }
      // set state to new scroll position
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, visible]);

  return (
    <nav
      style={{ top: visible ? "0" : "-80px" }}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => {
        if (window.pageYOffset !== 0) {
          setVisible(false);
        }
      }}
      className="navbar navbar-expand-lg navbar-light  fixed-top"
    >
      <div className="container">
        <motion.div animate={{ scale: [0, 1.2, 1] }}>
          <a className="navbar-brand" href="#top">
            <img className="logo" src={logo} alt="...logo" />
          </a>
        </motion.div>
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon
            icon={faBars}
            className="navbar-toggler-icon"
          ></FontAwesomeIcon>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#home">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" onClick={() => onClick()} href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                onClick={() => onClick()}
                href="#projects"
              >
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => onClick()} href="#contact">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/resume.pdf" download>
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-hover-hidden"></div>
    </nav>
  );
}
