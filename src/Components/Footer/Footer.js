import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  RedditShareButton,
  RedditIcon,
  LinkedinShareButton,
  LinkedinIcon
} from "react-share";
import {Container} from '@material-ui/core'
import './Footer.css';
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <Container maxWidth = "xl">
    <hr></hr>
    <div className="footer" style = {{background:'transparent'}}>
        <div className="row">
          <div className="col">
            <div className="d-flex">
              <p>848 W Mitchell St</p>
            </div>
            <div className="d-flex">
              <a href="tel:555-555-555">+1 (682) 298-6287</a>
            </div>
            <div className="d-flex">
              <p>ngg1756@mavs.uta.edu</p>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <div className="col">
              <Link smooth={true} to="particles-js" className="nav-link" href="#">Home</Link>
                <br />
                <Link smooth={true} to="summary" className="nav-link" href="#">Biography</Link>
                <br />
                <Link smooth={true} to="education" className="nav-link" href="#">Education</Link>
                <br />
                <Link smooth={true} to="projects" className="nav-link" href="#">Projects</Link>
              </div>
              
              <div className="col">
              <Link smooth={true} to="skills" className="nav-link" href="#">Skills</Link>
                <br />
                <Link smooth={true} to="experience" className="nav-link" href="#">Experience</Link>
                <br />
                <Link smooth={true} to="contact" className="nav-link" href="#">Contact Me</Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="d-flex justify-content-center">
              <FacebookShareButton
                url={"https://nishankg.netlify.app/"}
                quote={"FullStack Developer"}
                hashtag="#javascript"
              >
                <FacebookIcon className="mx-3" size={36} />
              </FacebookShareButton>
              <TwitterShareButton
                url={"https://nishankg.netlify.app/"}
                quote={"FullStack Developer"}
                hashtag="#javascript"
              >
                <TwitterIcon className="mx-3" size={36} />
              </TwitterShareButton>
              <RedditShareButton
                url={"https://nishankg.netlify.app/"}
                quote={"FullStack Developer"}
                hashtag="#javascript"
              >
                <RedditIcon className="mx-3" size={36} />
              </RedditShareButton>
              <LinkedinShareButton
                url={"https://nishankg.netlify.app/"}
                quote={"FullStack Developer"}
                hashtag="#javascript"
              >
                <LinkedinIcon className="mx-3" size={36} />
              </LinkedinShareButton>
            </div>
            <p className="pt-3 text-center">
              Copyright&copy;
              {new Date().getFullYear()}&nbsp;Nishank Gujar | Built with React JS
            </p>
          </div>
        </div>
     
    </div>
    </Container>

 
  )
}

export default Footer;
