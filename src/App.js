import './App.css';
import React from 'react';
import Menu from './Menu.js';
import Hero from './Hero.js';
import About from './About.js';
import ProjectIndex from './ProjectIndex.js';
import ProjectDescription from "./ProjectDescription";
import companyPollIllustration from "./images/mains.png";
import AppearingLine from "./AppearingLine";
import ProjectDetail from "./ProjectDetail";

//images from company-poll
import accueilCompanypoll from "./images/company-poll/Accueil.png";
import adminCompanypoll from "./images/company-poll/Dashboard - Admin.png";
import adminVoteCompanypoll from "./images/company-poll/Dashboard - Admin-1.png";
import employeCompanypoll from "./images/company-poll/Dashboard - Employé.png";
import employeVoteCompanypoll from "./images/company-poll/Dashboard - Employé - vote.png";

const imagesCompanyPoll = [accueilCompanypoll, adminCompanypoll, adminVoteCompanypoll, employeCompanypoll, employeVoteCompanypoll];


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            projectVisible: {project: false, index: 1000}
        }
    }

    focusProject = (index) => {
        this.setState({projectVisible: {project: true, index: index}});
    }

    unfocusProject = () => {
        this.setState({projectVisible: {project: false, index: 1000}});
    }

    render() {
        const projects = [<ProjectDetail name="Company Poll"
                                         link={<a href="https://github.com/CompanyPoll">Visit source code</a>}
                                         category="School project" screenshots={imagesCompanyPoll}
                                         role="Scrum Master & Back end engineer" className={this.state.projectVisible.index===0 ? null : "hideProject"} year="2022-2023" handleClick={this.unfocusProject.bind(this)}>
            <b>Company Poll</b> is a vote application making companies decision taking more easy thanks to a user
            friendly interface.
            Each vote is encrypted thanks to the <u>El-Gamal</u> algorithm. It was the occasion to also use the <u>Shamir
            secret sharing technic.</u>
        </ProjectDetail>]

        if (this.state.projectVisible.project) {
            document.getElementsByTagName("body")[0].style.overflowY = "hidden";
        } else {
            document.getElementsByTagName("body")[0].style.overflowY = "scroll";
        }

        return (
            <div id="App">
                <Menu/>
                <Hero/>
                <About/>
                <ProjectIndex name="SCHOOL PROJECTS..." projects={["COMPANY POLL", "FAKEX"]}/>
                <ProjectDescription handleClick={this.focusProject.bind(this, 0)}
                    name={<div><AppearingLine>COMPANY</AppearingLine><AppearingLine>POLL</AppearingLine></div>}
                    image={companyPollIllustration}>
                    <p>A SECURED E-VOTE APPLICATION IN JAVA FOR SMALL COMPANIES</p>
                </ProjectDescription>
                {projects[this.state.projectVisible.index]}
            </div>
        );

    }

}

export default App;
