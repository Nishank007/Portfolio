import { Switch, Route } from "react-router";
import HomePage from "../../Layout/HomePage/HomePage";
import { Container } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import $ from "jquery";
import { Link } from "react-scroll";
import {NavLink} from "react-router-dom";

const NavMenuHandler = () => {
  const navBtns = document.querySelectorAll(".nav-btn");

  navBtns.forEach((ele) => {
    const dropDownMenu = document.getElementById("header-menu");

    ele.classList.toggle("active");
    dropDownMenu.classList.toggle("active");
  });
};

const Navigation = () => {
  // Get all the nav-btns in the page

  return (
    <>
      <div className="header header-fixed u-unselectable header-animated header-dark">
        <div className="header-brand">
          <div className="nav-item no-hover">
            <a>
              <h6 className="title">Nishanks Portfolio</h6>
            </a>
          </div>
          <div
            className="nav-item nav-btn"
            id="header-btn"
            onClick={NavMenuHandler}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="header-nav" id="header-menu">
          <div className="nav-left">
            <div className="nav-item text-center">
              <a  href="https://www.linkedin.com/in/nishankgujar/" target="_blank" rel="noreferrer">
                <span className="icon">
                  <i
                    className="fab fa-wrapper fa-linkedin"
                    aria-hidden="true"
                  ></i>
                </span>
              </a>
            </div>
            <div className="nav-item text-center">
              <a  href="mailto:ngg1756@mavs.uta.edu" target="_blank" rel="noreferrer">
                <span className="icon">
                  <i
                    className="fas fa-wrapper fa-envelope"
                    aria-hidden="true"
                  ></i>
                </span>
              </a>
            </div>
            <div className="nav-item text-center">
            <a href="https://github.com/Nishank007" target="_blank" rel="noreferrer">
                <span className="icon">
                  <i className="fab fa-wrapper fa-github" aria-hidden="true"></i>
                </span>
              </a>
            </div>
            <div className="nav-item has-sub toggle-hover" id="dropdown">
              <a className="nav-dropdown-link">About Me</a>
              <ul className="dropdown-menu dropdown-animated" role="menu">
                <li role="menu-item">
                <Link smooth={true} to="summary" className="nav-link" href="#">Summary</Link>
                </li>
                <li role="menu-item">
                <Link smooth={true} to="education" className="nav-link" href="#">Education</Link>
                </li>
                <li role="menu-item">
                <Link smooth={true} to="skills" className="nav-link" href="#">Skills</Link>
                </li>
                <li role="menu-item">
                <Link smooth={true} to="experience" className="nav-link" href="#">Experience</Link>
                </li>
                <li role="menu-item">
                <Link smooth={true} to="projects" className="nav-link" href="#">Projects</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="nav-right">
            <div className="nav-item active">
            <NavLink to="../assets/documents/titanic-nishank.html" className="nav-link">Term Project Tutorial</NavLink>
            </div>
            {/* <div className="nav-item">
            <Link smooth={true} to="contact" className="nav-link" href="#">Contact Me</Link>
            </div> */}
          </div>
        </div>
      </div>

      <Switch>
        <Route path = "/" component = {HomePage}></Route>
      </Switch>
    </>
  );
};

export default Navigation;