import React, { Component } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import MessageBox from '../MessageBox/MessageBox'

class Main extends Component {
  render() {
    return (
      <div id='Main'>
        <div className="columns is-mobile is-gapless">
          <div className="column is-one-quarter">
            <Sidebar />
          </div>
          <div className="column">
            <MessageBox />
          </div>
        </div>
      </div>
    )
  }
}

export default Main