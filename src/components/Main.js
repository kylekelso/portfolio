import React from "react"
import resume from "../assets/images/KKelso-Resume.jpg"
import closeIcon from "../assets/images/gatsby-icon.png"

class Main extends React.Component {
  createCloseButton() {
    return (
      <button className="close-btn" onClick={this.props.pageClose}>
        <img src={closeIcon} alt="" />
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
            <a
              href="http://voter.kyle-kelso.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Voter - Voting and statistics
            </a>
          </section>
          <section className="half">
            {/* twitter clone app */}
            <a
              href="http://warbler.kyle-kelso.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Warbler - A twitter clone
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
              Hello! I am Kyle. I love to make websites and such! Feel free to
              contact me about any job inquries!
            </p>
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
