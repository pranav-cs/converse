import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { change_room } from '../../store/action_creators/action_creators'

class Sidebar extends Component {
  render() {
    return (
      <div id='Sidebar'>
        <aside className="menu">
          <p className="menu-label is-size-4-widescreen is-size-3-fullhd has-text-weight-semibold">Groups</p>
          <ul className="menu-list">
            {
              this.props.rooms.map((room, index) => {
                let class_list = 'is-size-5-widescreen is-size-4-fullhd'
                class_list += this.props.current_room === room ? ' is-active' : ''

                return (
                  // eslint-disable-next-line
                  <li key={index} onClick={() => this.props.change_room(room)}><a className={class_list}>{room}</a></li>
                )
              })
            }
          </ul>
        </aside>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    current_room: state.me.current_room,
    rooms: state.rooms
  }
}

const mapDispatchToProps = { change_room }

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Sidebar))