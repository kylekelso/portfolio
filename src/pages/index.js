import React from "react"
import Layout from "../components/layout"

import Header from "../components/Header"
import Main from "../components/Main"

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: "loading",
      pageStatus: { open: false, type: "" },
      timers: { header: false, page: false },
    }
    this.handlePageOpen = this.handlePageOpen.bind(this)
    this.handlePageClose = this.handlePageClose.bind(this)
  }

  handlePageOpen(type) {
    this.setState({ pageStatus: { open: true, type } })

    setTimeout(() => {
      this.setState({ timers: { header: true, page: false } })
    }, 325)

    setTimeout(() => {
      this.setState({ timers: { header: true, page: true } })
    }, 350)
  }

  handlePageClose() {
    this.setState({ timers: { header: true, page: false } })

    setTimeout(() => {
      this.setState({ timers: { header: false, page: false } })
    }, 325)

    setTimeout(() => {
      this.setState({ pageStatus: { open: false, type: "" } })
    }, 350)
  }

  componentDidMount() {
    this.loadTimer = setTimeout(() => {
      this.setState({ loading: "" })
    }, 500)
  }

  render() {
    let { loading, pageStatus, timers } = this.state
    return (
      <Layout>
        <div
          id="container"
          className={`root ${pageStatus.open ? "pageOpen" : ""} ${loading}`}
        >
          <Header pageOpen={this.handlePageOpen} timer={timers.header} />
          <Main
            pageClose={this.handlePageClose}
            pageType={pageStatus.type}
            timers={timers}
          />
        </div>
      </Layout>
    )
  }
}

export default IndexPage
