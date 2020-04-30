import React from 'react'
import { useStoreState, useStoreActions } from 'easy-peasy'

function Sidebar() {
  const rooms = useStoreState(state => state.rooms.list)
  const current_room = useStoreState(state => state.people.me.current_room)
  const go_to = useStoreActions(actions => actions.people.go_to)

  return (
    <div id='Sidebar'>
      <aside className="menu">
        <p className="menu-label is-size-4 has-text-weight-semibold">Groups</p>
        <ul className="menu-list">
          {
            rooms.map((room, index) => {
              if (current_room === room) {
                // eslint-disable-next-line
                return <li key={index} onClick={() => go_to(room)}><a className='is-active'>{room}</a></li>
              }

              // eslint-disable-next-line
              return <li key={index} onClick={() => go_to(room)}><a>{room}</a></li>
            })
          }
        </ul>
      </aside>
    </div>
  )
}

export default Sidebar