import './App.css';
import React from 'react';
import Menu from './Menu.js';
import Hero from './Hero.js';
import About from './About.js';
import ProjectIndex from './ProjectIndex.js';
import ProjectDescription from "./ProjectDescription";

import companyPollIllustration from "./images/mains.png";
import fakexIllustration from "./images/shoefakex.png";
import gnssSafeIllustration from "./images/gns.png";
import mamiIllustration from "./images/mamimock.png";

import AppearingLine from "./AppearingLine";
import ProjectDetail from "./ProjectDetail";

//images from company-poll
import accueilCompanypoll from "./images/company-poll/Accueil.png";
import adminCompanypoll from "./images/company-poll/Dashboard - Admin.png";
import adminVoteCompanypoll from "./images/company-poll/Dashboard - Admin-1.png";
import employeCompanypoll from "./images/company-poll/Dashboard - Employé.png";
import employeVoteCompanypoll from "./images/company-poll/Dashboard - Employé - vote.png";

//images from fakex
import accueilFakex from "./images/fakex/accueil.png";
import productFakex from "./images/fakex/product.png";
import mobileFakex from "./images/fakex/mobile.png";

//images from mamitel
import accueilMami from "./images/minitel/accueilMinitel.png";
import annuaireMami from "./images/minitel/annuaire.png";
import productMami from "./images/minitel/search.png";
import Contact from "./Contact";
import Footer from "./Footer";
import Background from "./Background";


const imagesCompanyPoll = [{name: "Home", image: accueilCompanypoll}, {
    name: "Admin pannel",
    image: adminCompanypoll
}, {name: "Vote creation", image: adminVoteCompanypoll}, {
    name: "Vote submission",
    image: employeCompanypoll
}, {name: "Results", image: employeVoteCompanypoll}];

const imagesFakex = [{name: "Home", image: accueilFakex}, {name: "Product", image: productFakex}, {name:"Mobile", image:mobileFakex}];

