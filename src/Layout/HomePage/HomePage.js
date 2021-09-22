import { Container } from "@material-ui/core";
import React, { Component } from "react";
import Header from "../../Components/Header/Header";
import Particles from "react-particles-js";
import "./HomePage.css";
import Summary from "../../Components/Summary/Summary";
import Education from "../../Components/Education/Education";
import Skills from "../../Components/Skills/Skills";
import Experience from "../../Components/Experience/Experience";
import Projects from "../../Components/Projects/Projects";
// import Contact from "../../Components/Contact/Contact";
import Footer from "../../Components/Footer/Footer";

class HomePage extends Component {
  render() {
    return (
      <div className = "homepage">
        <Header />
        <Summary />
        <Education />
        <Skills/>
        <Experience/>
        <Projects/>
        {/* <Contact/> */}
        <Footer/>
      </div>
    );
  }
}

export default HomePage;
