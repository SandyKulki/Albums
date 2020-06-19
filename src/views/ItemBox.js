import React, { Component } from 'react'


class ItemBox extends Component {
  constructor(props) {
    super(props)
    this.setFav = this.setFav.bind(this)
    this.state = { favId: props.favId }
  }

  setFav(id) {
    if (window.favs.hasFav(this.state.favId)) {
      this.setState({ favId: false })
      window.favs.deleteFav(id)
    }
    else {
      this.setState({ favId: id })
      window.favs.setFav(id)
    }
    this.props.bindFavs()
  }

  render() {
    let props = this.props
    return (
      <div className="albumContainer">
        <div className="left">
          <h3 onClick={_ => props.showModal(props.title, props.cover, props.href, props.albumId, props.price, props.releaseDate)}
            className="subtitle is-size-4-mobile has-text-weight-normal has-text-grey is-size-3-tablet">
            No. {1 * props.pos + 1} - {props.name}
          </h3>
          <h4 className="subtitle" style={{ marginBottom: "0 !important" }}>
            By: <span style={{ fontWeight: "bold !important" }}> {props.artist} </span>
          </h4>
          <p className="subtitle" style={{ marginBottom: "0 !important" }}>
            Released On: {props.releaseDate}
          </p></div>
        <img src={props.cover} alt='image' className='coverImage'></img>

      </div>
    )
  }
}

ItemBox.defaultProps = {
  favsMode: false
}

export default ItemBox