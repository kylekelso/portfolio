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
        </div>
        <div
          id="about"
          className={`${pageType === "about" ? "active" : ""} ${
            timers.page ? "transitioned" : ""
          }`}
        >
          {this.createCloseButton()}
          <h2>About</h2>
        </div>
        <div
          id="contact"
          className={`${pageType === "contact" ? "active" : ""} ${
            timers.page ? "transitioned" : ""
          }`}
        >
          {this.createCloseButton()}
          <h2>Contact</h2>
        </div>
      </div>
    )
  }
}

export default Main
