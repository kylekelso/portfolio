import React from "react"

const Header = () => (
  <header id="header">
    <div className="title">
      <div className="inner">
        <h1>
          Hello, I'm <span>Kyle Kelso</span>.
        </h1>
        <h1>A Self-taught Web Developer.</h1>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button className="link" onClick={() => console.log("resume")}>
            Resume
          </button>
        </li>
        <li>
          <button className="link" onClick={() => console.log("projects")}>
            Projects
          </button>
        </li>
        <li>
          <button className="link" onClick={() => console.log("about")}>
            About
          </button>
        </li>
        <li>
          <button className="link" onClick={() => console.log("contact")}>
            Contact
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
