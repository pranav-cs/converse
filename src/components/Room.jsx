import React from 'react';
import { connect } from 'react-redux';

import { socket } from 'Container';

import List from 'List';
import Textbar from 'Textbar';
import Sidebar from 'Sidebar';
import Topbar from 'Topbar';
import SlidingMenu from 'SlidingMenu';

import { newMessage } from 'actions';

export class Room extends React.Component {
  constructor(props) {
    super(props);

    const { dispatch } = this.props;

    socket.on('newArrival', (data) => {
      dispatch(newMessage(data.message, data.name, data.room));
    });

    socket.on('memberLeft', (data) => {
      dispatch(newMessage(data.message, data.name, data.room));
    });

    socket.on('newMessage', (data) => {
      dispatch(newMessage(data.message, data.name, data.room));
    });
  }

  renderSidemenuOrTopbar() {
    const { isMobile } = this.props;

    if (isMobile) {
      return (<SlidingMenu />);
    }

    return (<Sidebar />);
  }

  render() {
    return (
      <div id='room'>
        {this.renderSidemenuOrTopbar()}
        <div id='main'>
          <Topbar />
          <List />
          <Textbar />
        </div>
      </div>
    );
  }
}

export default connect((state) => {
  return {
    isMobile: state.isMobile
  };
})(Room);
