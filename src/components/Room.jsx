import React from 'react';
import { connect } from 'react-redux';

import $ from 'jquery';

import { socket } from 'Login';

import List from 'List';
import Textbar from 'Textbar';
import Sidebar from 'Sidebar';
import Topbar from 'Topbar';
import SlidingMenu from 'SlidingMenu';

import { startLeaveRoom, newMessage, updateUserList, findIfMobile } from 'actions';

export class Room extends React.Component {
  constructor(props) {
    super(props);

    const { dispatch } = this.props;

    socket.on('disconnect', () => {
      dispatch(startLeaveRoom());
      console.log('Disconnected from server');
    });

    socket.on('welcomeMessage', (data) => {
      dispatch(newMessage(data.message, data.name, data.room));
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

    socket.on('updateUserList', (users) => {
      console.log('11111111111111111');
      console.log(users);
      dispatch(updateUserList(users));
    });
  }

  componentWillMount() {
    const { dispatch } = this.props;

    $(window).resize(() => {
      dispatch(findIfMobile());
    });

    dispatch(findIfMobile());
  }

  renderSidemenuOrTopbar() {
    const { isMobile } = this.props;

    if (isMobile) {
      return (<Topbar />);
    }

    return (<Sidebar />);
  }

  render() {
    return (
      <div id='room'>
        {this.renderSidemenuOrTopbar()}
        <SlidingMenu />
        <div id='main'>
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
