import React, { Component } from 'react'

class Sidebar extends Component {
  render() {
    return (
      <div id='Sidebar'>
        <aside className="menu">
          <p className="menu-label">Rooms</p>
          <ul className="menu-list">
            <li><a className="is-active">General</a></li>
            <li><a>News</a></li>
            <li><a>Sports</a></li>
          </ul>
        </aside>
      </div>
    )
  }
}

export default Sidebar