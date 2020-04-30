import React from 'react'
import { useStoreState } from 'easy-peasy'

function Message({ name, message }) {
  const profile = useStoreState(state => state.people.profiles[name])
  const { color, photoURL } = profile

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
          <p id='message'>{message}</p>
        </div>
      </div>
    </article>
  )
}

export default Message