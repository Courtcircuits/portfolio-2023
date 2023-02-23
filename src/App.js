import './App.css';
import Menu from './Menu.js';
import Hero from './Hero.js';
import About from './About.js';
import ProjectIndex from './ProjectIndex.js';
import ProjectDescription from "./ProjectDescription";
import companyPollIllustration from "./images/mains.png";
import AppearingLine from "./AppearingLine";

function App() {
  return (
    <div className="App">
        <Menu/>
        <Hero/>
        <About/>
        <ProjectIndex name="SCHOOL PROJECTS..." projects={["COMPANY POLL","FAKEX"]}/>
        <ProjectDescription name={<div><AppearingLine>COMPANY</AppearingLine><AppearingLine>POLL</AppearingLine></div>} image={companyPollIllustration}>
            <p>A SECURED E-VOTE APPLICATION IN JAVA FOR SMALL COMPANIES</p>
        </ProjectDescription>

    </div>
  );

}

export default App;
