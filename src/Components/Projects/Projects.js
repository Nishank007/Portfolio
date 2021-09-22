import { Container } from "@material-ui/core";
import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <Container maxWidth="xl" id="projects">
      <hr />
      <h3 style={{ textAlign: "center", margin: "1rem", color: "#F7F9FC" }}>
        Projects
      </h3>
      <hr />
      <br />
      <Container>
      <div id="projects" className="projects">
          <div className="container projects-wrapper">
            <div className="timeline-block timeline-block-right">
              <div className="marker"></div>
              <div className="timeline-content">
                <h3>
                  Music Recommendation System
                  <br></br>
                  2018 – 2019
                </h3>
                <h6>
                  Technology Used: ASP.Net, C#, Microsoft Visual Studios, SQL.
                </h6>
                <p>
                  {" "}
                  Music Recommendation System was based on Artificial Intelligence & Machine
                  Learning algorithm. Its main objective was to reduce human efforts & recommend
                  music on basis of listeners likes & preferences based on octaves, pitch, tempo, root
                  and mode.
                </p>
              </div>
            </div>
            <div className="timeline-block timeline-block-left">
              <div className="marker"></div>
              <div className="timeline-content">
              <h3>
                 Crew-Master Data Management System (Air India Pvt Ltd)
                  <br></br>
                  2018 – 2019
                </h3>
                <h6>
                Technology Used: ASP.Net, C#, Microsoft Visual Studios, SQL.
                </h6>
                <p>
                The Crew-Master Data Management System was designed to reduce human efforts.
                This system had crew information & was intended to maintain their profile,
                benefitting them to get schedule flight details at their disposal.

                </p>
              </div>
            </div>
            {/* - */}
  
          </div>
        </div>
      </Container>
    </Container>
  );
};

export default Projects;
