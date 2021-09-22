import { Container, Paper } from "@material-ui/core";
import UTA from "../../assets/images/uta.png";
import MumbaiUniversity from "../../assets/images/mumbaiUniversity.png";
import "./Education.css";

const Education = () => {
  return (
    <Container maxWidth="xl" id="education">
      <hr />
      <h3 style={{ textAlign: "center", margin: "1rem", color: "#F7F9FC" }}>
        Education
      </h3>
      <hr />
      <br />
      <Container>
        <div id="education" className="education">
          <div className="container education-wrapper">
            <div className="timeline-block timeline-block-right">
              <div className="marker"></div>
              <div className="timeline-content">
                <h3>University of Texas at Arlington</h3>
                <h5>
                  <b>Master of Science in Computer Science</b>
                </h5>
                <h6>
                  <i>2020-2022</i>
                </h6>
              </div>
            </div>
            {/* - */}
            <div className="timeline-block timeline-block-left">
              <div className="marker"></div>
              <div className="timeline-content">
                <h3>Mumbai University</h3>
                <h5>
                  <b>Bachelor of Engineering in Computer Engineering</b>
                </h5>
                <h6>
                  <i>2014-2019</i>
                </h6>
              </div>
            </div>
            <div className="timeline-block timeline-block-right">
              <div className="marker"></div>
              <div className="timeline-content">
                <h3>Mumbai University</h3>
                <h5>
                  <b>Higher Secondary Certificate</b>
                </h5>
                <h6>
                  <i>2012-2014</i>
                </h6>
              </div>
            </div>
            <div className="timeline-block timeline-block-left">
              <div className="marker"></div>
              <div className="timeline-content">
                <h3>Mumbai University</h3>
                <h5>
                  <b>Secondary School Certificate</b>
                </h5>
                <h6>
                  <i>2002-2012</i>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Container>
  );
};

export default Education;
