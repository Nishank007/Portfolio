import Particles from "react-particles-js";
import "./Header.css";
import Typed from "react-typed";
import { Paper } from "@material-ui/core";
import Resume from '../../assets/documents/Resume.pdf'

const Header = () => {
  return (
    <>
      <Particles 
        id="particles-js"
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900,
              },
            },
            shape: {
              type: "circle",
              stroke: {
                width: 6,
                color: "#f9ab00",
              },
            },
          },
        }}
      />
      <div
        id="splash-img"
        class="hero fullscreen hero-img parallax-img"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <div class="hero-body">
          <div class="content u-text-center">
            <Typed
              className="typed-text"
              strings={[
                "Website Development",
                "Software Testing",
                "Android Development",
                "Automation Testing",
              ]}
              typeSpeed={30}
              backSpeed={30}
              loop
            />
            <div class="tile">
              <div class="tile__container">
                <button
                  class="btn-primary btn-lg uppercase"
                  style={{ fontWeight: "bold" }}
                >
                  <a offset={-110}  href = {Resume} download style ={{color:'white',fontWeight: "bold" }}>RESUME</a>
                </button>
              </div>
            </div>

            <br></br>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
