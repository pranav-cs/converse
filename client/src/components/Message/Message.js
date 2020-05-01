import React from 'react'

function Message({ name, text, color, photoURL }) {
  return (
    <article id='Message' className="media">
      <figure className="media-left">
        <p className="image is-48x48">
          <img className='is-rounded' src={photoURL} alt='' />
        </p>
      </figure>
      <div className="media-content">
        <div className="content">
          <p id='name' style={{ color: `${color}` }}>{name}</p>
          <p id='message'>{text}</p>
        </div>
      </div>
    </article>
  )
}

export default Message