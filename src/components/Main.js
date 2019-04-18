import React from "react"

class Main extends React.Component {
  render() {
    return (
      <div id="main">
        <div id="resume" className={`active`}>
          <h2>Resume</h2>
        </div>
        <div id="projects">
          <h2>Projects</h2>
        </div>
        <div id="about">
          <h2>About</h2>
        </div>
        <div id="contact">
          <h2>Contact</h2>
        </div>
      </div>
    )
  }
}

export default Main
