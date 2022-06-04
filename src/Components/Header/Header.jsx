import "./header.css";
import Typical from "react-typical";
import { FaHamburger, FaBars } from "react-icons/fa";
import {
  BsFacebook,
  BsTwitter,
  BsGithub,
  BsLinkedin,
} from "react-icons/bs";
import { useState } from "react";

function Header() {
    // const [showMenu, setShowMenu] = useState[false]
  return (
    <div className="header" id="home">
      <nav>
        <div className="container nav__container">
          <h2 className="nav__logo">William<span className="brand__name">Dreams</span></h2>
          <ul className="nav__list">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#resume">Resume</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#contact">ContactMe</a>
            </li>
          </ul>
          <a href="#" className="nav__toggler">
            <FaBars />
          </a>
        </div>
      </nav>
      <div className="profile__container">
        <div className="social__icons">
            <a href="#" className="icon bs-fa">
                <BsFacebook />
            </a>
            <a href="#" className="icon bs-fa">
                <BsTwitter />
            </a>
            <a href="#" className="icon bs-fa">
                <BsLinkedin />
            </a>
            <a href="#" className="icon bs-fa">
                <BsGithub />
            </a>
        </div>
        <div className="profile__description">
          <p className="visitor__greetings">Hi, William Dreams here 👋</p>
          <div className="description__center typical">
            <Typical
              steps={[
                "Specialized in python",
                1000,
                "Build APIs with DRF",
                1000,
                "Dabbling with React",
                1000,
                "Database Designer",
                1000,
              ]}
              loop={Infinity}
            />
          </div>
          <div className="profile__btns">
            <a href="#" className="btn btn__orange">
              Hire Me
            </a>
            <a href="#" className="btn btn__outline__primary">
              Download Resume
            </a>
          </div>
        </div>
        <div className="profile__picture">
          <img src="profile_pic.jpg" alt="profile_picture" />
        </div>
      </div>
    </div>
  );
}

export default Header;
