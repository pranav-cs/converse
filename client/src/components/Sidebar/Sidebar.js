import React from 'react'
import { useStoreState, useStoreActions } from 'easy-peasy'

function Sidebar() {
  const rooms = useStoreState(state => state.rooms)
  const current_room = useStoreState(state => state.profile.current_room)

  const go_to = useStoreActions(actions => actions.profile.go_to)

  return (
    <div id='Sidebar'>
      <aside className="menu">
        <p className="menu-label has-text-weight-semibold">Rooms</p>
        <ul className="menu-list">
          {
            rooms.map((room, index) => {
              if (current_room === room) {
                return <li key={index} onClick={() => go_to(room)}><a className='is-active'>{room}</a></li>
              }

              return <li key={index} onClick={() => go_to(room)}><a>{room}</a></li>
            })
          }
        </ul>
      </aside>
    </div>
  )
}

export default Sidebar