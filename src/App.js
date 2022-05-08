import Greg_Heiman_Pic from './assets/Greg_Heiman_Picture_Square.jpg';
import cpp_icon from './assets/cpp-icon.png';
import c_icon from './assets/c-icon.png';
import js_icon from './assets/js-icon.png';
import java_icon from './assets/java-icon.png';
import python_icon from './assets/python-icon.png';
import git_icon from './assets/git-icon.png';
import discord_logo from './assets/discord-logo.png';
import plex_logo from './assets/plex-logo.png';
import gaea_logo from './assets/gaea-ll-logo.png';

import './App.css';

function App() {
    return (
        <div className="App">
          <header className="App-header">
              <NavBar/>
          </header>
          <body className="App-body">
              <Hero/>
              <MoreAbout/>
              <Skills/>
              <Projects/>
              <Contact/>
          </body>
        </div>
    );
}

function NavBar() {
    return (
        <nav>
          <h1>Greg Heiman</h1>
          <ul className="navigation">
            <li><a href="#about" className="nav-link">About</a></li>
            <li><a href="#skills" className="nav-link">Skills</a></li>
            <li><a href="#projects" className="nav-link">Projects</a></li>
            <li><a href="#contact" className="nav-link">Contact</a></li>
          </ul>
          <button className="burger-menu" id="burger-menu">
            <ion-icon className="bars" name="menu-outline"></ion-icon>
          </button>
        </nav>
    );
}

function Hero() {
    return (
        <section className="hero" id="about">
          <img
            src={Greg_Heiman_Pic}
            className="hero-img"
            alt="greg-heiman-pic"
            loading="lazy"
          />
          <div className="bio animate__animated animate__pulse">
            <h1 className="bio-title">About Me</h1>
            <p className="bio-text">
              Skilled software developer with experience in mid-level systems programming.
              Experience developing large scale API back ends and client facing technologies. 
            </p>
          </div>
        </section>
    );
}

function MoreAbout() {
    return (
        <section className="more-about">
          <h2>More About Me</h2>
          <p>
            Proficient in C/C++, Java, and Python. Familiar with the Spring framework, SQL, and JavaScript.
          </p>
          <p>
            Currently working on expanding my skill set into embedded programming and emerging technologies such as the blockchain.
          </p>
          <p>
            I have a strong desire to learn new programming languages as well as working to keep my skills up to date with the ones that I know. I am currently excited to learn Rust as well as deepen my understanding of C/C++.
          </p>
        </section>
    );
}

function Skills() {
    return (
        <section className="skills" id="skills">
          <h2 className="skill-header">Skills</h2>
          <div className="skills-wrapper">
            <div className="first-set animate__animated animate__pulse">
              <img
                src={cpp_icon}
                alt=""
                loading="lazy"
                className="icon icon-card"
              />
              <img
                src={python_icon}
                alt=""
                loading="lazy"
                className="icon icon-card"
              />
              <img
                src={js_icon}
                alt=""
                loading="lazy"
                className="icon icon-card"
              />
            </div>
            <div className="second-set animate__animated animate__pulse">
              <img
                src={java_icon}
                alt=""
                loading="lazy"
                className="icon icon-card"
              />
              <img
                src={c_icon}
                alt=""
                loading="lazy"
                className="icon icon-card"
              />
              <img
                src={git_icon}
                alt=""
                loading="lazy"
                className="icon icon-card"
              />
            </div>
          </div>
        </section>
    );
}

function Projects() {
    return (
        <section className="projects" id="projects">
          <h2 className="projects-title">Recent Projects</h2>
          <div className="projects-container">
            <div className="project-container project-card">
              <img
                src={gaea_logo}
                alt=""
                loading="lazy"
                className="project-pic"
              />
              <h3 className="project-title">Gaea Image Generation Engine</h3>
              <p className="project-details">
                Programatic image generator for large scale randomized image generation. Reads
                in a specially formatted JSON file and outputs images created from numerous layers.
                Each image layer can have specified rarities as well as spcifiying image restrictions
                based on previous layers. Part of my work with Ownheim Consulting LLC, used for generating
                entire NFT image collections.
              </p>
            </div>
            <div className="project-container project-card">
              <img
                src={discord_logo}
                alt=""
                loading="lazy"
                className="project-pic"
              />
              <h3 className="project-title">Discord Whitelist Bot</h3>
              <p className="project-details">
                Discord bot used in several NFT Discord servers. Used for whitelisting purposes.
                Allows admins to whitelist users easily, and allows for users to easily check their
                whitelist status. Accessed through a simple Discord slash command interface and stores
                user information in a database backend. Part of my work with Ownheim Consulting LLC.
              </p>
            </div>
            <div className="project-container project-card">
              <img
                src={plex_logo}
                alt=""
                loading="lazy"
                className="project-pic"
              />
              <h3 className="project-title">Plex Top 250 Tracker</h3>
              <p className="project-details">
                Hobby project involving the Plex media server and the top 250 movie list from IMDB.
                Scrapped the list from the IMDB website and then used the Plex API to access a users
                library comparing the two to find missing movies. The list of missing movies could be
                compiled into an Excel and text format and emailed to a chosen email.
              </p>
              <a href="https://github.com/Ushrio/PlexTop250Tracker" target="_blank" className="project-link">Check it Out</a>
            </div>
          </div>
        </section>
    );
}

function Contact() {
    return (
        <section className="contact" id="contact">
          <h2>Get In Touch With Me</h2>
          <br />
          <div className="contact-form-container">
            <p><a href="mailto:gregheiman02@gmail.com">Send Me an Email</a></p>
          </div>
        </section>
    );
}

export default App;
