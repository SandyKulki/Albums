import React, { Component } from 'react'

import TopNav from "./TopNav"
import LeftPane from "./LeftPane"
import Background from "./Background"

class Container extends Component {
  constructor(props) {
    super(props)
    this.state = { searchPaneIsActive: false, query: "" }
    this.searhPaneToggler = this.searhPaneToggler.bind(this)
    this.search = this.search.bind(this)

  }

  searhPaneToggler() {
    this.setState({ searchPaneIsActive: !this.state.searchPaneIsActive })
    if (this.state.searchPaneIsActive) {
      this.setState({ query: "" })
    }
    document.querySelector(".searchPane").scrollTop = 0
    //everytime the TopNav refreshes its scrolled up
  }

  search(e) {
    this.setState({ query: e.target.value })
    //wildly setting state as query for the json album filtering 
  }

  componentDidUpdate(pprops, pstate) {
    if (pstate.query !== this.state.query) {
      this.props.fetchJsonAgain(this.state.query)
      //if the prevState is diff current state then we gotta fetch a new filtered arr
    }
  }

  componentDidMount() {
    document.querySelector(".searchPane").scrollTop = 0
    let playPreLoadIcon = document.createElement("i")
    playPreLoadIcon.className = "far fa-play-circle is-hidden"
    let pausePreLoadIcon = document.createElement("i")
    pausePreLoadIcon.className = "far fa-pause-circle is-hidden"
    document.body.appendChild(playPreLoadIcon, pausePreLoadIcon)
  }




  render() {
    return (
      <div>

        {this.props.feed ?
          <TopNav
            feed={this.props.feed}
            searhPaneToggler={this.searhPaneToggler}
            active={this.state.searchPaneIsActive}
            value={this.state.query}
            search={this.search}
          /> : null}
        <hr />
        <div>
          {this.props.feed ? null : <Background feed={this.props.feed} />}


          {this.props.feed ?
            <LeftPane
              feed={this.props.feed}
              active='true'
              bindFavs={this.bindFavs} /> : null}
        </div>

      </div>
    )
  }
}

export default Container