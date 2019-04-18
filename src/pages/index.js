import React from "react"
import Layout from "../components/layout"

import Header from "../components/Header"
import Main from "../components/Main"

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = { temp: "temp" }
  }

  render() {
    return (
      <Layout>
        <div id="container" className="root">
          <Header />
          <Main />
        </div>
      </Layout>
    )
  }
}

export default IndexPage
