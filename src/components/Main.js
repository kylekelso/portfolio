import React from "react"
import {
  MdClose,
  MdPictureAsPdf,
  MdChevronLeft,
  MdChevronRight,
} from "react-icons/md"
import resume from "../assets/images/KKelso-Resume.png"
import resumePDF from "../assets/docs/KKelso.Resume.pdf"
import pollsterFront from "../assets/images/Pollster - Frontpage.png"
import warblerFront from "../assets/images/Warbler - Frontpage.png"

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      projectPage: 0,
      href: "http://voter.kyle-kelso.com",
      hrefText: "Visit Pollster",
      description:
        "Pollster is a website dedicated to creating polls and voting. Includes signup and login authentication and settings to customize each poll.",
      img: pollsterFront,
    }

    this.projects = [
      {
        href: "http://voter.kyle-kelso.com",
        hrefText: "Visit Pollster",
        description:
          "Pollster is a website dedicated to creating polls and voting. Includes signup and login authentication and settings to customize each poll.",
        img: pollsterFront,
      },
      {
        href: "http://warbler.kyle-kelso.com",
        hrefText: "Visit Warbler",
        description: "Warbler can be described as a Twitter clone.",
        img: warblerFront,
      },
    ]
  }

  prev = () => {
    let page = this.state.projectPage
    page--
    this.setState({
      projectPage: page,
      ...this.projects[page],
    })
  }

  next = () => {
    let page = this.state.projectPage
    page++
    this.setState({
      projectPage: page,
      ...this.projects[page],
    })
  }

  createCloseButton() {
    return (
      <button className="close-btn" onClick={this.props.pageClose}>
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
          <a className="download-btn" href={resumePDF}>
            <MdPictureAsPdf size="35" />
          </a>
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
            {/*             <a href={this.state.href} target="_blank" rel="noopener noreferrer">
              {this.state.hrefText}
            </a> */}
            {this.state.projectPage > 0 ? (
              <button className="icon-btn left" onClick={this.prev}>
                <MdChevronLeft size="45" />
              </button>
            ) : null}
            <a href={this.state.href} target="_blank" rel="noopener noreferrer">
              <img src={this.state.img} alt="" />
            </a>

            {this.projects.length - 1 > this.state.projectPage ? (
              <button className="icon-btn right" onClick={this.next}>
                <MdChevronRight size="45" />
              </button>
            ) : null}
            <p id="projDesc">{this.state.description}</p>
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
              letting me be creative. I am currently open for new opportunities.
              <br />
              <br />
              The best way to reach me is through email at
              Kyle.Kelso@Outlook.com
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
            <ul>
              <li>
                <h3>Email -</h3>&nbsp;
                <h4>Kyle.Kelso@Outlook.com</h4>
              </li>
              <li>
                <h3>Github -</h3>&nbsp;
                <h4>https://github.com/kylekelso</h4>
              </li>
            </ul>
          </section>
        </div>
      </div>
    )
  }
}

export default Main
