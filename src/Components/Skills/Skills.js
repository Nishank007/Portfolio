import react from '../../assets/icons/react.svg'
import './Skills.css'

import Bar from '../Bar/Bar';
import { Container } from '@material-ui/core';

const languages = [
    {
        icon: react,
        name: 'Python',
        level: '80'
    },
    {
        icon: react,
        name: 'Java',
        level: '50'
    },
    {
        icon: react,
        name: 'HTML',
        level: '90'
    },
    {
        icon: react,
        name: 'CSS',
        level: '90'
    },
    {
        icon: react,
        name: 'C++',
        level: '90'
    },
    {
        icon: react,
        name: 'C#',
        level: '80'
    },
    {
        icon: react,
        name: 'C',
        level: '80'
    },
    {
        icon: react,
        name: 'ASP.Net',
        level: '80'
    },
    {
        icon: react,
        name: 'Android',
        level: '70'
    },
    {
        icon: react,
        name: 'PHP',
        level: '70'
    },
    {
        icon: react,
        name: 'MYSQL',
        level: '80'
    }
]

const tools = [
    {
        icon: react,
        name: 'Microsoft Office',
        level: '90'
    },
    {
        icon: react,
        name: 'Adobe Photoshop',
        level: '70'
    },
    {
        icon: react,
        name: 'Flask',
        level: '90'
    },
    {
        icon: react,
        name: 'Android Studio',
        level: '70'
    },

]


const Skills = () => {
    return (
      <Container maxWidth = "xl" id="skills">
               <hr />
      <h3 style={{ textAlign: "center", margin: "1rem", color: "#F7F9FC" }}>
        Skills
      </h3>
      <hr />
      <br />
        <div id="skills" className="skills" >
         
           <Container>
         
            <div className="row">
                <div className="col-lg-6 resume-languages">
                    <h5 className="reume-language__heading">
                        Language and Framework
                    </h5>
                    <div className="resume-language__body mt-3">
                        {
                            languages.map(language =>
                                <Bar value={language} />
                            )
                        }
                    </div>
                </div>
                <div className="col-lg-6 resume-languages">
                    <h5 className="reume-language__heading">
                        Tools and Softwares
                    </h5>
                    <div className="resume-language__body mt-3">
                        {
                            tools.map(tool => <Bar value={tool} />)
                        }
                    </div>
                </div>
            </div>
            </Container>
        </div>
        </Container>
    );
};

export default Skills;