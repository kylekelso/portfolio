import React from "react"

const Header = ({ pageOpen, timer }) => (
  <header id="header" className={timer ? "transitioned" : ""}>
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
          <button className="link" onClick={() => pageOpen("resume")}>
            Resume
          </button>
        </li>
        <li>
          <button className="link" onClick={() => pageOpen("projects")}>
            Projects
          </button>
        </li>
        <li>
          <button className="link" onClick={() => pageOpen("about")}>
            About
          </button>
        </li>
        <li>
          <button className="link" onClick={() => pageOpen("contact")}>
            Contact
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
