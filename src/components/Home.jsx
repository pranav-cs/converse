import React from 'react';
import { connect } from 'react-redux';

import List from 'List';
import Textbar from 'Textbar';
import Sidebar from 'Sidebar';
import Topbar from 'Topbar';
import SlidingMenu from 'SlidingMenu';

import { newMessage, startEnterRoom, startLeaveRoom, updateUserList } from 'actions';

import socket from 'Login';

export class Room extends React.Component {
  constructor(props) {
    super(props);

    const { dispatch } = this.props;

    socket.on('connect', () => {
      console.log('Connected to server');
    });

    socket.on('disconnect', () => {
      dispatch(startLeaveRoom());
      console.log('Disconnected from server');
    });

    socket.on('welcomeMessage', (data) => {
      dispatch(newMessage(data.message, data.name, data.room));
    });

    socket.on('updateUserList', (users) => {
      dispatch(updateUserList(users));
    });

    socket.on('newArrival', (data) => {
      dispatch(newMessage(data.message, data.name, data.room));
    });

    socket.on('memberLeft', (data) => {
      dispatch(newMessage(data.message, data.name, data.room));
    });

    socket.on('newMessage', (data) => {
      dispatch(newMessage(data.message, data.name, data.room));
    });

    socket.on('updateRoomsList', (users) => {
      console.log('updateRoomsList');
      console.log(users);
    });
  }

  onJoinRoom(e) {
    e.preventDefault();

    const { dispatch } = this.props;

    const data = {
      name: this.refs.name.value,
      room: this.refs.room.value
    };

    socket.emit('join room', data, (result) => {
      if (result) {
        dispatch(startEnterRoom(data.name, data.room));
      }
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