const imagesMami = [{name: "Home", image: accueilMami}, {name: "Annuaire", image: annuaireMami}, {name:"Search", image:productMami}];

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
        const projects = [<ProjectDetail color={{background: "rgba(88, 70, 190, 0.69)", color : "white"}} name="Company Poll"
                                         link={<a style={{color:"white"}}  href="https://github.com/CompanyPoll">Visit source code</a>}
                                         category="School project" screenshots={imagesCompanyPoll}
                                         role="Scrum Master & Back end engineer"
                                         className={this.state.projectVisible.index === 0 ? null : "hideProject"}
                                         year="2022-2023" handleClick={this.unfocusProject.bind(this)}>
            <b>Company Poll</b> is a vote application making companies decision taking more easy thanks to a user
            friendly interface.
            Each vote is encrypted thanks to the <u>El-Gamal</u> algorithm. It was the occasion to also use the <u>Shamir
            secret sharing technic.</u>
        </ProjectDetail>,
            <ProjectDetail color={{background : "rgba(228, 217, 182, 0.69)", color : "#272727"}} name="Fakex"
                           link={<a style={{color:"#272727"}} href="https://webinfo.iutmontp.univ-montp2.fr/~radulescut/eCommerce/web/frontController.php">Visit website</a>}
                           category="School project" screenshots={imagesFakex}
                           role="Designer & Back-end engineer"
                           className={this.state.projectVisible.index === 1 ? null : "hideProject"} year="2022-2023"
                           handleClick={this.unfocusProject.bind(this)}>
                <b>Fakex</b> is a website inspired by Vinted and targetting shoe customers/sellers. Fakex wants to propose the best vintages shoes on the internet for a fair price.
            </ProjectDetail>,

            <ProjectDetail color={{background : "rgba(182, 228, 189, 0.69)", color : "#272727"}} name="GNSSAFE"
                           link={<a style={{color:"#272727"}} href="https://www.entreprendre-montpellier.com/fr/actualites/retour-sur-la-5eme-edition-dactinspace-2022">We are on the news</a>}
                           category="Side project" screenshots={imagesFakex}
                           role="Entrepreneur & Data scientist"
                           className={this.state.projectVisible.index === 1 ? null : "hideProject"} year="Work in progress"
                           handleClick={this.unfocusProject.bind(this)}>
                <b>GNSSAFE</b> is an anti-spoofing geolocation. Thanks to a secret algorithm, we are able to detect people using GPS emulators. GNSSAFE is a startup founded after the Hackathon Act In Space. My team and I were representing Montpellier during Act In Space’s finals.
            </ProjectDetail>,
            <ProjectDetail color={{background : "rgba(3, 1, 44, 0.69)", color : "#FEBBED"}} name="MAMITEL"
                           link={<a style={{color:"#FEBBED"}} href="https://milou666.github.io/">Visit website</a>}
                           category="Side project" screenshots={imagesMami}
                           role="Front-end developer"
                           className={this.state.projectVisible.index === 1 ? null : "hideProject"} year="2021"
                           handleClick={this.unfocusProject.bind(this)}>
                <b>Mamitel</b> is a JavaScript and HTML/CSS interface built on top of Google, inspired by the Minitel interface. It was created during the hackathon La Nuit de L’Info. <u>We won the "c’était mieux avant" prize, which was endorsed by Sopra Steria</u>. I had the pleasure of working with Julie Chevallier, a fantastic developer and designer!
            </ProjectDetail>]

        if (this.state.projectVisible.project) {
            document.getElementsByTagName("body")[0].style.overflowY = "hidden";
        } else {
            document.getElementsByTagName("body")[0].style.overflowY = "scroll";
        }

        return (
            <div id="App">
                <Background/>
                <Menu/>
                <Hero/>
                <About/>
                <ProjectIndex name="SCHOOL PROJECTS..." projects={["COMPANY POLL", "FAKEX"]}/>
                <ProjectDescription handleClick={this.focusProject.bind(this, 0)}
                                    name={<div><AppearingLine>COMPANY</AppearingLine><AppearingLine>POLL</AppearingLine>
                                    </div>}
                                    link="COMPANY POLL"
                                    image={companyPollIllustration}
                                    tags = {["Java", "SQL","El-Gamal", "Cybersec"]}
                >
                    <p>A SECURED E-VOTE APPLICATION IN JAVA FOR SMALL COMPANIES</p>
                </ProjectDescription>
                <ProjectDescription handleClick={this.focusProject.bind(this, 1)}
                                    link="FAKEX"
                                    name={<div><AppearingLine>FAKEX</AppearingLine>
                                    </div>}
                                    image={fakexIllustration}
                                    tags = {["PHP", "SQL", "HTML/CSS", "JavaScript"]}
                                    >
                    <p>AN E-COMMERCE PLATFORM TO SELL VINTAGE SHOES</p>
                </ProjectDescription>
                <ProjectIndex name="SIDE PROJECTS..." projects={["GNSSAFE", "MAMITEL"]}/>
                <ProjectDescription handleClick={this.focusProject.bind(this, 2)}
                                    name={<div><AppearingLine>GNSS</AppearingLine><AppearingLine>SAFE</AppearingLine>
                                    </div>}
                                    link="GNSSAFE"
                                    image={gnssSafeIllustration}
                                    tags = {["Startup", "Hackathon", "Cybersec","Data science"]}
                >
                    <p>A GEOLOCATION API DETECTING SPOOFING HACKS</p>
                </ProjectDescription>
                <ProjectDescription handleClick={this.focusProject.bind(this, 3)}
                                    name={<div><AppearingLine>MAMITEL</AppearingLine>
                                    </div>}
                                    link="MAMITEL"
                                    image={mamiIllustration}
                                    tags = {["Hackathon", "JavaScript", "HTML/CSS","UI/UX"]}
                >
                    <p>A MINIMALIST BROWSER INTERFACE FOR YOUR GRANNY</p>
                </ProjectDescription>

                {projects[this.state.projectVisible.index]}

                <Contact mail={<h3>radulescutristan<br/>@proton.me</h3>}/>
                <Footer/>
            </div>
        );

    }

}

export default App;
