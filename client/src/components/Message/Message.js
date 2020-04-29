import React, { Component } from 'react'

class Message extends Component {
  render() {
    const { name, message } = this.props

    return (
      <div className="card">
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <img src="https://picsum.photos/100" alt='' />
              </figure>
            </div>

            <div className="media-content">
              <p className="title is-6">{name}</p>
              <p className="subtitle is-6">{message}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Message