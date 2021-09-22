import { Container } from "@material-ui/core";
import React from "react";
import "./Experience.css";

const Experience = () => {
  return (
    <Container maxWidth="xl" id="experience">
      <hr />
      <h3 style={{ textAlign: "center", margin: "1rem", color: "#F7F9FC" }}>
        Experience
      </h3>
      <hr />
      <br />
      <Container>
        <div id="experience" className="experience">
          <div className="container experience-wrapper">
            <div className="timeline-block timeline-block-right">
              <div className="marker"></div>
              <div className="timeline-content">
                <h3>
                  Beta Consultancy
                  <br></br>
                  Website Developer & Digital Marketer
                  <br></br>
                  2019 – 2020
                </h3>
                <p>
                  {" "}
                  Designed and developed appealing and responsive Websites using
                  React JS. Delivered customer service for every Website,
                  ensuring maximum client satisfaction, by utilizing Selenium
                  Testing and Unit Testing to provide a continuous integration
                  service to automate the entire process of loading the latest
                  build code and test files, running the tests, and generating a
                  report of the results once per day. Explored ways to visualize
                  and send a daily report of test results to team members using
                  HTML, JavaScript, and CSS. Handled all social media accounts,
                  such as Facebook, Instagram, and Twitter, accompanied with
                  managing operations related to digital marketing for various
                  handcrafted products. Coordinated with NGOs, such as Care
                  Foundation and OOO Farms, as part of corporate social
                  responsibility. Planned and organized charity events as well
                  as acted as a liaison for art exhibitions. Prepared and
                  finalized catalogs and brochures for marketing. Updated
                  clients on market conditions and new offerings.
                </p>
              </div>
            </div>
            <div className="timeline-block timeline-block-left">
              <div className="marker"></div>
              <div className="timeline-content">
                <h3>
                  Air India Pvt Ltd
                  <br></br>
                  Intern
                  <br></br>
                  2018 – 2019
                </h3>

                <p>
                Designed and developed appealing and responsive Websites for the Airline Crew to Manage their Schedule.
                The Crew-Master Data Management System was designed to reduce human efforts. This
                system had crew information & was intended to maintain their profile, benefitting them to
                get schedule flight details at their disposal.
                Technology Used: ASP.Net, C#, Microsoft Visual Studios, SQL

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

export default Experience;
