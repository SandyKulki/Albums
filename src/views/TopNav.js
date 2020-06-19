import React, { Component } from 'react'


class TopNav extends Component {
  render() {
    return (
      <div className="topNav">
        {

          <Input
            searhPaneToggler={this.props.searhPaneToggler}
            value={this.props.value}
            search={this.props.search} />

        }
      </div>
    )
  }
}



//User wants to search for an album
const Input = props => {
  return (
    <div className="column is-4 is-offset-4">
      <div className="field has-addons">

        <div className="control is-expanded">
          <input value={props.value} onChange={props.search} className="input has-text-primary zIndexk" type="text" placeholder="" />
        </div>
        <div className="control">
          <button onClick={props.searhPaneToggler} className="searchButton">
            Cancel
          </button>
        </div>
      </div>

    </div>

  )
}

export default TopNav