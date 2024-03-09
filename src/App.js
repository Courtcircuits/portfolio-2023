import "./App.css";
import React from "react";
import Menu from "./Menu.js";
import Hero from "./Hero.js";
import About from "./About.js";
import ProjectIndex from "./ProjectIndex.js";
import ProjectDescription from "./ProjectDescription";

//images from hack the crous
import hackthecrous from "./images/hackthecrous.png";

import desktopHackthecrous from "./images/accueilhtct.png";
import mobileHackthecrous from "./images/accueilmobilehtc.png";


//images from company-poll

import companyPollIllustration from "./images/mains.webp";
import fakexIllustration from "./images/shoefakex.webp";
import gnssSafeIllustration from "./images/gns.webp";
import mamiIllustration from "./images/mamimock.webp";

import AppearingLine from "./AppearingLine";
import ProjectDetail from "./ProjectDetail";

//images from company-poll
import accueilCompanypoll from "./images/company-poll/Accueil.webp";
import adminCompanypoll from "./images/company-poll/Dashboard - Admin.png.webp";
import adminVoteCompanypoll from "./images/company-poll/Dashboard - Admin-1.webp";
import employeCompanypoll from "./images/company-poll/Dashboard - Employé.webp";
import employeVoteCompanypoll from "./images/company-poll/Dashboard - Employé -vote.webp";

//images from fakex
import accueilFakex from "./images/fakex/accueil.webp";
import productFakex from "./images/fakex/product.webp";
import mobileFakex from "./images/fakex/mobile.webp";

//images from mamitel
import accueilMami from "./images/minitel/accueilMinitel.webp";
import annuaireMami from "./images/minitel/annuaire.webp";
import productMami from "./images/minitel/search.webp";
import Contact from "./Contact";
import Footer from "./Footer";
import Background from "./Background";

//images from gnss-safe
import marchesgnss from "./images/gnssafe/gnssafe.webp";
import pitchgnss from "./images/gnssafe/pitch.webp";
import screengnss from "./images/gnssafe/screen_actinspace.webp";

//supabase

const imagesCompanyPoll = [
  { name: "Home", image: accueilCompanypoll },
  {
    name: "Admin pannel",
    image: adminCompanypoll,
  },
  { name: "Vote creation", image: adminVoteCompanypoll },
  {
    name: "Vote submission",
    image: employeCompanypoll,
  },
  { name: "Results", image: employeVoteCompanypoll },
];

const imagesFakex = [
  { name: "Home", image: accueilFakex },
  { name: "Product", image: productFakex },
  { name: "Mobile", image: mobileFakex },
];

const imagesMami = [
  { name: "Home", image: accueilMami },
  { name: "Annuaire", image: annuaireMami },
  { name: "Search", image: productMami },
];

const imagesGnss = [
  { name: "International Finals at Cannes", image: marchesgnss },
  { name: "Finals at Montpellier", image: pitchgnss },
  { name: "In The News", image: screengnss },
];

