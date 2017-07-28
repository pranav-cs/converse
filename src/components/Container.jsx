import React from 'react';
import { connect } from 'react-redux';
import io from 'socket.io-client';

import $ from 'jquery';

import { newMessage, startLeaveRoom, updateUserList, findIfMobile } from 'actions';

export const socket = io();

export class Container extends React.Component {
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
  }

  componentWillMount() {
    const { dispatch } = this.props;

    $(window).resize(() => {
      dispatch(findIfMobile());
    });

    dispatch(findIfMobile());
  }

  render() {
    return (
      <div id="container">
        {this.props.children}
      </div>
    );
  }
}

export default connect()(Container);
