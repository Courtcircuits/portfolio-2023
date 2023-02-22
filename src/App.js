import './App.css';
import Menu from './Menu.js';
import Hero from './Hero.js';
import About from './About.js';
import ProjectIndex from './ProjectIndex.js';

function App() {
  return (
    <div className="App">
        <Menu/>
        <Hero/>
        <About/>
        <ProjectIndex name="SCHOOL PROJECTS..." projects={["COMPANY POLL","FAKEX"]}/>
    </div>
  );
}

export default App;
