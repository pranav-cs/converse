import React, { Component } from 'react'

class Message extends Component {
  render() {
    const { name, message } = this.props

    return (
      <article id='Message' className="media">
        <figure className="media-left">
          <p className="image is-48x48">
            <img className='is-rounded' src="https://picsum.photos/48" alt='' />
          </p>
        </figure>
        <div className="media-content">
          <div className="content">
            <p id='name'>{name}</p>
            <p id='message'>{message}</p>
          </div>
        </div>
      </article>
    )
  }
}

export default Message