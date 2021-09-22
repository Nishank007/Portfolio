import { Container, Paper } from "@material-ui/core";
import "./Summary.css";
import Profile from "../../assets/images/ProfilePic.jpeg";

const Summary = () => {
  return (
    <Container maxWidth="xl" id="summary">
      <hr />
      <h3 style={{ textAlign: "center", margin: "1rem", color: "#F7F9FC" }}>
        Biography
      </h3>
      <hr />
      <br />
     <Container>
      <div class="row">
        <div class="col-3">
          <img
            style={{
              width: "200px",
              height: "254.73px",
              boxShadow: "10px 10px 10px black",
            }}
            src={Profile}
            alt="Profile"
          ></img>
        </div>
        <div class="col-9">
          <p
            style={{ color: "white", fontWeight: "bold", textAlign: "justify" }}
          >
            Technically sophisticated and analytical professional with a
            Master’s degree in Computer Science from University of Texas along 
            with hands-on experience in website and application development.
            Proven success in leading and completing numerous web
            and app development projects within the defined time and budget.
            Possess in-depth knowledge of software, website, and application
            development protocols, procedures, and practices. Capable of using
            the latest tools and techniques to design websites that met and
            exceeded client satisfaction. Adept at identifying, analyzing, and
            resolving complex issues by delivering robust technical solutions.
            Articulate communicator, able to cultivate strong relations with
            team members, clients, management, and other stakeholders.
          </p>
        </div>
      </div>
      </Container>
    </Container>
  );
};

export default Summary;
