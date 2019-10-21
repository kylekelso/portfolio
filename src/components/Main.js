import React from "react"
import { MdClose } from "react-icons/md"
import resume from "../assets/images/KKelso-Resume.png"
import pollsterFront from "../assets/images/Pollster - Frontpage.png"
import warblerFront from "../assets/images/Warbler - Frontpage.png"
import closeIcon from "../assets/images/gatsby-icon.png"

class Main extends React.Component {
  createCloseButton() {
    return (
      <button className="close-btn" onClick={this.props.pageClose}>
        {/* <img src={closeIcon} alt="" /> */}
        <MdClose size="45" />
      </button>
    )
  }
  render() {
    let { pageType, timers } = this.props
    return (
      <div id="main" className={timers.header ? "transitioned" : ""}>
        <div
          id="resume"
          className={`${pageType === "resume" ? "active" : ""} ${
            timers.page ? "transitioned" : ""
          }`}
        >
          {this.createCloseButton()}
          <h2>Resume</h2>
          <section>
            <img src={resume} alt="" />
          </section>
        </div>
        <div
          id="projects"
          className={`${pageType === "projects" ? "active" : ""} ${
            timers.page ? "transitioned" : ""
          }`}
        >
          {this.createCloseButton()}
          <h2>Projects</h2>
          {/* multiple sections for each project. Show image and technology used in each one. */}
          <section className="half">
            {/* vote app */}
            <img src={pollsterFront} alt="" />
            <a
              href="http://voter.kyle-kelso.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Pollster
            </a>
          </section>
          <section className="half">
            {/* twitter clone app */}
            <img src={warblerFront} alt="" />
            <a
              href="http://warbler.kyle-kelso.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Warbler
            </a>
          </section>
        </div>
        <div
          id="about"
          className={`${pageType === "about" ? "active" : ""} ${
            timers.page ? "transitioned" : ""
          }`}
        >
          {this.createCloseButton()}
          <h2>About</h2>
          <section>
            <p>
              Hello there! My name is Kyle. I am a self taught Web Developer
              with a heavy background in IT. Web development has given me a
              chance to really tap into my desire of solving problems while also
              letting me be creative. I am currently open for new and exciting
              opportunities. The best way to reach me is through email:
            </p>
            <br />
            <h3>kyle.kelso@outlook.com</h3>
          </section>
        </div>
        <div
          id="contact"
          className={`${pageType === "contact" ? "active" : ""} ${
            timers.page ? "transitioned" : ""
          }`}
        >
          {this.createCloseButton()}
          <h2>Contact</h2>
          <section>
            <h4>Email: kyle.kelso@outlook.com</h4>
            <h4>Github: https://github.com/kylekelso</h4>
            <h4>LinkedIn: placeholder</h4>
          </section>
        </div>
      </div>
    )
  }
}

export default Main