const imagesHackthecrous = [
  { name: "Web", image: hackthecrous },
  { name: "Desktop", image: desktopHackthecrous },
  { name: "Mobile", image: mobileHackthecrous },
];
//const supabase = createClient(process.env.API_ENDPOINT, 'public-anon-key');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projectVisible: { project: false, index: 1000 },
    };
  }

  focusProject = (index) => {
    this.setState({ projectVisible: { project: true, index: index } });
  };

  unfocusProject = () => {
    this.setState({ projectVisible: { project: false, index: 1000 } });
  };

  render() {
    const projects = [
      <ProjectDetail
        color={{ background: "rgba(88, 70, 190, 0.69)", color: "white" }}
        name="Company Poll"
        link={
          <a style={{ color: "white" }} href="https://github.com/CompanyPoll">
            Visit source code
          </a>
        }
        category="School project"
        screenshots={imagesCompanyPoll}
        role="Scrum Master & Back end engineer"
        className={this.state.projectVisible.index === 0 ? null : "hideProject"}
        year="2022-2023"
        handleClick={this.unfocusProject.bind(this)}
      >
        <b>Company Poll</b> is a vote application making companies decision
        taking easier thanks to a user friendly interface. Each vote is
        encrypted thanks to the <u>El-Gamal</u> algorithm. It was the occasion
        to also use the <u>Shamir secret sharing technic.</u>
      </ProjectDetail>,
      <ProjectDetail
        color={{ background: "rgba(228, 217, 182, 0.69)", color: "#272727" }}
        name="Fakex"
        link={
          <a
            style={{ color: "#272727" }}
            href="https://webinfo.iutmontp.univ-montp2.fr/~radulescut/eCommerce/web/frontController.php"
          >
            Visit website
          </a>
        }
        category="School project"
        screenshots={imagesFakex}
        role="Designer & Back-end engineer"
        className={this.state.projectVisible.index === 1 ? null : "hideProject"}
        year="2022-2023"
        handleClick={this.unfocusProject.bind(this)}
      >
        <b>Fakex</b> is a website inspired by Vinted and targetting shoe
        customers and sellers. Fakex wants to propose the best vintages shoes on
        the internet for a fair price.
      </ProjectDetail>,

      <ProjectDetail
        color={{ background: "rgba(60,92,171,0.69)", color: "#ffffff" }}
        name="GNSSAFE"
        link={
          <a
            style={{ color: "#ffffff" }}
            href="https://www.entreprendre-montpellier.com/fr/actualites/retour-sur-la-5eme-edition-dactinspace-2022"
          >
            We are on the news
          </a>
        }
        category="Side project"
        screenshots={imagesGnss}
        role="Entrepreneur & Data scientist"
        className={this.state.projectVisible.index === 1 ? null : "hideProject"}
        year="Work in progress"
        handleClick={this.unfocusProject.bind(this)}
      >
        <b>GNSSAFE</b> is an anti-spoofing geolocation SaaS. Thanks to a secret
        algorithm, we are able to detect people using GPS emulators. GNSSAFE is
        a startup founded after the Hackathon Act In Space. My team and I were
        representing Montpellier during Act In Space’s finals.
      </ProjectDetail>,
      <ProjectDetail
        color={{ background: "rgba(3, 1, 44, 0.69)", color: "#FEBBED" }}
        name="MAMITEL"
        link={
          <a style={{ color: "#FEBBED" }} href="https://milou666.github.io/">
            Visit website
          </a>
        }
        category="Side project"
        screenshots={imagesMami}
        role="Front-end developer"
        className={this.state.projectVisible.index === 1 ? null : "hideProject"}
        year="2021"
        handleClick={this.unfocusProject.bind(this)}
      >
        <b>Mamitel</b> is a JavaScript and HTML/CSS interface built on top of
        Google, inspired by the Minitel interface. It was created during the
        hackathon La Nuit de L’Info.{" "}
        <u>
          We won the "c’était mieux avant" prize, which was endorsed by Sopra
          Steria
        </u>
        . I had the pleasure of working with Julie Chevallier, a fantastic
        developer and designer!
      </ProjectDetail>, 
      <ProjectDetail
        color={{ background: "#0C0C0C", color: "#24EE76" }}
        name="Hack The Cr*us"
        link={
<div>
          <a
            style={{ color: "#24EE76" }}
            href="https://www.notion.so/courtcircuits/hack_the_cr-us-update-log-2e52ac151a8e43b081bedc1199e1daa8?pvs=4"
          >
            How the project evolves (Blog)
          </a>
          <a
            style={{ color: "#24EE76" , marginLeft: "30px"}}
            href="https://hackthecrous.com"
          >
            Visit website
          </a>
         <a
            style={{ color: "#24EE76" , marginLeft: "30px"}}
            href="https://github.com/stars/Courtcircuits/lists/hack-the-crous"
          >
          Source code
          </a>
</div>
        }
        category="Side project"
        screenshots={imagesHackthecrous}
        role="Full stack developer"
        className={this.state.projectVisible.index === 1 ? null : "hideProject"}
        year="Work in progress"
        handleClick={this.unfocusProject.bind(this)}
      >
        <b>Hack The Cr*us</b> is a web and mobile application that aims to
        connect students in Montpellier. It is a platform where students can
        find there planning and nearby favorite food places. Thanks to these two features,
        students can easily find a place to eat with their friends between two classes.
        They just have to open the app and see where their friends are eating or send a link
        to their friends to meet them at their favorite place.
      </ProjectDetail>,
      <ProjectDetail
        color={{ background: "rgba(3, 1, 44, 0.69)", color: "#FEBBED" }}
        name="MAMITEL"
        link={
          <a style={{ color: "#FEBBED" }} href="https://milou666.github.io/">
            Visit website
          </a>
        }
        category="Side project"
        screenshots={imagesMami}
        role="Front-end developer"
        className={this.state.projectVisible.index === 1 ? null : "hideProject"}
        year="2021"
        handleClick={this.unfocusProject.bind(this)}
      >
        <b>Mamitel</b> is a JavaScript and HTML/CSS interface built on top of
        Google, inspired by the Minitel interface. It was created during the
        hackathon La Nuit de L’Info.{" "}
        <u>
          We won the "c’était mieux avant" prize, which was endorsed by Sopra
          Steria
        </u>
        . I had the pleasure of working with Julie Chevallier, a fantastic
        developer and designer!
      </ProjectDetail>,

    ];

    if (this.state.projectVisible.project) {
      document.getElementsByTagName("body")[0].style.overflowY = "hidden";
    } else {
      document.getElementsByTagName("body")[0].style.overflowY = "scroll";
    }

    return (
      <div id="App">
        <Background />
        <Menu />
        <Hero />
        <About />
        <ProjectIndex
          name="SIDE PROJECTS..."
          projects={["HACK THE CR*US", "GNSSAFE", "MAMITEL"]}
        />
        <ProjectDescription
          handleClick={this.focusProject.bind(this, 4)}
          name={
            <div>
              <AppearingLine>HACK THE</AppearingLine>
              <AppearingLine>CR*US</AppearingLine>
            </div>
          }
          link="HACK THE CR*US"
          image={hackthecrous}
          tags={["GraphQL", "Javascript", "Vue.js", "React Native", "Vercel"]}
        >
          <p>
            A MOBILE AND WEB APP TO HELP PEOPLE FINDING THE BEST CR*US IN THEIR AREA
          </p>
        </ProjectDescription>
        <ProjectDescription
          handleClick={this.focusProject.bind(this, 2)}
          name={
            <div>
              <AppearingLine>GNSS</AppearingLine>
              <AppearingLine>SAFE</AppearingLine>
            </div>
          }
          link="GNSSAFE"
          image={gnssSafeIllustration}
          tags={["Startup", "Hackathon", "Cybersec", "Data science"]}
        >
          <p>A GEOLOCATION API DETECTING SPOOFING HACKS</p>
        </ProjectDescription>
        <ProjectDescription
          handleClick={this.focusProject.bind(this, 3)}
          name={
            <div>
              <AppearingLine>MAMITEL</AppearingLine>
            </div>
          }
          link="MAMITEL"
          image={mamiIllustration}
          tags={["Hackathon", "JavaScript", "HTML/CSS", "UI/UX"]}
        >
          <p>A MINIMALIST BROWSER INTERFACE FOR YOUR GRANNY</p>
        </ProjectDescription>
        <ProjectIndex
          name="SCHOOL PROJECTS..."
          projects={["COMPANY POLL", "FAKEX"]}
        />
        <ProjectDescription
          handleClick={this.focusProject.bind(this, 0)}
          name={
            <div>
              <AppearingLine>COMPANY</AppearingLine>
              <AppearingLine>POLL</AppearingLine>
            </div>
          }
          link="COMPANY POLL"
          image={companyPollIllustration}
          tags={["Java", "SQL", "Cryptography", "Cybersec"]}
        >
          <p>A SECURED E-VOTE APPLICATION IN JAVA FOR SMALL COMPANIES</p>
        </ProjectDescription>
        <ProjectDescription
          handleClick={this.focusProject.bind(this, 1)}
          link="FAKEX"
          name={
            <div>
              <AppearingLine>FAKEX</AppearingLine>
            </div>
          }
          image={fakexIllustration}
          tags={["PHP", "SQL", "HTML/CSS", "JavaScript"]}
        >
          <p>AN E-COMMERCE PLATFORM TO SELL VINTAGE SHOES</p>
        </ProjectDescription>

        {projects[this.state.projectVisible.index]}

        <Contact
          mail={
            <h3>
              radulescutristan
              <br />
              @proton.me
            </h3>
          }
        />
        <Footer />
      </div>
    );
  }
}

export default App;
